// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { join } from 'path';

import * as karmaJasmine from 'karma-jasmine';
import * as karmaChromeLauncher from 'karma-chrome-launcher';
import * as karmaJasmineHtmlReporter from 'karma-jasmine-html-reporter';
import * as karmaCoverageIstanbulReporter from 'karma-coverage-istanbul-reporter';

const angularKarma = require('@angular-devkit/build-angular/plugins/karma');

export default function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverageIstanbulReporter,
      angularKarma
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};