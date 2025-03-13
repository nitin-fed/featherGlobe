

// index.js
const express = require("express");
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");

app.use(cors());
app.set("uploads", path.join(__dirname, "uploads"));
app.set("view engine", "ejs");

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
     
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image Uploaded");
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT 3001 ", PORT);
});
