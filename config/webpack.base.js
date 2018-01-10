const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const resolvePath = dir => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  context: resolvePath("../src"),
  entry: { bundle: "./index.js" },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "react-hot-loader/webpack",
          {
            loader: "babel-loader",
            query: {
              presets: ["es2015", "stage-0", "react"]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "json", ".css", ".scss", ".sass"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ]
};
