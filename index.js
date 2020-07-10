const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 5001;

app.use(express.static("views"));

// router.get("/", (req,res) => )
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/products.html"));
});

app.listen(PORT, () => {
  console.log(`Server run on port`, PORT);
});
