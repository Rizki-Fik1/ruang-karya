import React from 'react';
import VideoCard from './VideoCard';

const VideoRecommendations = () => {
  const videos = [
    {
      id: 1,
      title: "Buat Game Horror Simple...",
      author: "Raden Speed",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Tutorial desain thumbnail...",
      author: "Sinta Kreator Muda",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Belajar membuat pizza...",
      author: "Rumah Pizzaaa",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Penerapan konsep daur u...",
      author: "Raden Speed",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Unjuk bakat siswa SDN 02...",
      author: "Raden Speed",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Everything U Are Cover Ac...",
      author: "Raden Speed",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 7,
      title: "Reaction video viral tiktok...",
      author: "Raden Speed",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 8,
      title: "Ini dia tips membuat thum...",
      author: "Raden Speed",
      views: "735 views",
      timeAgo: "1 day ago",
      duration: "10:30",
      thumbnail: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center mb-6">
        <span className="text-blue-400 text-lg">|</span>
        <span className="text-blue-400 font-semibold ml-2">Rekomendasi</span>
        <span className="text-white font-semibold ml-1">Video</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoRecommendations;