/** @format */

/** merge two diff webpack config files */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "gallery",
      filename: "remoteEntry.js",
      remotes: {
        "./gallery": "./src/bootstrap"
      },
      shared: packageJSON.dependencies
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};

/**
 *Merge commonConfig and devConfig, devConfig will overwrite commong config as passed as second parameter
 */
module.exports = merge(commonConfig, devConfig);

 