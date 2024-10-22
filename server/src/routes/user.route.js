//routes folder is responsible for defining the routes

import express from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = express.Router();
userRouter.route("/signup").post(UserController.signup);

export default userRouter;
