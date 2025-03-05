const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    liveReload: true,
    watchFiles: ["src/**/*"],
    historyApiFallback:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.('woff|woff2|eot|ttf|otf')$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
    }),
  ],
};
