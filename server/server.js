const fs = require("fs");
const express = require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/record"));
const dbo = require("./db/conn");

const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/cristoreyangol.cl/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/cristoreyangol.cl/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/cristoreyangol.cl/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Servidor HTTPS corriendo en puerto ${port}`);
});
