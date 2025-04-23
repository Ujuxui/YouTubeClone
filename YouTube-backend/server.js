// Importing files since using ES Module
import express from "express";
import mongoose from "mongoose";
import logger from "./Backend/Middleware/logger.js";
import cors from "cors";
import commentRoutes from "./Backend/Routes/comment.routes.js";
import videoRoutes from "./Backend/Routes/video.routes.js";
import authRoutes from "./Backend/Routes/auth.routes.js";
import channelRoutes from "./Backend/Routes/channel.routes.js";

const app = express();
// Middleware
app.use(express.json());
app.use(logger);
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/YouTube");
const db = mongoose.connection;
db.on("open", () => {
  console.log("Connection successful!");
});
db.on("error", () => {
  console.log(err);
});

// Routing
app.use("/comments", commentRoutes);
app.use("/videos", videoRoutes);
app.use("/auth", authRoutes);
app.use("/channel", channelRoutes);

//Server listening on the port
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
