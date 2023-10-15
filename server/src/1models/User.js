import mongoose from "mongoose";
const { Schema } = mongoose;

class User {
  static get collection() {
    return "fcrusers";
  }

  static get schema() {
    return {
      user: { type: String, maxLength: 50 },
      password: { type: String, maxLength: 50 },
    };
  }
}

export default User;
