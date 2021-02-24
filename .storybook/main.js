module.exports = {
  stories: ['../src/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    return config;
  },
};
