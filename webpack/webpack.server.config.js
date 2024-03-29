const path = require('path');
const extract = require('mini-css-extract-plugin')
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, '../source/server.js'),
  output: {
    path: path.resolve(__dirname, '../api'),
    filename: 'main.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [extract.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.mjs']
  },
  plugins: [
    new extract({
      filename: "style.css"
    }),
    new webpack.DefinePlugin({
      is_production: process.env.NODE_ENV === 'production' ? true : false,
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://platzi-blog.vercel.app' : 'http://localhost:3000'),
      STATICURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://platzi-blog.vercel.app' : 'http://localhost:8080'),
    })
  ],
  target: 'node',
}


module.exports = config;
