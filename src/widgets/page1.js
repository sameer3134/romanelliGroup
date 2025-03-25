import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "../loading/loadingScreen";

import Pag2 from "../component/page/home/pag2";
import FirstPageBuy from "../component/page/buy/firstPageBuy";
import FirstPageSell from "../component/page/sell/firstPageSell";
import FirstPageContact from "../component/page/contactUs/firstPageContact";
import FirstPageProperties from "../component/page/properties/firstPageProperties";

const Page1 = ({ page }) => {
  const video_url =
    "https://media-hosting.imagekit.io//1edf924c93774ee2/-58aa-4fa6-a769-b57f59b07b9e%20(1).mp4?Expires=1836286464&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cdhQOF7T2yeqNvP1W22d4agTUsCxzrsei~1nI8~A00-RMcS07gG5pxS0XbllgYS28-iBs5tRxsnjz6TYARH1lL0JV6pcpWyS2B~Zte-NFzmV5gLVGReAJkzM7Uen~DS43AZnVhvYPGCIDmQcj0nDle~R7eT3jPSqvHE1ZVwFU14ngfKaVPH-cOZpOVuE-qdOsWWM5qbKQqXQrHZh4UqZAIvdwQXs1C21Tj3A88FcY4RgKAWHwLdrLtfn4kPj1hKMKoqdJbhT~Oyx5QKa0m8KClWhmpETaBYWrhPKIxMiovZCzmuqrSguZIJG0DwPR5GzXj4I64ZsMHwekeXvY0ywew__";
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  let interval;
  
// Unified interaction handler
const handleUserInteraction = () => {
  if (videoRef.current && isMuted) {
    videoRef.current.muted = false;
    setIsMuted(false);
    
    // Attempt playback with sound
    videoRef.current.play()
      .then(() => {
        console.log('Playing with sound');
        removeAllListeners();
      })
      .catch(err => {
        console.warn('Failed to play with sound:', err);
        // Fallback to muted if unmuted play fails
        videoRef.current.muted = true;
        setIsMuted(true);
      });
  }
};

const removeAllListeners = () => {
  const events = ['click', 'scroll', 'mousemove', 'keydown', 'touchstart'];
  events.forEach(event => {
    document.removeEventListener(event, handleUserInteraction);
  });
};

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  // Start with muted autoplay
  video.muted = true;
  
  const playPromise = video.play();
  
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log('Muted autoplay started');
      })
      .catch(err => {
        console.warn('Muted autoplay blocked:', err);
      });
  }

  // Add interaction listeners
  const events = ['click', 'scroll', 'keydown', 'touchstart'];
  events.forEach(event => {
    document.addEventListener(event, handleUserInteraction, { once: true });
  });

  return () => {
    removeAllListeners();
  };
}, []);
    

  useEffect(() => {
    interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) return oldProgress; // Stop at 90%
        return oldProgress + 5;
      });
    }, 300);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  


  

  // 🔹 When the video starts loading (packets should be in Network tab)
  const handleVideoStart = () => {
    console.log("Video is starting to load...");
    setProgress(50); // Start progress at 50% when video request starts
  };

  const handleVideoProgress = (e) => {
    if (e.target.buffered.length > 0) {
      const buffered = Math.round(e.target.buffered.end(0));
      const duration = e.target.duration;
      const realProgress = 50 + (buffered / duration) * 45; // Continue from 50% to 95%
      setProgress(Math.min(realProgress, 95)); // Increment progress from 50%
    }
  };

  const handleVideoReady = () => {
    setProgress(100);
    setTimeout(() => setLoading(false), 500); // Hide loading screen after 500ms
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && <LoadingScreen progress={progress} />}
      {/* Always render video in background */}
      <div  style={{ visibility: loading ? "hidden" : "visible" }}>
        <section id="mainVideo" className="relative w-full min-h-screen flex items-center justify-center text-white body-font overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto" // Force early loading
              className="w-full h-full object-cover"
              onLoadStart={handleVideoStart} // Start loading
              onProgress={handleVideoProgress} // Track buffering progress
              onCanPlayThrough={handleVideoReady} // Once video is ready to play
            >
              <source src={video_url} type="video/mp4" />
            </video>
          </div>
          {/* Content */}
          {page == "Home" &&
            <Pag2 />
          }
          {page == "Buy" &&
          <FirstPageBuy/>}
            {page == "Sell" &&
          <FirstPageSell/>}
           {page == "Contact Us" &&
          <FirstPageContact/>}
          {page == "Properties" &&
          <FirstPageProperties/>}
        </section>
      </div>
    </>
  );
};

export default Page1;
