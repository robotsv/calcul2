const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode);

module.exports = {
  mode: mode,
  entry: {
    scripts: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }), 
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                  },
                  useBuiltIns: "usage",
                  corejs: {
                      version: '3.21.1',
                      proposals: true
                  }
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
