const path = require("path");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const base = require("./webpack.base");

const resolvePath = dir => {
  return path.resolve(__dirname, dir);
};

module.exports = merge(base, {
  output: {
    path: resolvePath("../public/dev"),
    filename: "[name].js"
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
                  modules: true
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
  devtool: "eval-source-map",
  plugins: [new ExtractTextPlugin("style.css")]
});
