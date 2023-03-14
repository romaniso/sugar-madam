const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPrugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "build/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPrugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPrugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPrugin({
      filename: "styles.css",
    }),
  ],
};
