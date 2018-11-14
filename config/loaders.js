/**
 * Webpack Loaders
 */
module.exports = {
  babel: {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript"
        ],
        plugins: [
          "react-hot-loader/babel",
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-object-rest-spread",
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          "emotion",
          [
            "babel-plugin-module-resolver",
            {
              alias: {
                "@styles": "./src/styles",
                "@pages": "./src/pages",
                "@documents": "./src/documents",
                "@redux": "./src/redux",
                "@locale": "./src/locale",
                "@components": "./src/components",
                "@media": "./src/media",
                "@server": "./src/server"
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
  },
  svg: {
    test: /\.svgd$/,
    loader: "react-svg-loader"
  },
  url: {
    test: /\.(png|jpg|jpeg|gif|ttf|eot|svg)$/i,
    loader: "url-loader"
  },
  file: {
    test: /\.(png|jpg|jpeg|gif|ttf|eot|svg)$/,
    loader: "file-loader"
  }
};
