const { setHeadlessWhen } = require('@codeceptjs/configure');
const dotenv = require('dotenv');
dotenv.config();

setHeadlessWhen(process.env.HEADLESS);

const { execSync } = require('child_process');
const clientPlaywrightVersion = execSync('npx playwright --version').toString().trim().split(' ')[1];

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: process.env.HYPEREXECUTE_PLATFORM,
    build: `Playwright CodeceptJS HyperExecute Build - ${clientPlaywrightVersion}`,
    name: 'Playwright CodeceptJS HyperExecute Test',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    video: true,
    console: true,
  }
};

exports.config = {
  tests: './*_test.js',
  output: './output',
  verbose: false,
  debug: false,
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.lambdatest.com/selenium-playground',
      show: true,
      chromium: {
        // LambdaTest WebSocket endpoint
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
        }
      }
    },
    PlaywrightDialogHelper: {
      require: './helpers/PlaywrightDialogHelper.js'
    }
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
