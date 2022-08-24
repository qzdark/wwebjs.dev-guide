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
      inputs.push(config.sidebar);
    }
  };
  return inputs.reverse();
};

function setSidebar() {
  const readSidebar = new Map ([readGuideConfig()]);
  return Object.fromEntries(readSidebar);
};

module.exports = setSidebar();