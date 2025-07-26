import React from 'react';
import Sidebar from '../components/Home/Sidebar';
import TopBar from '../components/home/TopBar';
import EventCarousel from '../components/home/EventCarousel';
import InfoCard from '../components/home/InfoCard';
import VideoRecommendations from '../components/home/VideoRecommendations';

const HomePage = () => {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#2B2B2B' }}>
      <Sidebar />
      
      <main className="flex-1 ml-64 h-screen overflow-y-auto">
        <TopBar />
        
        <div className="px-6 pb-6">
          {/* Event Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <EventCarousel />
            </div>
            <div>
              <InfoCard />
            </div>
          </div>
          
          {/* Video Recommendations */}
          <VideoRecommendations />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
