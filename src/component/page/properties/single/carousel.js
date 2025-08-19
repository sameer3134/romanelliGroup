import React, { useEffect, useState } from 'react'

const Carousel = ({image}) => {
    const [index, setIndex] = useState(0);
        const [visibleImages, setVisibleImages] = useState(3);
    
        useEffect(() => {
            const updateVisibleImages = () => {
              if (window.innerWidth < 640) {
                setVisibleImages(2); // Mobile: 1 image
              } else if (window.innerWidth < 1024) {
                setVisibleImages(3); // Tablet: 2 images
              } else {
                setVisibleImages(4); // Desktop: 3 images
              }
            };
        
            updateVisibleImages();
            window.addEventListener("resize", updateVisibleImages);
            return () => window.removeEventListener("resize", updateVisibleImages);
          }, []); // Show 4 images at a time (2 full + 2 halves)
      
        const nextSlide = () => {
          setIndex((prevIndex) => (prevIndex + 1) % 4);
        };
      
        const prevSlide = () => {
          setIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
        };
      
        useEffect(() => {
          const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 sec
          return () => clearInterval(interval);
        }, []);
    console.log("carousel",image)
  return (
    <div>
               <div className="relative w-full max-w-full mx-auto mb-10">
          {/* Image Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleImages)}%)`,
                width: `${4 * (100 / visibleImages)}%`,
              }}
            >
              {image.concat(image)?.map((img, i) => (
              <div
                key={i}
                className="relative group"
                style={{
                  flex: `0 0 ${100 / visibleImages}%`,
                  padding: "0 4px",
                }}
              >
                <img
                  src={img.MediaURL}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>
            ))}
            </div>
          </div>
  
          {/* Navigation Buttons */}
          {/* <button
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
  onClick={prevSlide}
>
  
<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  <span>Prev</span>
</button>


        <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
        onClick={nextSlide}
      >
        <span>Next</span>
        
<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button> */}
      
        </div>
    </div>
  )
}

export default Carousel