/** @format */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[contenthash].js"
  },

  plugins: [
    new htmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets/css"),
          to: path.resolve(__dirname, "./build/assets/css")
        },
        {
          from: path.resolve(__dirname, "./src/assets/fonts"),
          to: path.resolve(__dirname, "./build/assets/fonts")
        },
        {
          from: path.resolve(__dirname, "./src/assets/images"),
          to: path.resolve(__dirname, "./build/assets/images")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ],
        type: "javascript/auto"
      }
    ]
  }
};
