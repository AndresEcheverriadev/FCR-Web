import Dao from "../1models/Dao.js";
import RecordService from "./RecordService.js";

const dao = new Dao();

export const recordService = new RecordService(dao);
