/* This is temporary as long as no vxx.wwebjs.dev is available. */

const { readdirSync } = require('fs');
const { join } = require('path');

const path = join(__dirname, "../../../src/");

const getGuides = readdirSync(path).filter((dir) =>
  dir.endsWith("guide")
);

function readGuideConfig() {
  let inputs = [];

  for (const directory of getGuides) {
    const config = require(path+directory+"/config.js");

    if (config.settings.ready) {
      inputs.push(config.settings);
    }
  };
  return inputs.reverse();
};

function setGuideVersions() {
  let sorted = [];

  for (const guideConfig of readGuideConfig()) {
    sorted.push({
      text: guideConfig.navbar,
      link: guideConfig.link,
    });
  };
  return sorted;
};

module.exports = [
  /**
   * Navigationbar
   */
  {
    text: "Guide",
    link: "/v1-guide/",
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
        text: 'Guide Versions',
        items: setGuideVersions(),
      },
    ]
  },
  {
    text: "Documentation",
    link: "https://docs.wwebjs.dev",
  }
];