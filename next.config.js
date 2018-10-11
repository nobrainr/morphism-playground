const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const plugins = [new MonacoWebpackPlugin()];
module.exports = withSass(
  withCSS(
    withTypescript({
      webpack(config, options) {
        config.node = {
          fs: 'empty'
        };
        config.plugins.push(new MonacoWebpackPlugin());
        return config;
      }
    })
  )
);
