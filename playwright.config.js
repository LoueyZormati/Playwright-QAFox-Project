// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('events');



/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './TestCases',
 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    headless: false ,
    video:'retain-on-failure',
    screenshot : 'on' ,
    trace:'retain-on-failure',
    //viewport:{width:720,height:720}
    
  },

  
 

});

