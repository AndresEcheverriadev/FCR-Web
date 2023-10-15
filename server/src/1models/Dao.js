import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Record from "./Record.js";
import User from "./User.js";
// mongoose.set("strictQuery", false);

class Dao {
  constructor() {
    this.mongoose = mongoose
      .connect(`${process.env.MONGOURL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`conectado a base de datos`);
      })
      .catch((err) => {
        console.log(err.message);
      });
    const timestamps = {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    };

    const recordSchema = mongoose.Schema(Record.schema, timestamps);
    const userSchema = mongoose.Schema(User.schema, timestamps);

    this.models = {
      [Record.collection]: mongoose.model(Record.collection, recordSchema),
      [User.collection]: mongoose.model(User.collection, userSchema),
    };
  }

  save = async (document, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].create(document);
    return result;
  };

  getAll = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity]
      .find(options)
      .sort({ date: -1 })
      .lean();
    return result;
  };

  getOne = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].findById(options).lean();
    return result;
  };

  getUser = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity].findOne(options).lean();
    return result;
  };

  updateOne = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity]
      .findByIdAndUpdate(options.record, options.newvalues)
      .lean();
    return result;
  };

  deleteOne = async (options, entity) => {
    if (!this.models[entity]) throw new Error(`La entidad no existe`);
    let result = await this.models[entity]
      .deleteOne({ _id: options.record })
      .lean();
    return result;
  };
}

export default Dao;
