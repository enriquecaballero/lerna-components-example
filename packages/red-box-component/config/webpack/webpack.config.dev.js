const webpack = require("webpack");
const path = require("path");
const webpackConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJSON = require("../../package.json");

const LOCALHOST = "0.0.0.0";
const ROOT = process.cwd();

const devServer = {
  hot: true,
  host: LOCALHOST,
  contentBase: path.resolve(ROOT, "dist"),
  publicPath: "/",
  stats: { colors: true },
  port: 2222
};

module.exports = Object.assign({}, webpackConfig, {
  devtool: "source-map",
  mode: "development",
  devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: packageJSON.name,
      favicon: path.resolve(ROOT, "resources", "favicon.ico"),
      template: path.resolve(ROOT, "src", "templates", "index.ejs"),
      inject: "body",
      filename: "index.html"
    })
  ]
});
