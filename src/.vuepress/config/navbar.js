module.exports = [
  /**
   * Navigationbar
   */
  {
    text: "Guide",
    link: "/guide/v2/",
  },
  {
    text: "Resources",
    ariaLabel: "Resources",
    items: [
      {
        text: 'More WWebJS',
        items: [
          {
            text: "npm",
            link: "https://npmjs.com/package/whatsapp-web.js",
          },
          {
            text: "Releases",
            link: "https://github.com/pedroslopez/whatsapp-web.js/releases"
          },
          {
            text: "Discord",
            link: "https://discord.gg/wyKybbF"
          }
        ]
      },
      {
        text: "Support Projekt",
        items: [
          {
            text: "Github",
            link: "https://github.com/sponsors/pedroslopez",
          },
          {
            text: "Ko-fi",
            link: "https://ko-fi.com/pedroslopez",
          }
        ]
      },
      {
        text: "Guide Versions",
        items: [
          {
            text: "v2 Guide (Latest)",
            link: "/guide/v2/"
          },
          {
            text: "v1 Guide",
            link: "/guide/v1/"
          }
        ]
      },
    ]
  },
  {
    text: "Documentation",
    link: "https://docs.wwebjs.dev",
  }
];