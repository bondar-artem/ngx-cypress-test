const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  projectId: "yvkxdj",
  env: {
    baseUrl: "http://localhost:4200/",
    user: "dummy",
    newPassword:"",
    password:""
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    setupNodeEvents(on, config) {
      const newPassword = process.env.NEW_PASSWORD
      const password = process.env.PASSWORD;
      config.env = { newPassword, password };
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
  },
});
