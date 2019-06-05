/* eslint-disable */

'use strict';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: 'production',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        extractComments: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
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
