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

```js {3-9}
client.on('message_create', async message => {
    if(message.hasMedia) {
        const media = await message.downloadMedia();
        console.log(
			'Information about media:' +
			`\nType: ${media.mimetype}` +
			`\nFilesize: ${media.filesize}B` +
			`\nFilename: ${media.filename}`
        );
    }
});
```

The `downloadMedia` function returns an object of type [MessageMedia](https://docs.wwebjs.dev/MessageMedia.html). This will give you access to its mimetype, base64 data and filename, if specified.

::: warning
The `downloadMedia()` function has nothing to do with downloading the media into your directory. 
:::

### Convert media to local file

```js {3-4}
client.on('message_create', async message => {
    if(message.hasMedia) {
        const media = await message.downloadMedia();
        await media.toFilePath('./images/');
    }
});
```

:::danger
You shouldn't assume that the download will be successful. In cases where the media is not able to be downloaded \(for example, if the media has been deleted from the phone or can no longer be downloaded\), the `downloadMedia()` function will return `undefined`.
:::

## Sending Media

You can easily send photos, audio, videos and gifs by using the library. To do this, you'll just need to construct a [MessageMedia](https://docs.wwebjs.dev/MessageMedia.html) object, exactly like the one you get by downloading media. This requires the mimetype for the file you'll send, as well as a base64-encoded string representing the data.

```javascript
const { MessageMedia } = require('whatsapp-web.js');

const media = new MessageMedia('image/png', base64Image);
chat.sendMessage(media);
```

:::tip INFO
You can send a caption along with the file by specifying the `caption` option while sending the message: `chat.sendMessage(media, {caption: 'this is my caption'}`
:::

### Sending local files

If you're sending files from your computer, you can use a helper function to automatically read the file in base64, compute its mime type and get its filename:

```javascript
const { MessageMedia } = require('whatsapp-web.js');

const media = MessageMedia.fromFilePath('./path/to/image.png');
chat.sendMessage(media);
```

### Sending files from a URL

A similar helper function is also available for sending files based on a remote URL:

```javascript
const { MessageMedia } = require('whatsapp-web.js');

const media = await MessageMedia.fromUrl('https://via.placeholder.com/350x150.png');
chat.sendMessage(media);
```


### Caveat for sending videos and gifs

Whatsapp-web.js uses [puppeteer](https://github.com/puppeteer/puppeteer), which comes bundled with the Chromium browser, an open source version of the popular Google Chrome browser. Since AAC and H.264 are licensed formats, they are not supported by Chromium. More info on this can be found on the[ puppeteer documentation](https://github.com/puppeteer/puppeteer#q-what-features-does-puppeteer-not-support).

Because of this, you'll need to point puppeteer to use a separately installed Chrome browser if you intend to use this functionality. This can be done by passing the `executablePath` option to puppeteer while creating the client:

```javascript
const client = new Client({
    puppeteer: {
        executablePath: '/path/to/Chrome',
    }
})
```

The `executablePath` value will depend on your OS and install location for Chrome, but here are some defaults by OS:

* **macOS:** `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
* **Windows**: `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`
* **Linux:** `/usr/bin/google-chrome-stable`
