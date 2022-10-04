# Handling Attachments

:::tip
This page is a follow-up and bases its code on the [previous page](/guide/v2/creating-your-app/handling-messages).
:::

## Listening to attachments

Sometimes your client may need to download and process media files that have been attached to messages it receives. This library includes some useful functions to download these files in base64 format. You can detect which messages have attached media by checking its `hasMedia` property.

```js {1-5}
client.on('message', async message => {
    if(message.hasMedia) {
        console.log("Message with media got received:\n" + message);
    }
});
```

## Downloading Media

If the received message contains the `hasMedia` property, you can actually download the data by using `downloadMedia()` function:

```js {3-10}
client.on('message_create', async message => {
    if(message.hasMedia) {
        const media = await message.downloadMedia();
        console.log(
			'Information about media:' +
			`\nType: ${media.mimetype}` +
			`\nFilesize: ${media.filesize}B` +
			`\nFilename: ${media.filename}`
          /*`\nFiledata: ${media.data}` this returns the filedata of the media*/
        );
    }
});
```

::: tip
The `downloadMedia` function returns an object of [MessageMedia](https://docs.wwebjs.dev/MessageMedia.html) type.
:::

:::danger
You shouldn't assume that the download will be successful. In cases where the media is not able to be downloaded \(for example, if the media has been deleted from the phone or can no longer be downloaded\), the `downloadMedia()` function will return `undefined`.
:::

### Convert media to local file

:::tip
We recommend to create a folder named `media` to save or downloading your documents, images, audio, videos, etc.
:::

```js {3-4}
client.on('message_create', async message => {
    if(message.hasMedia) {
        const media = await message.downloadMedia();
        await media.toFilePath('./media/');
    }
});
```

::: warning
The `downloadMedia()` function has nothing to do with downloading the media into your directory. 
:::

## Sending Media

If you're sending files from your computer, you can use a helper function to automatically read the file in base64, compute its mime type and get its filename:

<code-group>
<code-block title="main.js" active>
```js {1}
const { Client, NoAuth, MessageMedia } = require('whatsapp-web.js');
```
</code-block>

<code-block title="commands/send-local-image.js">
```js {1-7}
module.exports = {
    name: 'local image',
    async execute(client, message) {
        const media = MessageMedia.fromFilePath('./media/image.png');
        chat.sendMessage(message.from, media);
    }
};
```
</code-block>
</code-group>

:::tip INFO
You can send a caption along with the file by specifying the `caption` option while sending the message: `chat.sendMessage(message.from media, {caption: 'this is my caption'}`
:::

```js {5}
module.exports = {
    name: 'local image',
    async execute(client, message) {
        const media = MessageMedia.fromFilePath('./media/image.png');
        chat.sendMessage(message.from, media, {caption: 'A picture of purpshell'});
    }
};
```

### Sending endcoded files

You can easily send photos, audio, videos and gifs by using the library. To do this, you'll just need to construct a [MessageMedia](https://docs.wwebjs.dev/MessageMedia.html) object, exactly like the one you get by downloading media. This requires the mimetype for the file you'll send, as well as a base64-encoded string representing the data.

<code-group>
<code-block title="commands/send-endcode-image.js" active>
```js {1-4,6-9}
module.exports = {
    name: 'endcode image',
    async execute(client, message) {
        const base64Image = 'encoded string';

        const media = new MessageMedia('image/png', base64Image);
        chat.sendMessage(message.from, media);
    }
};
```
</code-block>
</code-group>

### Sending files from a URL

A similar helper function is also available for sending files based on a remote URL:

<code-group>
<code-block title="commands/send-url-image.js" active>
```js {1-7}
module.exports = {
    name: 'url image',
    async execute(client, message) {
        const media = await MessageMedia.fromUrl('https://via.placeholder.com/350x150.png');
        chat.sendMessage(message.from, media);
    }
};
```
</code-block>
</code-group>

### Caveat for sending videos and gifs

Whatsapp-web.js uses [puppeteer](https://github.com/puppeteer/puppeteer), which comes bundled with the Chromium browser, an open source version of the popular Google Chrome browser. Since AAC and H.264 are licensed formats, they are not supported by Chromium. More info on this can be found on the[ puppeteer documentation](https://github.com/puppeteer/puppeteer#q-what-features-does-puppeteer-not-support).

Because of this, you'll need to point puppeteer to use a separately installed Chrome browser if you intend to use this functionality. This can be done by passing the `executablePath` option to puppeteer while creating the client:

The `executablePath` value will depend on your OS and install location for Chrome, but here are some defaults by OS:

<code-group>
<code-block title="Windows" active>
```js {}
const client = new Client({
    puppeteer: {
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    }
})
```
</code-block>

<code-block title="macOS">
```js {}
const client = new Client({
    puppeteer: {
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    }
})
```
</code-block>

<code-block title="Linux">
```js {}
const client = new Client({
    puppeteer: {
        executablePath: '/usr/bin/google-chrome-stable',
    }
})
```
</code-block>
</code-group>

If your device is not in this list, you have to search by yourself where the `executablePath` is located.

After all added code till your folder should have a look like this:

::: vue
whatsapp-app
├── `.wwebjs_auth`
│   └── `session-1`
│
├── `commands`
│   ├── beep.js
│   ├── chats.js
│   ├── ping.js
│   └── user-info.js
│
├── `node_modules`
│  
├── main.js
├── package-lock.json
└── package.json
:::

## Resulting Code

If you want to compare your code to the code we've constructed so far, you can review it over on the [GitHub repository](). 