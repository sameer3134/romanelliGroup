import React, { useRef, useState } from 'react'

const VideoPopUp = ({ video_pop_url, close }) => {

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <div
        id="login-popup"
        tabIndex="-1"
        className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="relative w-52 h-80 border-4 border-black  rounded-lg bg-white flex flex-col items-center justify-between">

          <button onClick={close} className="absolute -top-2 -right-2 bg-white text-gray-900 rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs hover:bg-gray-900 hover:text-white z-10">
            ✕
          </button>
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              playsInline
              ref={videoRef}
              muted={isMuted}
              preload="auto"
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={video_pop_url} type="video/mp4" />
            </video>
            <button
              onClick={toggleMute}
              className="absolute top-2 right-2  text-gray-600 rounded-full p-1 w-5 h-5 flex items-center justify-center hover:bg-gray-200"
            >
              {isMuted ? (
                // Muted Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M3 9v6a1 1 0 001 1h4l5 5V3L8 8H4a1 1 0 00-1 1z" />
                </svg>
              ) : (
                // Unmuted Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 3.75L6 9H3v6h3l5.25 5.25V3.75zM17.25 8.25A6 6 0 0121 12a6 6 0 01-3.75 3.75M15 5.25a9 9 0 010 13.5" />
                </svg>
              )}
            </button>
          </div>
          <button type="button" className="absolute right-2 bottom-2 w-[93%] transform  bg-red-800 text-[12px]  text-white px-2 py-2 rounded-lg shadow-lg">
            Book Your Free Consultation
          </button>
        </div>
      </div>

    </>
  )
}

export default VideoPopUp