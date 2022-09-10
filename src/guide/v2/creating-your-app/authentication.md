# Authentication

By default, whatsapp-web.js does not save session information. This means that you would have to scan the QR code to reauthenticate every time you restart the client. If you'd like to persist the session, you can pass an `authStrategy` as a client option. The library provides a few authentication strategies to choose from, but you can also choose to extend them or build your own.

For most cases we would recommend the [`LocalAuth` strategy](#localauth-strategy), because it is the easyist to use. 

## `NoAuth` Strategy

This is the default `authStrategy` used when you don't provide one. It does not provide any means of saving and restoring sessions. You can set this if you'd like to be explicit about getting a fresh session every time the client is restarted. 

```js {1,7}
const { Client, NoAuth } = require('whatsapp-web.js');

const client = new Client();

// equivalent to
const client = new Client({
    authStrategy: new NoAuth()
});
```

::: tip INFO
In this Guide we will work with the [`NoAuth()` strategy](), but can use any other strategy too.
:::

## `LocalAuth` Strategy

:::warning
`LocalAuth` requires a persistent filesystem to be able to restore sessions. This means that out of the box it is not compatible with hosts that provide ephemeral file systems, such as Heroku.
:::

This strategy enables session-restore functionality by passing a persistent [user data directory](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md) to the browser. This means that other data, such as message history when using a multidevice-enabled account, will also be persisted and restored. 

```js {1,4}
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});
```

By default, the relevant session files are stored under a `.wwebjs_auth` directory, but you can change this by specifying the `dataPath` option when instantiating `LocalAuth`.

### Multiple sessions
If you're using multiple clients belonging to different sessions, you can pass a `clientId` to segregate them:

```js {1,3-6,8-11}
const { Client, LocalAuth } = require('whatsapp-web.js');

const client1 = new Client({
    authStrategy: new LocalAuth({
    clientId: "client-one" })
});

const client2 = new Client({
    authStrategy: new LocalAuth({
    clientId: "client-two" })
});
```

## `RemoteAuth` Strategy

::: tip INFO
The [`LegacySessionAuth` strategy]() is no longer supported, instead of you can use [`RemoteAuth` strategy]().
::: 
