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
  createPages("./src/404.html", "./404.html", ["index"]),
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
  createPages(
    "./src/pages/interactive/main_test_mushroom.html",
    "pages/interactive/main_test_mushroom.html",
    ["index"],
  ),
  createPages(
    "./src/pages/interactive/main_test1_questions.html",
    "pages/interactive/main_test1_questions.html",
    ["index"],
  ),
  createPages(
    "./src/pages/interactive/main_test2_questions.html",
    "pages/interactive/main_test2_questions.html",
    ["index"],
  ),
  createPages(
    "./src/pages/interactive/test_mushroom.html",
    "pages/interactive/test_mushroom.html",
    ["index", "testMushrooms"],
  ),
  createPages(
    "./src/pages/interactive/test1_questions.html",
    "pages/interactive/test1_questions.html",
    ["index", "allStyles", "testsExam", "testForestExam"],
  ),
  createPages(
    "./src/pages/interactive/test2_questions.html",
    "pages/interactive/test2_questions.html",
    ["index", "allStyles", "testsExam", "testForestAttention"],
  ),
  createPages(
    "./src/pages/interactive/results_test_mushrooms.html",
    "pages/interactive/results_test_mushrooms.html",
    ["index", "testMushroomResult", "allStyles"],
  ),
  createPages(
    "./src/pages/interactive/results_test_exam.html",
    "pages/interactive/results_test_exam.html",
    ["index", "testsExamResult", "allStyles"],
  ),
  createPages(
    "./src/pages/interactive/results_test_exam_attention.html",
    "pages/interactive/results_test_exam_attention.html",
    ["index", "testMushroomResult", "allStyles"],
  ),
];

module.exports = htmlPages;
