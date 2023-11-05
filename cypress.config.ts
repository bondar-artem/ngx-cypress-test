import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 5000,
    defaultCommandTimeout: 5000,
    baseUrl: 'http://localhost:4200/',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
