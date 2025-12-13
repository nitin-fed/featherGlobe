/** @format */

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

let htmlPageNames = ["index", "admin"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  console.log(name);
  return new htmlWebpackPlugin({
    template: `./public/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
  });
});

module.exports = {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true,
  },
  // mode: "development",
  // entry: {
  //   app: "./src/index.js",
  //   adminApp: "./src/admin.js",
  // },
  // entry: "./src/index.js",
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, "public"),
    // },
    // compress: true,
  },

  // plugins: [new htmlWebpackPlugin({ template: "./public/index.html" })],

  plugins: [...multipleHtmlPlugins],
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
