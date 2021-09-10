const ClosurePlugin = require('@ngageoint/closure-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production' || !argv.mode;
  const gccOptions = require(path.join(__dirname, 'gcc-options'));
  const depsFile = path.join(__dirname, 'deps.js');

  return {
    entry: [
      path.join(__dirname, 'index.js')
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    module: {
      rules: [
        // Strip all comments from ol source files, because the JSDoc is not supported by Closure
        {
          test: /\/ol\/src\//,
          use: 'webpack-strip-comments',
        }
      ]
    },
    resolve: {
      alias: {
        // Alias ol -> ol/src to reference untranspiled ES modules
        ol: path.dirname(require.resolve('ol/src'))
      }
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
    },
    plugins: [
      new ClosurePlugin.LibraryPlugin({
        closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
        deps: [
          require.resolve('google-closure-library/closure/goog/deps'),
          depsFile
        ]
      })
    ]
  };
};
