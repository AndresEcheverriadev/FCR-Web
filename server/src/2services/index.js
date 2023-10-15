import Dao from "../1models/Dao.js";
import RecordService from "./RecordService.js";
import UserService from "./UserService.js";

const dao = new Dao();

export const recordService = new RecordService(dao);
export const userService = new UserService(dao);
