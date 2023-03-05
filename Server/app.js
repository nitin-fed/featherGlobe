/** @format */

var express = require("express");
var path = require("path");

var app = express();

const port = 5001;

app.use(express.static("./dist/"));
app.use("/static", express.static(path.join(__dirname, "dist")));

app.get("./", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
