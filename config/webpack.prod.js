const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const config = merge(common, {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
      SENTRY_DSN: JSON.stringify(
        "https://12b6be8ef7c44f28ac37ab5ed98fd294@sentry.io/146021"
      )
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
});

config.entry.winamp.unshift("./js/googleAnalytics.min.js");

module.exports = config;
