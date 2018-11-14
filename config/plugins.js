/**
 * Webpack plugins
 */

const common = require("./common");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  clean: new CleanWebpackPlugin([common.BUILD_PATH, common.REPORT_PATH], {
    root: common.ROOT_PATH,
    verbose: true
  }),
  mainHtml: new HtmlWebpackPlugin({
    inject: true,
    chunks: ["main"],
    filename: "index.html",
    template: `${common.ROOT_PATH}/public/template.hbs`,
    title: "Website Template"
  }),
  copy: new CopyWebpackPlugin(
    [
      {
        from: "./public",
        to: "."
      }
    ],
    { ignore: ["*.hbs"] }
  ),
  developmentDefinitions: new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(false),
    "process.env.NODE_ENV": JSON.stringify("development"),
    "process.env.DEBUG": JSON.stringify("")
  }),
  productionDefinitions: new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env.DEBUG": JSON.stringify("")
  }),
  uglifyjs: new UglifyJsPlugin({
    uglifyOptions: {
      output: {
        comments: false
      },
      compress: {
        drop_console: true,
        passes: 1
      },
      warnings: false
    }
  }),
  bundleAnalyzer: new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: `${common.REPORT_PATH}/bundle.html`,
    openAnalyzer: false
  })
};
