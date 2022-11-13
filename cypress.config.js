const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
//let percyHealthCheck = require('@percy/cypress/task')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  defaultCommandTimeout: 10000,
  projectId: 'soeotu',
  experimentalWebKitSupport: true,
  env: {
    'cypress-plugin-snapshots': {
      imageConfig: {
        threshold: 0.01,
      },
    },
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      //on("task", percyHealthCheck);
    },
    baseUrl: 'http://localhost:4200/',
    excludeSpecPattern: [
      '**/examples/*',
      '**/__snapshots__/*',
      '**/__image_snapshots__/*',
    ],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
