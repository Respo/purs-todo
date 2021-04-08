const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./entry.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    watchOptions: {
      aggregateTimeout: 400,
    },
  },
  plugins: [new HtmlWebpackPlugin()],
};
