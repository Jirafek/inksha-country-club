import React, { useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);
  
    const handleVideoEnd = () => {
      videoRef.current.play();
    };
  
    return (
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        autoPlay
        loop
        muted
        style={{ background: 'transparent' }}
        className='absolute w-full bottom-0'
      >
        <source src="/image/volna.mp4" type="video/mp4" />
      </video>
    );
  };
  
  export default VideoPlayer;