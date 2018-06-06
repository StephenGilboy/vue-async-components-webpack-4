'use strict'
require('dotenv').config();
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'production',
  entry: {
    index: './src/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ASSET_PATH,
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  optimization: {
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
