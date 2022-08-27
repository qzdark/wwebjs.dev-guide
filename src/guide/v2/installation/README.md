# Installing Node

Before you can start working you need to install [Node.js](https://nodejs.org/) and whatsapp-web.js first.

whatsapp-web.js `v2` is requring Node.js `v12` or higher else you are not able to use it.

::: tip
To check if you already have Node installed on your machine, run `node -v` in your [terminal](/guide/v2/popular-topics/guide-explanations/). If the output is `v12` or higher, then you're good to go! Otherwise you should continue reading this.
:::

## Installation on Windows

Installing Node on Windows works just like any other program. Download any [version above 12+](https://nodejs.org/), open the downloaded file and follow the installer steps.

## Installation on macOS

This also applies to macOS. Download any [version above 12+](https://nodejs.org/), open the downloaded file and follow the installer steps. You may need to use a package manager like [Homebrew](https://brew.sh/) though. Use this with the command `brew install node`.

## Installation on Linux

If you are using Linux, chances are you already have Node installed. Check this with `node -v`, if you have an approximate output of `12.0` or higher, you can continue scrolling. If this is not the case, we recommend that you visit [this Node.js](https://nodejs.org/en/download/package-manager/) site.

::: warning
If you already have Node installed, but you are using an older version that is below v12, you need to upgrade your Node to v12 or higher. That is important because `whatsapp-web.js v2` is requring that.
:::

---

## Create your project folder

After installing Node, you can now run commands in your console. We recommend using [npm](https://www.npmjs.com/), but you can use both [Yarn](https://yarnpkg.com/) and [pnpm](https://pnpm.io/) as package manager. However, we support all package managers in the guide.

Let's get started. Open your terminal in your folder and give your project a name, as well as version and more. Execute this command in your terminal.

<code-group>
<code-block title="npm" active>
```bash
npm init
```
</code-block>

<code-block title="yarn">
```bash
yarn init
```
</code-block>

<code-block title="pnpm">
```bash
pnpm init
```
</code-block>
</code-group>