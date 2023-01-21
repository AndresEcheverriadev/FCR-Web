const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults["upgrade-insecure-requests"];

app.use(
  helmet({
    contentSecurityPolicy: { directives: cspDefaults },
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/record"));
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Servidor corriendo en puerto: ${port}`);
});
