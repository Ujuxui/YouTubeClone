import React, { useEffect, useState } from "react";
import CreateChannel from "./CreateChannel";

const Channel = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    videoUrl: "",
  });
  const [editingVideoId, setEditingVideoId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "" });
  const [user, setUser] = useState(null);
  const [showDialog, setShowDialog] = useState(true);
  const [channelCreated, setChannelCreated] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchChannelVideos = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))?._id;
      try {
        const res = await fetch(`http://localhost:8000/channel/${userId}`);

        if (!res.ok) throw new Error("Failed to fetch channel videos");
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChannelVideos();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleCreate = () => {
    setChannelCreated(true);
    setShowDialog(false);
  };

  const handleUpload = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))?._id;
    try {
      const res = await fetch(`http://localhost:8000/channel/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify(videoData),
      });

      const result = await res.json();
      console.log("Uploaded:", result);
      setVideos((prev) => [result, ...prev]);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleDelete = async (videoId) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      const res = await fetch(`http://localhost:8000/channel/${videoId}`, {
        method: "DELETE",
        headers: { Authorization: `JWT ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete video");
      setVideos((prev) => prev.filter((v) => v._id !== videoId));
    } catch (err) {
      console.error(err);
      alert("Error deleting video.");
    }
  };

  const handleEdit = (video) => {
    setEditingVideoId(video._id);
    setEditForm({ title: video.title, description: video.description });
  };

  const handleEditSubmit = async (videoId) => {
    try {
      const res = await fetch(`http://localhost:8000/channel/${videoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      if (!res.ok) throw new Error("Failed to update video");
      const updated = await res.json();

      setVideos((prev) => prev.map((v) => (v._id === videoId ? updated : v)));
      setEditingVideoId(null);
    } catch (err) {
      console.error(err);
      alert("Error updating video.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading channel...</p>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 bg-white p-6 rounded-lg shadow-lg">
          <img
            className="w-28 h-28 rounded-full border-4 border-white"
            src="https://ik.imagekit.io/jkay012024/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg?updatedAt=1744988463503"
            alt="channel-profile-image"
          />
          <div>
            {showDialog && (
              <CreateChannel user={user} onCreate={handleCreate} />
            )}
            {!showDialog && channelCreated && (
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Channel</h1>
                <p className="text-lg text-gray-800 font-medium">
                  {user.username}
                </p>
                <p className="text-gray-500">@{user.email.split("@")[0]}</p>
              </div>
            )}
            <p className="text-xs text-gray-400 mt-1">
              {videos.length} videos uploaded
            </p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4 sm:gap-8 ml-0 sm:ml-28">
            <button className="bg-gray-300 font-medium px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white ml-28">
              Customize channel
            </button>
            <button
              className="bg-gray-300 font-medium px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white"
              onClick={() => setShowUploadForm((prev) => !prev)}
            >
              {showUploadForm ? "Close Upload" : "Upload video"}
            </button>
          </div>
        </div>
        {/* Video Section */}
        <div className="mt-8 ml-8">
          <h2 className="text-2xl font-semibold mb-4">My Videos</h2>
          {videos.length === 0 ? (
            <p className="text-gray-500">No videos uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video._id} className="p-4">
                  <video
                    controls
                    className="w-full h-48 object-cover rounded-md mb-2"
                    src={video.videoUrl}
                  ></video>
                  {editingVideoId === video._id ? (
                    <>
                      <input
                        type="text"
                        className="border p-1 mb-1 w-full"
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm({ ...editForm, title: e.target.value })
                        }
                      />
                      <textarea
                        className="border p-1 mb-2 w-full"
                        value={editForm.description}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            description: e.target.value,
                          })
                        }
                      />
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleEditSubmit(video._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-400 text-white px-2 py-1 rounded"
                        onClick={() => setEditingVideoId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold">{video.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {video.description}
                      </p>
                      <div className="flex gap-2 justify-end">
                        <button
                          className="bg-gray-300 hover:bg-gray-700 hover:text-white px-4 py-1.5 rounded-full"
                          onClick={() => handleEdit(video)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-gray-300 hover:bg-gray-700 hover:text-white px-4 py-1.5 rounded-full"
                          onClick={() => handleDelete(video._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Upload New Video */}
          {showUploadForm && (
            <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Upload New Video</h3>
              <input
                type="text"
                className="w-full mb-2 p-2 border rounded"
                placeholder="Title"
                value={videoData.title}
                onChange={(e) =>
                  setVideoData({ ...videoData, title: e.target.value })
                }
              />
              <textarea
                className="w-full mb-2 p-2 border rounded"
                placeholder="Description"
                value={videoData.description}
                onChange={(e) =>
                  setVideoData({ ...videoData, description: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full mb-2 p-2 border rounded"
                placeholder="Video URL"
                value={videoData.videoUrl}
                onChange={(e) =>
                  setVideoData({ ...videoData, videoUrl: e.target.value })
                }
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;
