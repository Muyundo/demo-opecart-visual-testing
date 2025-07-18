const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = defineConfig({
  e2e: {
    projectId: "sz8cqz",

    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
      // implement node event listeners here
    },
  },
});
