/*
  TODO extract common chunks from dev and production configs
  and use something like webpack-merge to put them all together for the environment needed
  Ref : http://survivejs.com/webpack/developing-with-webpack/splitting-configuration/
*/

const webpack = require("webpack");
const path = require("path");

// @Matterwiki - TODO separate files for constants?
const BUILD_DIR = path.resolve(__dirname, "../client/public");
const APP_DIR = path.resolve(__dirname, "../client/components");

module.exports = {
  mode: "development",
  entry: [
    // React HMR specific stuff
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?http://localhost:5000/",
    "webpack/hot/dev-server",

    "whatwg-fetch",

    // Entry point
    APP_DIR + "/index.jsx"
  ],
  output: {
    path: BUILD_DIR,
    publicPath: "/public/",
    filename: "bundle.js"
  },
  // Enabling sourcemaps for easier debugging
  devtool: "inline-source-map",
  // Again for react HMR
  devServer: {
    hot: true,
    inline: true,
    contentBase: BUILD_DIR,
    publicPath: "/public/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};