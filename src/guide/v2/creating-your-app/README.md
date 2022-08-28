# Setting up Application

## QR-Code gernation

Since whatsapp-web.js works by running WhatsApp Web in the background and automating its interaction, you'll need to authorize the client by scanning a QR code from WhatsApp on your phone.

Right now, we're just logging the text representation of that QR code to the console, but we can do better. Let's install and use [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) so we can render the QR code:

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