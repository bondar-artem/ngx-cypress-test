import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:4200`,
    pageLoadTimeout: 5500,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx, ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
