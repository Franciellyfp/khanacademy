const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pt.khanacademy.org/',
    defaultCommandTimeout: 30000,
    setupNodeEvents() {

    },
  },
})
