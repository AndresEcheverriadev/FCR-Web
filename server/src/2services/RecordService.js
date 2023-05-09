import Record from "../1models/Record.js";
import GenericRepository from "./GenericRepository.js";

class RecordService extends GenericRepository {
  constructor(dao) {
    super(dao, Record.collection);
  }
}

export default RecordService;
