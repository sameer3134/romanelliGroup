import React, { useEffect, useState } from 'react'

const Carousel = ({ image }) => {
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 sec
    return () => clearInterval(interval);
  }, []);
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
      </div>
    </div>
  )
}

export default Carousel