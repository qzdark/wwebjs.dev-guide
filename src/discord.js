import crypto from "crypto";

import axios from "axios";

import * as storage from "./storage.js";
import config from "./config.js";

/**
 * Code specific to communicating with the Discord API.
 */

/**
 * The following methods all facilitate OAuth2 communication with Discord.
 * See https://discord.com/developers/docs/topics/oauth2 for more details.
 */

/**
 * Generate the url which the user will be directed to in order to approve the
 * bot, and see the list of requested scopes.
 */
export function getOAuthUrl() {
  const state = crypto.randomUUID();

  const url = new URL("https://discord.com/api/oauth2/authorize");
  url.searchParams.set("client_id", config.DISCORD_CLIENT_ID);
  url.searchParams.set("redirect_uri", config.DISCORD_REDIRECT_URI);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("state", state);
  url.searchParams.set(
    "scope",
    "role_connections.write identify guilds.members.read connections"
  );
  url.searchParams.set("prompt", "consent");
  return { state, url: url.toString() };
}

/**
 * Given an OAuth2 code from the scope approval page, make a request to Discord's
 * OAuth2 service to retrieve an access token, refresh token, and expiration.
 */
export async function getOAuthTokens(code) {
  const url = "https://discord.com/api/v10/oauth2/token";
  const body = new URLSearchParams({
    client_id: config.DISCORD_CLIENT_ID,
    client_secret: config.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: config.DISCORD_REDIRECT_URI,
  });
  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch {
    throw new Error("Error getting OAuth tokens");
  }
}

/**
 * The initial token request comes with both an access token and a refresh
 * token.  Check if the access token has expired, and if it has, use the
 * refresh token to acquire a new, fresh access token.
 */
export async function getAccessToken(userId, tokens) {
  if (Date.now() > tokens.expires_at) {
    const url = "https://discord.com/api/v10/oauth2/token";
    const body = new URLSearchParams({
      client_id: config.DISCORD_CLIENT_ID,
      client_secret: config.DISCORD_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: tokens.refresh_token,
    });
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const tokens = response.data;
      tokens.access_token = tokens.access_token;
      tokens.expires_at = Date.now() + tokens.expires_in * 1000;
      await storage.storeDiscordTokens(userId, tokens);
      return tokens.access_token;
    } catch {
      throw new Error(`Error refreshing access tokens`);
    }
  }

  return tokens.access_token;
}

/**
 * Given a user based access token, fetch profile information for the current user.
 */
export async function getUserData(tokens) {
  const url = "https://discord.com/api/v10/oauth2/@me";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    return response.data;
  } catch {
    throw new Error(`Error fetching user data`);
  }
}

/**
 * Given a user based access token, fetch informactions about the current user.
 */
export async function getServerMemberData(tokens) {
  const url =
    "https://discord.com/api/users/@me/guilds/367298768464379905/member";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    return response.data;
  } catch {
    throw new Error(`Error fetching member data`);
  }
}

/**
 * Given a user based access token, fetch informactions about the current user.
 */
export async function getUserConnections(tokens) {
  const url = "https://discord.com/api/users/@me/connections";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });
    return response.data;
  } catch {
    throw new Error(`Error fetching user data`);
  }
}

/**
 * Given metadata that matches the schema, push that data to Discord on behalf
 * of the current user.
 */
export async function pushMetadata(userId, tokens, metadata) {
  // GET/PUT /users/@me/applications/:id/role-connection
  const url = `https://discord.com/api/v10/users/@me/applications/${config.DISCORD_CLIENT_ID}/role-connection`;
  const accessToken = await getAccessToken(userId, tokens);
  const body = {
    platform_name: "Contributed to whatsapp-web.js",
    metadata,
  };
  try {
    const response = await axios.put(url, JSON.stringify(body), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch {
    throw new Error(`Error pushing discord metadata:`);
  }
}

/**
 * Fetch the metadata currently pushed to Discord for the currently logged
 * in user, for this specific bot.
 */
export async function getMetadata(userId, tokens) {
  // GET/PUT /users/@me/applications/:id/role-connection
  const url = `https://discord.com/api/v10/users/@me/applications/${config.DISCORD_CLIENT_ID}/role-connection`;
  const accessToken = await getAccessToken(userId, tokens);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch {
    throw new Error(`Error getting discord metadata`);
  }
}

/**
 * Get the number of contributions for a given user.
 */
export async function getUserContributions(username) {
  const url = `https://api.github.com/repos/pedroslopez/whatsapp-web.js/contributors`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${config.GITHUB_SECRET}`,
      },
    });

    let contributions = 0;
    const { data } = response;
    data.forEach((contributor) => {
      if (contributor.login === username) {
        contributions = contributor.contributions;
      }
    });
    return contributions;
  } catch {
    throw new Error(`Error getting contributions`);
  }
}