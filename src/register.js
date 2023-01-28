
import config from "./config.js";
import axios from "axios";
/**
 * Register the metadata to be stored by Discord. This should be a one time action.
 * Note: uses a Bot token for authentication, not a user token.
 */
const url = `https://discord.com/api/v10/applications/${config.DISCORD_CLIENT_ID}/role-connections/metadata`;
// supported types: number_lt=1, number_gt=2, number_eq=3 number_neq=4, datetime_lt=5, datetime_gt=6, boolean_eq=7, boolean_neq=8
const body = [
  {
    key: "contributions",
    name: "Contributions",
    description: "Required Contributions",
    type: 2,
  },
  {
    key: "githubrole",
    name: "GitHub Role",
    description: "Required GitHub Role",
    type: 7,
  },
];
try {
  const response = await axios.put(url, JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${config.DISCORD_TOKEN}`,
    },
  });
  return response.data;
} catch {
  throw new Error(`Error pushing discord metadata schema`);
}
