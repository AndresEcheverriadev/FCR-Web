import { Router } from "express";
import recordController from "../3controllers/recordController.js";

const recordsRouter = Router();

recordsRouter.get("/", recordController.allRecords);
recordsRouter.get("/:id", recordController.oneRecord);
recordsRouter.post("/updateMensajes/:id", recordController.updateMensajes);

export default recordsRouter;
