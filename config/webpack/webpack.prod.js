const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: 'production',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        extractComments: true,
        sourceMap: false,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false
        }
      })
    ]
  }
};
