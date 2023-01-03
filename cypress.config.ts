import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}'
  }
})
