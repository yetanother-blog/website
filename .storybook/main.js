const path = require('path');

module.exports = {
  stories: ['../src/ui/**/*.mdx'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-docs'],
  webpackFinal(config) {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    return config;
  },
};
