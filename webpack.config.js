/*
* @Author: zhangzhao
* @Date:   2017-11-15 21:02:48
* @Last Modified by:   zhangzhao
* @Last Modified time: 2017-11-20 20:04:00
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
  			test: /\.(png|svg|jpg|gif)$/,
  			use: [
  				'file-loader'
  			]
  		}
  	]
  }
};