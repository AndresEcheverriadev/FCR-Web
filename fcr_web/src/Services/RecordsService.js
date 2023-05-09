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

const getFilteredRecord = async (date) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_FILTERED_BOOKINGS_URL,
      { date }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const addRecord = async (
  nombreReserva,
  emailReserva,
  telefonoReserva,
  diaReserva,
  horaReserva,
  cantidadReserva,
  zonaReserva,
  comentarioReserva
) => {
  try {
    const { data } = await HTTPRequestService.postBooking(
      process.env.REACT_APP_CREATE_BOOKING_URL,
      {
        nombreReserva,
        emailReserva,
        telefonoReserva,
        diaReserva,
        horaReserva,
        cantidadReserva,
        zonaReserva,
        comentarioReserva,
      }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const removeRecord = async (_id) => {
  try {
    const { data } = await HTTPRequestService.remove(
      process.env.REACT_APP_DELETE_BOOKING_URL,
      _id
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

export const RecordsService = {
  getAllRecords,
  getFilteredRecord,
  addRecord,
  removeRecord,
};
