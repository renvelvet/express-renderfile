const express = require("express");
const app = express();

const PORT = 5001;
const path = require("path");

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/products.html"));
});

app.listen(PORT, () => {
  console.log(`Server run on port`, PORT);
});
