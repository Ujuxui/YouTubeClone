import ChannelVideo from "../models/Channel.js";
import mongoose from "mongoose";

// GET - all videos for the logged-in user's channel
export const getChannelVideosByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const videos = await ChannelVideo.find({ userId });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your channel videos", error });
  }
};

// POST - upload a new video
export const uploadChannelVideo = async (req, res) => {
  const { title, description, videoUrl, timeLapse } = req.body;
  const { userId } = req.params;
  try {
    const newVideo = new ChannelVideo({
      title,
      description,
      videoUrl,
      timeLapse,
      userId,
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(400).json({ message: "Failed to upload video", error });
  }
};

// PUT - update a video by ID
export const updateChannelVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const updated = await ChannelVideo.findByIdAndUpdate(videoId, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update video", error });
  }
};

// DELETE - delete a video by ID
export const deleteChannelVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    await ChannelVideo.findByIdAndDelete(videoId);
    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete video", error });
  }
};
