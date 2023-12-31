import React from 'react';
import styles from './YouTubeVideo.module.css';

interface VideoProps {
  videoId: string;
}
 
const YouTubeVideo: React.FC<VideoProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles["video-container"]}>
      <iframe
        title={`YouTube Video ${videoId}`}
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;