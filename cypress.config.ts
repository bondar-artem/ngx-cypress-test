import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
  screenshotOnRunFailure: true,   // default true
  video: true,                     // default false
  viewportHeight: 800,            // default 660
  viewportWidth: 1200,           // default 1200
  // retries: 1,
  defaultCommandTimeout: 5000,   // default 4000
  requestTimeout: 10000,         // default 5000
  responseTimeout: 30000,         // default 30000
  // watchForFileChanges: false,
  env: {
    password: process.env.PASS
  }
});
