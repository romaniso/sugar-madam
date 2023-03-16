const path = require("path");
const MiniCssExtractPrugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    // assetModuleFilename: "images/[hash][ext][query]",
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
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
    new MiniCssExtractPrugin({
      filename: "styles[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "SUGAR MADAM | studio depilacji",
      template: "src/template.html",
      meta: {
        description:
          "Twoje najlepsze studio depilacji w Lublinie. Depilacja woskiem oraz pastą cukrową ",
      },
    }),
    new CopyPlugin({
      patterns: [{ from: "public/images", to: "images" }],
    }),
  ],
};
