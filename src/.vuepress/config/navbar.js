export default [
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
        text: 'Find More',
        items: [
          {
            text: "npm",
            link: "https://npmjs.com/package/whatsapp-web.js",
          },
          {
            text: "Releases",
            link: "https://github.com/pedroslopez/whatsapp-web.js/releases"
          },
        ]
      },
      {
        text: 'Resources',
        items: [
          {
            text: "Old Guide",
            link: "/guide_old/"
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