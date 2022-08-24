const { readdirSync } = require('fs');
const { join } = require('path');

const path = join(__dirname, "../../../src/");

const getGuides = readdirSync(path).filter((dir) =>
  dir.endsWith("guide")
);

function setSidebar() {
  let inputs = [];

  for (const directory of getGuides) {
    const config = require(path+directory+"/config.js");

    if (config.settings.ready) {
      const createSidebar = {};
      createSidebar[config.settings.link] = config.sidebar;
      inputs.push(createSidebar);
    }
  };
  return inputs.reverse();
};

module.exports = setSidebar().toString();