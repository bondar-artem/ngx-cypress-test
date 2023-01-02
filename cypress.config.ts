import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: '**/*.e2e.{1-getting-started,2-advanced-examples}',
    viewportHeight: 768,
    viewportWidth: 1024
  }
})
