import { userService } from "../2services/index.js";
import { ServerResponse } from "../config/index.js";
import jwt from "jsonwebtoken";
import { timestamp, __dirname } from "../../utils.js";

const authUser = async (req, res) => {
  let { user, password } = req.body;
  if (!password) {
    return ServerResponse.badRequest({
      res,
      error: "Falta user",
    });
  }
  try {
    const record = await userService.getUser({ password: password });
    if (record) {
      let token = jwt.sign({ user: record.user }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      return ServerResponse.success({
        res,
        result: "User obtenido",
        data: token,
      });
    } else {
      return ServerResponse.badRequest({
        res,
        error: "No existe user",
      });
    }
  } catch (error) {
    return ServerResponse.internalError({
      res,
      error: "error interno en autenticación",
    });
  }
};

export default {
  authUser,
};
