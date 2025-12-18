import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Routes from "./routes/Routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimitter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middileware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", Routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on port:5000");
  });
});
