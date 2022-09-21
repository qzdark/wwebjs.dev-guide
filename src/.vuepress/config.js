const { NavItems4EN, NavItems4DE, NavItems4FR, Sidebar4EN, Sidebar4DE, Sidebar4FR } = require("./config/index");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "whatsapp-web.js",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favcion/logo_32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favcion/logo_16x16.png" }],
    ["link", { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/favcion/logo_shortcut.ico' }],
    ["meta", { name: "theme-color", content: "#25D366" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  locales: {
    '/': {
      lang: 'English',
      title: 'whatsapp-web.js',
      description: 'A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app'
    },
    '/de/': {
      lang: 'Deutsch',
      title: 'whatsapp-web.js',
      description: 'Eine WhatsApp-Clientbibliothek für NodeJS, die eine Verbindung über die WhatsApp-Webbrowser-App herstellt'
    },
    '/fr/': {
      lang: 'Français',
      title: 'whatsapp-web.js',
      description: 'A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app'
    }
  },
  themeConfig: {
    repo: "pedroslopez/whatsapp-web.js",
    docsRepo: "wwebjs/wwebjs.dev",
    docsBranch: "main",
    editLinks: true,
    docsDir: "src",
    smoothScroll: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        algolia: {},
        nav: NavItems4EN,
        sidebar: Sidebar4EN,
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      },
      '/de/': {
        lang: 'Deutsch',
        selectText: 'Sprachen',
        ariaLabel: 'Wähle Sprache',
        editLinkText: 'Ändere diese Seite auf GitHub',
        lastUpdated: 'Letztes Update',
        algolia: {},
        nav: NavItems4DE,
        sidebar: Sidebar4DE,
        serviceWorker: {
          updatePopup: {
            message: "Es ist neuer Inhalt verfügbar.",
            buttonText: "Neuladen"
          }
        },
      },
      '/fr/': {
        lang: 'Français',
        selectText: 'Langages',
        ariaLabel: 'Choisir la langue',
        editLinkText: 'Modifier cette page sur GitHub',
        lastUpdated: 'Dernière mise à jour',
        algolia: {},
        nav: NavItems4FR,
        sidebar: Sidebar4FR,
        serviceWorker: {
          updatePopup: {
            message: "De nouveaux contenus sont disponibles.",
            buttonText: "Rafraîchir"
          }
        },
      }
    },
    yuu: require("./config/yuu"),
  },
  theme: "/theme/layouts/Layout.vue",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-last-updated",
    [
      "vuepress-plugin-code-copy",
      {
        align: "bottom",
        color: "#25D366",
        backgroundColor: "#25D366",
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
  ],
};
