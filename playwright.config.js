const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './TestCases',
  fullyParallel: true,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

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
    headless: false, 
    video: 'retain-on-failure',
    screenshot: 'on',
    trace: 'retain-on-failure',
  },
});