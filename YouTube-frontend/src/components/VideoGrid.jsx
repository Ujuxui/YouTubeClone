import { Link } from "react-router-dom";    

const VideoGrid = ({ videos }) => {
    console.log("Videos received:", videos);

  return (
    <div className="px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Link to={`/videos/${video._id}`} key={video._id}>
               <div className="relative mb-2 scale-100 hover:shadow-md hover:scale-102 overflow-hidden">
              <div className="relative w-full rounded-xl hover:rounded-none overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title} 
                  className="w-full h-56 object-fit rounded-xl hover:rounded-none"
                /></div>
                <div className="flex p-2">
                  <img
                    src={video.channelLogo}
                    alt="channel-logo"
                    className="bg-amber-300 rounded-full h-12 w-12"
                  />
                  <div className="ml-4">
                    <h2 className="font-semibold text-sm">{video.title}</h2>
                    <p className="text-xs text-gray-600">
                      {video.channelName}
                    </p>
                    <p className="hidden">{video.category}</p>
                    <p className="text-xs text-gray-600">
                       {video.views} · {video.timeLapse}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
}

export default VideoGrid;
