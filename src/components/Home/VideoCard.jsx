import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-gray-400 text-sm mb-1">By {video.author}</p>
        <div className="text-gray-500 text-xs">
          {video.views} views • {video.timeAgo}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;