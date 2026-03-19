const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages("./src/404.html", "./404.html", ["index"]),
  createPages("./src/pages/articles.html", "pages/articles.html", ["index"]),
  createPages("./src/pages/interactive.html", "pages/interactive.html", [
    "index",
  ]),
  createPages("./src/pages/calendar.html", "pages/calendar.html", ["index"]),
];

module.exports = htmlPages;
