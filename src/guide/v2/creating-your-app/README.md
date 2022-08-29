# Setting up Application

Now we really get started with our project. Open your [code editor](/guide/v2/extra-explanations/code-editor) and create a new file. We suggest that you save the file as `index.js`, but you may name it whatever you wish

:::tip INFO
If you are running your program with root privileges, you should also use the `--disable-setuid-sandbox` flag since chromium doesn't support running root with no sandbox by default.
:::

Here's the base code to get you started:

```js
// Require the necessary whatsapp-web.js classe
const { Client } = require('whatsapp-web.js');

// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

// Start your client
client.initialize();
```

::: warning NOTE
If you are using `no-gui systems` you also need to set the `--no-sandbox` flag in the puppeteer launch command.
```js
new Client({
	...,
	puppeteer: {
		args: ['--no-sandbox'],
	}
})
```
:::

## QR-Code gernation

Since whatsapp-web.js works by running WhatsApp Web in the background and automating its interaction, you'll need to authorize the client by scanning a QR code from WhatsApp on your phone. Right now, we're just logging the text representation of that QR code to the console, but we can do better. Let's install and use [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) so we can render the QR code:

<code-group>
<code-block title="npm" active>
```bash
npm install qrcode-terminal
```
</code-block>

<code-block title="yarn">
```bash
yarn add qrcode-terminal
```
</code-block>

<code-block title="pnpm">
```bash
pnpm add qrcode-terminal
```
</code-block>
</code-group>

And now we'll modify our code to use this new module:

```js{2,11}
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();
```

### Link Your Device



