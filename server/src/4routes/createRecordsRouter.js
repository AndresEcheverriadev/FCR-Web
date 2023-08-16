import { Router } from "express";
import recordController from "../3controllers/recordController.js";
import { uploadService } from "../middlewares/multerService.js";

const createRecordsRouter = Router();

createRecordsRouter.post("/add", recordController.addRecord);
createRecordsRouter.post(
  "/addImage/:id",
  uploadService.single("imgDeceso"),
  recordController.addImage
);
createRecordsRouter.post(
  "/updatePersonales/:id",
  recordController.updatePersonales
);
createRecordsRouter.post("/updateFuneral/:id", recordController.updateFuneral);
createRecordsRouter.delete("/delete/:id", recordController.deleteRecord);

export default createRecordsRouter;
