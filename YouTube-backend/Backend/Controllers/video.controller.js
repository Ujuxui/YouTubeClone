import Video from '../models/Video.js';
// GET - all videos 
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET - videos by the user
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// POST - add a video
export const uploadVideo = async (req, res) => {
  try {
    const {
      title,
      channelLogo,
      channelName,
      category,
      subscribers,
      views,
      uploadDate,
      description,
      videoUrl,
      timeLapse,
      thumbnailUrl
    } = req.body;

    const newVideo = new Video({
      title,
      channelLogo,
      channelName,
      category,
      subscribers,
      views,
      uploadDate,
      description,
      videoUrl, 
      timeLapse,
      thumbnailUrl, 
      uploader: req.userId
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT - update a video (detail) 
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// DELETE - delete a video
export const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
