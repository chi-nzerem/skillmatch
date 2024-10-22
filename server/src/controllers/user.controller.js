// controller folder is responsible for extract the data from request
//do validation ,send response and  handler error

import errorThrower from "../helper/errorThrower.js";
import UserService from "../services/user.service.js";

class UserController {
  async signup(request, response, next) {
    try {
      const { email, password } = request.body;

      if (!email || !password)
        throw errorThrower(400, "please provide all the field");
      const result = await UserService.signup(email, password);
      response.status(200).send({
        status: "success",
        message: "user created successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
