import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

const relatedVideo = [
  {
    videoId: "video001",
    title: "a playlist for night studies (dark academia)",
    channelName: "nobody",
    views: "15200 views",
    timeLapse: "20 days ago",
    thumbnail: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    videoId: "video002",
    title: "How to Remember Everything You Read",
    channelName: "Justin Sung",
    views: "96K views",
    timeLapse: "3 months ago",
    thumbnail: "https://picsum.photos/200/300?grayscale",
  },
  {
    videoId: "video001",
    title: "a playlist for night studies (dark academia)",
    channelName: "nobody",
    views: "15200 views",
    timeLapse: "20 days ago",
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    videoId: "video002",
    title: "How to Remember Everything You Read",
    channelName: "Justin Sung",
    views: "96K views",
    timeLapse: "3 months ago",
    thumbnail: "https://picsum.photos/200/300/?blur",
  },
  {
    videoId: "video003",
    title: "Deep Focus Music for Studying",
    channelName: "Chill Vibes",
    views: "88K views",
    timeLapse: "2 weeks ago",
    thumbnail: "https://picsum.photos/200/300?grayscale",
  },
  {
    videoId: "video004",
    title: "Build a Full Stack App in 1 Hour",
    channelName: "CodeWithMe",
    views: "120K views",
    timeLapse: "1 month ago",
    thumbnail: "https://picsum.photos/200/300/?blur2",
  },
  {
    videoId: "video001",
    title: "a playlist for night studies (dark academia)",
    channelName: "nobody",
    views: "15200 views",
    timeLapse: "20 days ago",
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    videoId: "video002",
    title: "How to Remember Everything You Read",
    channelName: "Justin Sung",
    views: "96K views",
    timeLapse: "3 months ago",
    thumbnail: "https://picsum.photos/200/300/?blur",
  },
  {
    videoId: "video003",
    title: "Deep Focus Music for Studying",
    channelName: "Chill Vibes",
    views: "88K views",
    timeLapse: "2 weeks ago",
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    videoId: "video004",
    title: "Build a Full Stack App in 1 Hour",
    channelName: "CodeWithMe",
    views: "120K views",
    timeLapse: "1 month ago",
    thumbnail: "https://picsum.photos/seed/picsum/200/300",
  },
];

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [comments, setComments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "Guest";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`http://localhost:8000/videos/${id}`)
      .then((res) => res.json())
      .then((data) => setVideo(data))
      .catch((err) => console.error("Failed to fetch video:", err));
  }, [id]);

  useEffect(() => {
    if (!video?._id) return;

    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:8000/comments/${video._id}`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error loading comments:", error.message);
      }
    };

    fetchComments();
  }, [video?._id]);

  const handleAddOrUpdateComment = async () => {
    if (!commentText.trim()) return;

    const method = editingCommentId ? "PUT" : "POST";
    const url = editingCommentId
      ? `http://localhost:8000/comments/${editingCommentId}`
      : `http://localhost:8000/comments/${video._id}`;

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`
      },
      body: JSON.stringify({ username, text: commentText }),
    });

    if (res.ok) {
      const newComment = await res.json();

      if (editingCommentId) {
      setComments((prev) =>
        prev.map((c) => (c._id === editingCommentId ? newComment : c))
      );
    } else {

      setComments((prev) => [newComment, ...prev]);
    }

    setCommentText("");
    setEditingCommentId(null);
    } else {
      const err = await res.json();
      console.error("Failed to save comment:", err.message);
    }
  };

  const handleDeleteComment = async (commentId) => {
    const res = await fetch(`http://localhost:8000/comments/${commentId}`, {
      method: "DELETE",
      headers: { Authorization: `JWT ${token}` },
    });

    if (res.ok) {
      setComments((prev) => prev.filter((comment) => comment._id !== commentId));
    } else {
      const err = await res.json();
      console.error("Failed to delete comment:", err.message);
    }
  };

  const handleEdit = (comment) => {
    setEditingCommentId(comment._id);
    setCommentText(comment.text);
  };

  const handleLike = () => {
    setVideo((prev) => ({ ...prev, likes: (prev.likes || 0) + 1 }));
  };

  const handleDislike = () => {
    setVideo((prev) => ({ ...prev, dislikes: (prev.dislikes || 0) + 1 }));
  };

  if (!video) return <div className="text-center mt-20">Loading video...</div>;

  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row justify-around px-4">
        <div className="w-full lg:w-3/4 max-w-5xl mt-20 lg:ml-12">
          <div className="aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-2xl"
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-2xl font-semibold">{video.title}</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex mt-4">
              <div className="w-10 h-10 rounded-full bg-black font-bold text-white text-center text-3xl mr-2">
                {video.channelLogo}
              </div>
              <div>
                <h1 className="font-medium">{video.channelName}</h1>
                <p className="text-xs text-gray-600">{video.subscribers}</p>
              </div>
              <button className="bg-black text-white py-2 px-3 font-medium rounded-3xl ml-6">
                Subscribe
              </button>
            </div>

            <div className="flex gap-4">
              <button onClick={handleLike} className="text-sm bg-gray-200 px-4 py-1 rounded-full hover:bg-gray-300">
                <ThumbUpAltOutlinedIcon /> {video.likes || 0}
              </button>
              <button onClick={handleDislike} className="text-sm bg-gray-200 px-4 py-1 rounded-full hover:bg-gray-300">
                <ThumbDownAltOutlinedIcon /> {video.dislikes || 0}
              </button>
              <button className="text-sm bg-gray-200 px-4 rounded-full hover:bg-gray-300">
                <ShareOutlinedIcon className="mr-2" /> Share
              </button>
              <button className="text-sm bg-gray-200 px-4 py-1 rounded-full hover:bg-gray-300">
                <DownloadOutlinedIcon className="mr-2" /> Download
              </button>
            </div>
          </div>

          <hr className="mt-8 mb-4" />

          <div>
            <p className="text-gray-600">
              {video.views} · Uploaded on {video.uploadDate}
            </p>
            <p className="mt-2 text-sm text-gray-700">{video.description}</p>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Comments</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg"
                placeholder="Add a comment"
              />
              <button
                onClick={handleAddOrUpdateComment}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                {editingCommentId ? "Update" : "Post"}
              </button>
            </div>

            <ul className="mt-4 space-y-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <li key={comment._id} className="bg-gray-100 p-3 rounded">
                    <div className="flex justify-between">
                    <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black font-bold text-white text-center text-3xl mr-2"></div>

                        <strong>{comment.username || "Guest"}</strong>{" "}
                      
                        <div>
                        <p className="mt-1 ml-4 text-gray-800">{comment.text}</p>
                        <p className="text-xs font-thin ml-4">
                          {new Date(comment.createdAt).toLocaleString()}
                        </p></div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button onClick={() => handleEdit(comment)} className="text-blue-600 text-xs">
                          Edit
                        </button>
                        <button onClick={() => handleDeleteComment(comment._id)} className="text-red-600 text-xs">
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </ul>
          </div>
        </div>

        {/* Related Videos */}
        <div className="w-[25%] max-h-screen mt-24 hidden xl:block">
          {relatedVideo.map((video, index) => (
            <div key={index} className="flex mb-6 mr-8">
              <img
                src={video.thumbnail}
                alt={`Thumbnail of ${video.title}`}
                className="w-40 h-24 rounded-xl mr-4 object-cover"
              />
              <div className="text-sm w-48 h-24">
                <h1 className="font-semibold">{video.title}</h1>
                <h2 className="text-gray-600 mt-3">{video.channelName}</h2>
                <p className="text-gray-500 text-xs">
                  {video.views} • {video.timeLapse}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
