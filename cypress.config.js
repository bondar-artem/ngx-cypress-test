const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  projectId: "yvkxdj",
  env: {
    baseUrl: "http://localhost:4200/",
    user: "dummy",
    password: "dummy",
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    setupNodeEvents(on, config) {
      const user = process.env.USER_NAME;
      const password = process.env.PASSWORD;
      // if (!password || !user) {
      //     throw new Error("You did not provide password or username");
      //   }
      config.env = { user, password };
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
  },
});
