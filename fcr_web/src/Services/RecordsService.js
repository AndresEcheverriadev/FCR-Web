import { HTTPRequestService } from "./HTTPRequestService.js";

const getAllRecords = async () => {
  try {
    const { data } = await HTTPRequestService.get(
      process.env.REACT_APP_SERVER_URL_RECORD
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const getFilteredRecord = async (id) => {
  try {
    const { data } = await HTTPRequestService.get(
      `${process.env.REACT_APP_SERVER_URL_RECORD}/${id}`
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const addMesagge = async (id, msg) => {
  try {
    const { data } = await HTTPRequestService.post(
      `${process.env.REACT_APP_SERVER_URL_MESAGGES}/${id}`,
      msg
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const addObituario = async (
  date,
  nombre,
  segundoNombre,
  paterno,
  materno,
  lugarVelatorio,
  lugarResponso,
  fechaResponso,
  lugarCementerio
) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_SERVER_URL_ADD,
      {
        date,
        nombre,
        segundoNombre,
        paterno,
        materno,
        lugarVelatorio,
        lugarResponso,
        fechaResponso,
        lugarCementerio,
      }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const addImage = async (id, image) => {
  try {
    const { data } = await HTTPRequestService.postImage(
      `${process.env.REACT_APP_SERVER_URL_ADDIMAGE}/${id}`,
      image
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const updateData = async (id, update) => {
  try {
    const { data } = await HTTPRequestService.post(
      `${process.env.REACT_APP_SERVER_URL_UPDATE_PERSONALES}/${id}`,
      {
        update,
      }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const updateFuneral = async (id, update) => {
  try {
    const { data } = await HTTPRequestService.post(
      `${process.env.REACT_APP_SERVER_URL_UPDATE_FUNERAL}/${id}`,
      {
        update,
      }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const removeRecord = async (id) => {
  try {
    const { data } = await HTTPRequestService.remove(
      `${process.env.REACT_APP_SERVER_URL_DELETE}/${id}`
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

export const RecordsService = {
  getAllRecords,
  getFilteredRecord,
  addMesagge,
  addObituario,
  addImage,
  updateData,
  updateFuneral,
  removeRecord,
};
