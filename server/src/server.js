import dotenv from "dotenv";
dotenv.config();

import pool from "./configs/db.js";
import express from "express";
import corsMiddleware from "./middlewares/cors.middleware.js";
import userRouter from "./routes/user.route.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 8000;

const app = express();

// Apply middleware
app.use(corsMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Route definitions
app.use("/user", userRouter);

// Error handler middleware
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
