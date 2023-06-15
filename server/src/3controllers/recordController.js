import { recordService } from "../2services/index.js";
import { deleteFileService } from "../config/index.js";
import { ServerResponse } from "../config/index.js";
import { timestamp, __dirname } from "../../utils.js";
import * as path from "path";

const allRecords = async (req, res) => {
  try {
    const record = await recordService.getAll();
    ServerResponse.success({
      res,
      result: "records obtenidos",
      data: record,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error interno obteniendo records",
    });
  }
};

const oneRecord = async (req, res) => {
  let record = req.params.id;
  try {
    if (!record) {
      return ServerResponse.badRequest({
        res,
        error: "Sin id",
      });
    }
    const oneRecord = await recordService.getOne({ _id: record });
    ServerResponse.success({
      res,
      result: "record obtenido",
      data: oneRecord,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error interno obteniendo record",
    });
  }
};

const addRecord = async (req, res) => {
  let newRecord = {
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
  if (
    !newRecord.date ||
    !newRecord.nombre ||
    !newRecord.paterno ||
    !newRecord.materno
  ) {
    return ServerResponse.badRequest({
      res,
      error: "faltan datos para crear record",
    });
  }
  try {
    let createdRecord = await recordService.save(newRecord);
    ServerResponse.success({
      res,
      result: "record creado",
      data: createdRecord,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error interno creando record",
    });
  }
};

const updateMensajes = async (req, res) => {
  let record = req.params.id;
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
  try {
    const updateMensaje = await recordService.updateOne({ record, newvalues });
    ServerResponse.success({
      res,
      result: "mensaje agregado",
      data: updateMensaje,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error agregndo mensaje",
    });
  }
};

const addImage = async (req, res) => {
  let img = req.file.filename;
  let record = req.params.id;
  console.log(`img :${img} - record:${record}`);
  let newvalues = {
    $set: {
      img: `/assets/obituarioImages/${img}`,
    },
  };
  try {
    const updateImage = await recordService.updateOne({ record, newvalues });
    ServerResponse.success({
      res,
      result: "imagen agregada",
      data: updateImage,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error interno agregando imagen",
    });
  }
};

const updatePersonales = async (req, res) => {
  let record = req.params.id;
  let newvalues = {
    $set: {
      date: req.body.date,
      nombre: req.body.nombre,
      segundoNombre: req.body.segundoNombre,
      paterno: req.body.paterno,
      materno: req.body.materno,
    },
  };
  try {
    const updatePersonales = await recordService.updateOne({
      record,
      newvalues,
    });
    ServerResponse.success({
      res,
      result: "datos personales actualizados",
      data: updatePersonales,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error actualizando datos personales",
    });
  }
};

const updateFuneral = async (req, res) => {
  let record = req.params.id;
  let newvalues = {
    $set: {
      lugarVelatorio: req.body.lugarVelatorio,
      lugarResponso: req.body.lugarResponso,
      fechaResponso: req.body.fechaResponso,
      lugarCementerio: req.body.lugarCementerio,
    },
  };
  try {
    const updateFuneral = await recordService.updateOne({ record, newvalues });
    ServerResponse.success({
      res,
      result: "datos funeral actualizados",
      data: updateFuneral,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error actualizando datos funeral",
    });
  }
};

const deleteRecord = async (req, res) => {
  let record = req.params.id;
  const oneRecord = await recordService.getOne({ _id: record });
  let pathFile = path.join(__dirname, "../", `fcr_web/public${oneRecord.img}`);
  try {
    if (!record) {
      return ServerResponse.badRequest({
        res,
        error: "Sin id",
      });
    }
    const deleteRecord = await recordService.deleteOne({ record });
    if (deleteRecord) {
      const deleteImageFile = deleteFileService(pathFile);
    } else {
      ServerResponse.internalError({
        res,
        error: "error interno borrar imagen de record",
      });
    }
    ServerResponse.success({
      res,
      result: "record borrado",
      data: deleteRecord,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "error interno borrando record",
    });
  }
};

export default {
  allRecords,
  oneRecord,
  addRecord,
  addImage,
  updatePersonales,
  updateFuneral,
  updateMensajes,
  deleteRecord,
};
