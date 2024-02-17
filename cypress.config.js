const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pt.khanacademy.org/',
    defaultCommandTimeout: 50000,
    setupNodeEvents() {

    },
  },
})
