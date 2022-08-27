const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
