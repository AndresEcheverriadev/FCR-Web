const express = require("express");
const upload = require("../multer/multerConfig.js");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const timestamp = Date.now();
const fs = require("fs").promises;

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("obituarioPersons")
    .find({})
    .sort({ date: -1 })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

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

recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    date: req.body.date,
    nombre: req.body.nombre,
    segundoNombre: req.body.segundoNombre,
    paterno: req.body.paterno,
    materno: req.body.materno,
    mesaggesWall: [],
    lugarVelatorio: req.body.lugarVelatorio,
    lugarResponso: req.body.lugarResponso,
    fechaResponso: req.body.fechaResponso,
    lugarCementerio: req.body.lugarCementerio,
    createdAt: timestamp,
  };
  db_connect
    .collection("obituarioPersons")
    .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

recordRoutes
  .route("/record/addImage/:id")
  .post(upload.single("imgDeceso"), function (req, response) {
    console.log("ruta ok");
    let db_connect = dbo.getDb();
    var img = req.file.filename;
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        img: `/assets/obituarioImages/${img}`,
      },
    };
    db_connect
      .collection("obituarioPersons")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
  });

recordRoutes.route("/updatePersonales/:id").post(function (req, response) {
  console.log(req.body);
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      date: req.body.date,
      nombre: req.body.nombre,
      segundoNombre: req.body.segundoNombre,
      paterno: req.body.paterno,
      materno: req.body.materno,
    },
  };
  db_connect
    .collection("obituarioPersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

recordRoutes.route("/updateFuneral/:id").post(function (req, response) {
  console.log(req.body);
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      lugarVelatorio: req.body.lugarVelatorio,
      lugarResponso: req.body.lugarResponso,
      fechaResponso: req.body.fechaResponso,
      lugarCementerio: req.body.lugarCementerio,
    },
  };
  db_connect
    .collection("obituarioPersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

recordRoutes.route("/updateMensajes/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let message = {
    mesagge: req.body.mesagge,
    author: req.body.author,
    time: timestamp,
  };
  let newvalues = {
    $push: {
      mesaggesWall: message,
    },
  };
  db_connect
    .collection("obituarioPersons")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

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

const deleteFile = async (file) => {
  await fs.access(`${file}`, (error) => {
    if (!error) {
      fs.unlink(`${file}`);
    } else {
      console.error("Error borrando archivo:", error);
    }
  });
};

module.exports = recordRoutes;
