module.exports = [
  /**
   * Navigationbar
   */
  {
    text: "Guide",
    link: "/guide/",
  },
  {
    text: "Resources",
    ariaLabel: "Resources",
    items: [
      {
        text: 'More WWebJS',
        items: [
          {
            text: "NPM",
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
        text: 'Guide Versions',
        items: [
          {
            text: "v1 Guide (Current)",
            link: "/v1-guide/"
          },
          {
            text: "v0 Guide",
            link: "/v0-guide/"
          },
        ]
      },
    ]
  },
  {
    text: "Documentation",
    link: "https://docs.wwebjs.dev",
  }
]