const path = require('path');
const webpack = require('webpack');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true'],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(CURRENT_WORKING_DIR, 'client/public/index.html'),
      inject: true
    })
  ],
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
