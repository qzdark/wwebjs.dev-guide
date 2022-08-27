/* This is temporary as long as no vxx.wwebjs.dev is available. */

const { readdirSync } = require('fs');
const { join } = require('path');

const path = join(__dirname, "../../../src/");

const getGuides = readdirSync(path).filter((dir) =>
  dir.endsWith("guide")
);

function setSidebar() {
  const inputs = {};

  for (const directory of getGuides) {
    const config = require(path+directory+"/config.js");

    if (config.settings.ready) {
      inputs[config.settings.sidebar] = config.sidebar;
    }
  };
  return inputs;
};

module.exports = setSidebar();