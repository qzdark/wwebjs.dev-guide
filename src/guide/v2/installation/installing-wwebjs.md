# Installing WWebJS

Now that you've installed Node.js, you can finally install whatsapp-web.js! Run the following command in your terminal:

*This could take a few seconds*
<code-group>
<code-block title="npm" active>
```bash
npm install whatsapp-web.js
```
</code-block>

<code-block title="yarn">
```bash
yarn add whatsapp-web.js
```
</code-block>

<code-block title="pnpm">
```bash
pnpm add whatsapp-web.js
```
</code-block>
</code-group>

In your console will now show up the downloading progress. After the download is completed, your terminal may show you this:

```bash
added 67 packages, and audited 68 packages in 52s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

And know your are done with the installation.

::: vue
whatsapp-bot
│ 
├── node_modules
│   ├── `@pedroslopez`
│   ├── `whatsapp-web.js`
│   └── `more folders`
│
├── package-lock.json
└── package.json
:::

::: vue
.
├── docs
│   ├── .vuepress _(**Optional**)_
│   │   ├── `components` _(**Optional**)_
│   │   ├── `theme` _(**Optional**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**Optional**)_
│   │   ├── `styles` _(**Optional**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**Optional, Danger Zone**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**Optional**)_
│   │   └── `enhanceApp.js` _(**Optional**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
:::