import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 10000,
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:4200/',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
