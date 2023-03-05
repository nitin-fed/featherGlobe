/** @format */

const express = require("express");
const app = express();
const port = "3001";
var path = require("path");

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.use(express.static("*"));

app.get("/", function (req, res) {
  console.log(req.header);
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

console.log(__dirname);

app.listen(port, () => {
  console.log("App running on " + port);
});

app.get("/users", (req, res) => {
  res.json({ name: " Nitin", lastName: "Sharma" });
});
