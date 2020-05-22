const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components/"),
      Styles: path.resolve(__dirname, "./src/styles/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
};
