import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import Routes from "./routes/Routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimitter.js";
import e from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

//middileware
if(process.env.NODE_ENV !== "production"){
  app.use(cors());
}
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", Routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on port:5000");
  });
});
