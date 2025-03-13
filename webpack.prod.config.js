
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[contenthash].js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name][contenthash].css",
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
    new htmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets/css"),
          to: path.resolve(__dirname, "./build/css"),
        },
        {
          from: path.resolve(__dirname, "./src/assets/fonts"),
          to: path.resolve(__dirname, "./build/fonts"),
        },
        {
          from: path.resolve(__dirname, "./src/assets/images"),
          to: path.resolve(__dirname, "./build/images"),
        },
        {
          from: path.resolve(__dirname, "./src/assets/images/icons"),
          to: path.resolve(__dirname, "./build/images/icons"),
        },

        {
          from: path.resolve(__dirname, "./src/assets/gallery"),
          to: path.resolve(__dirname, "./build/gallery"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
};
