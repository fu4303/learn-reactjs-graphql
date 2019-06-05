const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true'],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: '[name].js'
  },
  devServer: {
    port: 5000,
    open: true,
    inline: true,
    compress: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  devtool: 'eval-source-map'
};
