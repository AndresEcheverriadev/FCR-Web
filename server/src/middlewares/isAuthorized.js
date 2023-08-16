import { ServerResponse } from "../config/serverResponses.js";
import jwt from "jsonwebtoken";

const isAuthorized = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  // jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
  //   if (error) {
  //     console.log(token);
  //     console.log("no autorizado");
  //     return ServerResponse.forbidden({
  //       res,
  //       error: "No Autorizado",
  //     });
  //   } else {
  //     console.log("si autorizado");
  //     next();
  //   })
  if (token !== process.env.JWT_SECRET_KEY) {
    return ServerResponse.forbidden({
      res,
      error: "No Autorizado",
    });
  } else {
    console.log("autorized");
    next();
  }
};

export { isAuthorized };
