const path = require('path');
const extract = require('mini-css-extract-plugin')
const webpack = require('webpack');

const config = {
  entry: ["@babel/polyfill", path.resolve(__dirname, '../source/server.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js'
  },

  module: {
    rules: [
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
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new extract({
      filename: "style.css"
    }),
    new webpack.DefinePlugin({
      is_production: process.env.NODE_ENV === 'production' ? true : false,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://platzi-blog.now.sh' : 'http://localhost:3000'),
      STATICURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://platzi-blog.now.sh' : 'http://localhost:8080'),
      API: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://platzi-blog.000webhostapp.com' : 'https://platzi-blog.000webhostapp.com'),
    })
  ],
  target: 'node',
}


module.exports = config;
