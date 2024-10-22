// controller folder is responsible to write the main logic, use the database model function etc

import UserModel from "../models/user.model.js";

class UserService {
  async signup(email, password) {
    const result = await UserModel.createUser(email, password);
    return true;
  }
}

export default new UserService();
