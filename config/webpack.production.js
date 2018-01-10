const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const resolvePath = dir => {
  return path.resolve(__dirname, dir);
};

module.exports = merge(base, {
  output: {
    path: resolvePath("../public/dist"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        exclude: /node_modules/,
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  minimize: true
                }
              },
              "sass-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [require("autoprefixer"), require("precss")]
                }
              }
            ]
          })
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.[chunkhash:8].css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comment: false,
      minimize: true,
      sourceMap: true,
      compressor: {
        warnings: false
      }
    })
  ]
});
