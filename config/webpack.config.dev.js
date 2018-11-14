const common = require("./common");
const loaders = require("./loaders");
const plugins = require("./plugins");

const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: "./build",
    historyApiFallback: true
  },
  entry: {
    main: ["@babel/polyfill", "./src/pages/main.js"],
  },
  output: {
    filename: "[name].js",
    path: common.BUILD_PATH,
    publicPath: "/"
  },
  plugins: [
    plugins.developmentDefinitions,
    plugins.mainHtml,
    plugins.copy
  ],
  module: {
    rules: [
      loaders.babel,
      loaders.handlebars,
      loaders.sass,
      loaders.svg,
      loaders.file
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  mode: "development"
};
