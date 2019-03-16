const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.js$/,
    include: [
      path.resolve(__dirname, "./stories")
    ],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  return config;
};