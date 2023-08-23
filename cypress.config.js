const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qpby7b',
  e2e: {
    baseUrl: 'https://automationpratice.com.br',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
