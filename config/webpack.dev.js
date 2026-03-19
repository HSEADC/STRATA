const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dev_build"), // Указываем полный путь
    hot: true, // Включите горячую перезагрузку
    open: true, // Чтобы браузер открывался сам
  },
  output: {
    path: path.resolve(__dirname, "dev_build"),
    clean: true,
  },
});
