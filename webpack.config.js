const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
          use: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ]
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ]
  }
];

module.exports = config;
