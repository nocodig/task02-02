const { HotModuleReplacementPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.common')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    port: 8081,
    host: 'localhost',
    open: true,
    compress: true,
    clientLogLevel: 'warning',
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
})
