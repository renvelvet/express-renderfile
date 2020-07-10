const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 5001;

app.use(express.static("views"));
app.use("/", router);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.listen(PORT, () => {
  console.log(`Server run on port`, PORT);
});
