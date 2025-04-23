import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  thumbnailUrl: { type: String },
  videoUrl: { type: String, required: true },
  channelLogo: { type: String },
  channelName: { type: String, required: true },
  category: { type: String },
  subscribers: { type: String },
  views: { type: String },
  uploadDate: { type: String, required: true },
  description: { type: String, required: true },
  timeLapse: { type: String },
  thumbnail: { type: String },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
