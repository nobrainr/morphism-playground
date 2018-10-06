const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const plugins = [new MonacoWebpackPlugin()];
module.exports = withCSS(
  withTypescript({
    webpack(config, options) {
      //   config.plugins.push(...plugins);
      return config;
    }
  })
);
