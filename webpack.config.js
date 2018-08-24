const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    vendor: ['babel-polyfill'],
    app: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/public/',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/public/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?classPrefix',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: { javascriptEnabled: true },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/public/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3001,
    watchContentBase: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = config;
