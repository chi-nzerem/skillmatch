import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const clientUrl = process.env.CLIENT_URL;

const corsOptions = {
  methods: "PUT,GET,POST,DELETE",
  origin: clientUrl,
  credentials: true,
};
const corsMiddleware = cors(corsOptions);
export default corsMiddleware;
