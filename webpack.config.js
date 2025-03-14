// 

// const path = require("path");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
// const UnusedWebpackPlugin = require("unused-webpack-plugin");

// module.exports = {
//   entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.js")],
//   mode: "development",
//   devServer: {
//     contentBase: path.resolve(__dirname, "dist"),
//     open: true,
//     clientLogLevel: "silent",
//     port: 9000
//   },

//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js"
//   },
//   node: {
//     fs: "empty"
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Application name",
//       template: "./src/index.html"
//     }),
//     new UnusedWebpackPlugin({
//       // Source directories
//       directories: [path.join(__dirname, "src")],
//       // Exclude patterns
//       exclude: ["*.test.js"],
//       // Root directory (optional)
//       root: __dirname
//     })
//   ],

//   module: {
//     loaders: [{ test: /\.js?$/, loader: "babel" }],
//     rules: [
//       {
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"]
//           }
//         },
//         test: /\.jsx?$/,
//         exclude: /node_modules/
//       },

//       {
//         test: /\.(css|scss)$/,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(ttf|eot|woff|woff2)$/,
//         exclude: [
//           /\.html$/,
//           /\.(js|jsx)$/,
//           /\.css$/,
//           /\.scss$/,
//           /\.json$/,
//           /\.bmp$/,
//           /\.gif$/,
//           /\.jpe?g$/,
//           /\.png$/,
//           /\.ejs$/
//         ],
//         loader: "file-loader",
//         options: {
//           name: "fonts/[name].[ext]"
//         }
//       },
//       {
//         test: /\.(png|jpg|svg)$/,
//         use: {
//           loader: "url-loader"
//         }
//       }
//     ]
//   }
// };
