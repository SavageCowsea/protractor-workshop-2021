import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER  : false,
  getPageTimeout: 30000,
  onPrepare: () => {
    browser.ignoreSynchronization  = true;
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
    const { AwesomeReport } = require('jasmine-awesome-report');
    const config = {  fullPath: 'reports', fileName: 'awesome', merge: true
    };
    jasmine.getEnv().addReporter(AwesomeReport.getReport(config));

  }
};
