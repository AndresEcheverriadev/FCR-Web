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

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// httpServer.listen(80, () => {
//   console.log("Servidor HTTP corriendo en puerto 80");
// });

httpsServer.listen(443, () => {
  console.log("Servidor HTTP corriendo en puerto 443");
});

// app.listen(port, () => {
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Servidor corriendo en puerto: ${port}`);
// });
