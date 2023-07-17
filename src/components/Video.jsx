import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import screenVideo from '../assets/captura-video.png';

export const Video = ({ videoId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const playerRef = useRef(null);

  console.log(playerRef)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    playerRef.current.internalPlayer.pauseVideo();
  };

  return (
    <div className="youtube-modal">
      <div className="video-thumbnail" onClick={handleOpenModal}>
        <img className="video-screen" src={screenVideo} alt="" />
      </div>
      {isModalOpen && (
        <div className="modal-background" onClick={handleCloseModal}>
          <div className="modal-content-css" onClick={(e) => e.stopPropagation()}>
            <YouTube
              videoId={videoId}
              opts={{
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  showinfo: 0,
                  loop: 1,
                  mute: 0,
                  modestbranding: 1,
                },
                fitToParent: true,
              }}
              ref={playerRef}
            />
          </div>
        </div>
      )}
    </div>
  );
};
