const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
        exclude: /node_modules/,
      },
      {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components/"),
      Styles: path.resolve(__dirname, "./src/styles/"),
      Assets: path.resolve(__dirname, "./src/assets/"),
      Actions: path.resolve(__dirname, "./src/actions/"),
      Reducers: path.resolve(__dirname, "./src/reducers/"),
      Contexts: path.resolve(__dirname, "./src/contexts/"),
      CustomHooks: path.resolve(__dirname, "./src/customHooks/"),
      InitialStates: path.resolve(__dirname, "./src/initialStates/"),
      Utils: path.resolve(__dirname, "./src/utils/"),
      Constants: path.resolve(__dirname, "./src/constants/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      favicon: "public/favicon.svg",
    }),
    new Dotenv(),
  ],
};
