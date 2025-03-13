
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // or '/dist/' if your files are in a dist folder
    filename: "bundle.js",
  },
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
  },

  plugins: [new htmlWebpackPlugin({ template: "./public/index.html" })],
  module: {
    rules: [
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
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
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
