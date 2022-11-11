const express = require("express");

let multer = require("multer"),
  uuidv4 = require("uuid/v4");

const DIR = "./public/assets/obituarioImages";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("obituarioPersons")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("obituarioPersons")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  const url = req.protocol + "://" + req.get("host");
  let db_connect = dbo.getDb();
  let myobj = {
    date: req.body.date,
    nombre: req.body.nombre,
    segundoNombre: req.body.segundoNombre,
    paterno: req.body.paterno,
    materno: req.body.materno,
    img: url + "/public/assets/obituarioImages/" + req.filefilename,
    mesaggesWall: [],
    lugarVelatorio: req.body.lugarVelatorio,
    lugarResponso: req.body.lugarResponso,
    fechaResponso: req.body.fechaResponso,
    lugarCementerio: req.body.lugarCementerio,
  };
  db_connect
    .collection("obituarioPersons")
    .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/updatePersonales/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      nombre: req.body.nombre,
      segundoNombre: req.body.segundoNombre,
      paterno: req.body.paterno,
      materno: req.body.materno,
      img: req.body.img,
    },
  };
  db_connect
    .collection("obituarioPersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

recordRoutes.route("/updateMensajes/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let message = { mesagge: req.body.mesagge, author: req.body.author };
  let newvalues = {
    $push: {
      mesaggesWall: message,
    },
  };
  db_connect
    .collection("obituarioPersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("obituarioPersons")
    .deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      response.json(obj);
    });
});

module.exports = recordRoutes;
