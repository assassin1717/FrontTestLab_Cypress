const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://fronttestlab.web.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
