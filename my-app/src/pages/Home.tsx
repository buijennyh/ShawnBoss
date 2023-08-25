import React from 'react'
import YouTubeVideo from '../components/YouTubeVideo';

const Home:React.FC <{}> = () => {
  return (
        <div>
          {/* Embedding YouTube video with video ID */}
          <YouTubeVideo videoId="6mZUXybXi8A" />
        </div>
      );
};

export default Home; 
