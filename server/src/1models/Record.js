import mongoose from "mongoose";
const { Schema } = mongoose;

class Record {
  static get collection() {
    return "obituariopersons";
  }

  static get schema() {
    return {
      date: { type: String, maxLength: 20 },
      nombre: { type: String, maxLength: 50 },
      segundoNombre: { type: String, maxLength: 50 },
      paterno: { type: String, maxLength: 50 },
      materno: { type: String, maxLength: 50 },
      img: { type: String, maxLength: 100 },
      mesaggesWall: { type: Array },
      fechaResponso: { type: String, maxLength: 20 },
      lugarCementerio: { type: String, maxLength: 50 },
      lugarResponso: { type: String, maxLength: 50 },
      lugarVelatorio: { type: String, maxLength: 50 },
    };
  }
}

export default Record;
