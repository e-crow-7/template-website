/**
 * Requirements
 */
const path = require("path");
const DotenvPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * Constants
 */
const ROOT_PATH = path.resolve(".");
const BUILD_PATH = `${ROOT_PATH}/build`;

/**
 * Webpack Modules
 */
const loaders = {
  babel: {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          "babel-preset-env",
          "babel-preset-es2015",
          "babel-preset-react-app"
        ],
        plugins: [
          "react-hot-loader/babel",
          "babel-plugin-transform-decorators-legacy",
          [
            "babel-plugin-module-resolver",
            {
              alias: {
                "@themes": "./src/themes",
                "@pages": "./src/pages",
                "@redux": "./src/redux",
                "@locale": "./src/locale"
              }
            }
          ]
        ]
      }
    }
  },
  sass: {
    test: /(\.scss$|\.sass$|\.css$)/,
    use: ["style-loader", "css-loader", "sass-loader"]
  },
  handlebars: {
    test: /\.hbs$/,
    loader: "handlebars-loader"
  }
};

/**
 * Webpack plugins
 */
const plugins = {
  clean: new CleanWebpackPlugin([BUILD_PATH], {
    root: ROOT_PATH,
    verbose: true
  }),
  dotenv: new DotenvPlugin(),
  mainHtml: new HtmlWebpackPlugin({
    inject: true,
    chunks: ["main"],
    filename: "index.html",
    template: "./public/template.hbs",
    title: "Main Page"
  }),
  subHtml: new HtmlWebpackPlugin({
    inject: true,
    chunks: ["sub"],
    filename: "sub.html",
    template: "./public/template.hbs",
    title: "Sub Page"
  }),
  copy: new CopyWebpackPlugin(
    [
      {
        from: "./public",
        to: "."
      }
    ],
    { ignore: ["*.hbs"] }
  )
};

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build"
  },
  entry: {
    main: "./src/pages/main.js",
    sub: "./src/pages/sub.js"
  },
  output: {
    filename: "[name].js",
    path: BUILD_PATH
  },
  plugins: [
    plugins.clean,
    plugins.dotenv,
    plugins.mainHtml,
    plugins.subHtml,
    plugins.copy
  ],
  module: {
    rules: [loaders.babel, loaders.handlebars, loaders.sass]
  },
  mode: process.env.NODE_ENV
};
