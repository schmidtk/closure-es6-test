const ClosurePlugin = require('@ngageoint/closure-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production' || !argv.mode;
  const gccOptions = require(path.join(__dirname, 'gcc-options'));

  return {
    entry: [
      path.join(__dirname, 'index.js')
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    devtool: isProduction ? 'source-map' : 'eval',
    watch: !isProduction,
    optimization: {
      minimize: isProduction,
      minimizer: [
        new ClosurePlugin({
          mode: 'AGGRESSIVE_BUNDLE',
          platform: 'java'
        }, gccOptions)
      ],
      concatenateModules: false,
      splitChunks: {
        minSize: 0
      }
    }
  };
};
