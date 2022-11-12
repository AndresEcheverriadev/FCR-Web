const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
let multer = require("multer");

app.use(
  multer({
    dest: path.join(__dirname, "public/assets/obituarioImages"),
  }).single("imgDeceso")
);

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
