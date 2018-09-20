const path = require("path");
const webpackConfig = require("./webpack.config");
const packageJSON = require("../../package.json");

module.exports = Object.assign({}, webpackConfig, {
  mode: "production",
  entry: [path.resolve("src", "components", "BlueBox", "index.js")],
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: packageJSON.name,
    libraryTarget: "umd"
  },
  externals: Object.keys(
    Object.assign({}, packageJSON.peerDependencies, packageJSON.dependencies)
  ).reduce(function(previous, key) {
    return Object.assign({}, previous, {
      [key]: key
    });
  }, {})
});
