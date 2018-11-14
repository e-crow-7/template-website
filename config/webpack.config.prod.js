const common = require("./common");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  devtool: false,
  entry: {
    main: ["@babel/polyfill", "./src/pages/main.js"]
  },
  output: {
    filename: "[name].js",
    path: common.BUILD_PATH,
    publicPath: "/"
  },
  plugins: [
    plugins.productionDefinitions,
    plugins.clean,
    plugins.mainHtml,
    plugins.copy,
    plugins.bundleAnalyzer
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
  mode: "production",
  optimization: {
    minimizer: [plugins.uglifyjs]
  }
};
