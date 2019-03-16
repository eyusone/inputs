module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  return config;
};