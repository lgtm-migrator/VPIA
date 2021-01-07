const express = require("express");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/upload" });
const path = require("path");
let cors = require("cors");
let MediaService = require("./config/config.json");

const https = require("https");
const fs = require("fs");

const httpsOptions = {
  cert: fs.readFileSync("/etc/letsencrypt/live/vpia.wapatah.com/fullchain.pem"),
  key: fs.readFileSync("/etc/letsencrypt/live/vpia.wapatah.com/privkey.pem")
}

const app = express();

app.use(cors());
app.use(express.static("upload"));
app.use(express.static(path.join(__dirname, "upload/img")));

const url = `${MediaService.URL}/`;

app.post("/upload", upload.any(), (req, res) => {
  if (req.files) {
    res.json({ location: url + req.files[0].filename });
  } else {
    throw "error";
  }
});

https.createServer(httpsOptions, app).listen(MediaService.PORT, () => {
  console.log(`Media microservice listening at ${MediaService.URL}`);
});
