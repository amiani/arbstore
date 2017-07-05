const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = [
  {
    entry: './src/server.js',
    target: 'node',
    externals: nodeExternals(),
    output: {
      path: path.join(__dirname, 'dist/'),
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          exclude: '/node_modules',
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
  },
  {
    entry: './src/browser.js',
    output: {
      path: path.join(__dirname, 'dist/static'),
      publicPath: '/static/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules',
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          exclude: '/node_modules',
          use : [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
  }
];

module.exports = config;
