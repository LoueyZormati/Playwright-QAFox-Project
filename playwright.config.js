const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './TestCases',
  fullyParallel: true,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  // Définir plusieurs projets pour différents navigateurs
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], browserName: 'webkit' },
    },
  ],

  use: {
    headless: false, // Exécuter en mode headful (visible) ou headless (invisible)
    video: 'retain-on-failure',
    screenshot: 'on',
    trace: 'retain-on-failure',
  },
});