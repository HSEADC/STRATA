const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index", "allStyles"]),
  createPages("./src/404.html", "./404.html", ["index", "allStyles"]),
  createPages("./src/pages/articles.html", "pages/articles.html", [
    "index",
    "allStyles",
    "sectionArticles",
  ]),
  createPages("./src/pages/interactive.html", "pages/interactive.html", [
    "index",
    "allStyles",
  ]),
  createPages("./src/pages/calendar.html", "pages/calendar.html", [
    "index",
    "allStyles",
  ]),
];

module.exports = htmlPages;
