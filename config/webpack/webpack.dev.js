/* eslint-disable */

'use strict';

const CURRENT_WORKING_DIR = process.cwd();
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true'],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  devtool: 'eval-source-map'
};
