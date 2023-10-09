import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://changemeinthefuture.com',
    retries:	{ "runMode": 2, "openMode": 2 },
    specPattern:	'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    pageLoadTimeout: '5000',
    screenshotOnRunFailure: true,
    screenshotsFolder: '"C:\Autotests\cypress-screens"'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
