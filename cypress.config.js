const { defineConfig } = require("cypress");

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  experimentalMemoryManagement: true,
  screenshotOnRunFailure: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
