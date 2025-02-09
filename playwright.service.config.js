const { defineConfig } = require('@playwright/test');
const { getServiceConfig, ServiceOS } = require('@azure/microsoft-playwright-testing');
const config = require('./playwright.config');

export default defineConfig(
  config,
  getServiceConfig(config, {
    exposeNetwork: '<loopback>',
    timeout: 30000,
    os: ServiceOS.LINUX,
    useCloudHostedBrowsers: true, 
  }),
  {
    reporter: [['list'], ['@azure/microsoft-playwright-testing/reporter']],
  }
);