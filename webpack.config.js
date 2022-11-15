const path = require("path");
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/js/firebase.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "firebase.bundle.js",
  },
  plugins: [new dotenv()],
};
