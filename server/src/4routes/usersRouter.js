import { Router } from "express";
import userController from "../3controllers/userController.js";

const usersRouter = Router();

usersRouter.post("/auth", userController.authUser);

export default usersRouter;
