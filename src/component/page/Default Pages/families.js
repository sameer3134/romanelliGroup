import React, { useEffect, useState } from 'react'
import { families_url1, families_url2, families_url3, families_url4 } from '../../../assets/allImg';


const images = [
  {
    url: families_url1,
    title: "Antonio and Cristina made our home-buying journey seamless! Their expertise and dedication helped us find the perfect home for our family.",
    name: "The Johnson Family",
  },
  {
    url: families_url2,
    title: "Selling our home felt overwhelming, but The Romanelli Group guided us every step of the way. We couldn’t have asked for better realtors!",
    name: "The Martinez Family",
  },
  {
    url: families_url3,
    title: "From our first meeting to closing day, Antonio and Cristina were incredible. They truly care about their clients and go above and beyond!",
    name: "The Patel Family",
  },
  {
    url: families_url4,
    title: "Finding our forever home was a dream come true, thanks to The Romanelli Group. Highly recommend their team!",
    name: "The Thompson Family",
  },
];

const Families = () => {
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 sec
    return () => clearInterval(interval);
  }, []);
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
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };



  return (
    <>
      <div className="container px-7 mx-auto text-gray-900 font-dmsans">
        <div className="flex flex-col text-center w-full mb-20 pt-10">
          <h1 className="sm:text-5xl text-2xl   font-bold title-font mb-4 text-gray-900">
            Families We’ve <span className="italic font-playfair ">Served</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            When you work with us, you are a part of a bigger picture that values local communities, fostering meaningful relationships with everyone involved.
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-full mx-auto mb-10">
        {/* Image Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleImages)}%)`,
              width: `${images.length * (100 / visibleImages)}%`,
            }}
          >
            {images.concat(images).map((img, i) => (
              <div
                key={i}
                className="relative group"
                style={{
                  flex: `0 0 ${100 / visibleImages}%`,
                  padding: "0 4px",
                }}
              >
                <img
                  src={img.url}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ aspectRatio: "1 / 1" }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0  bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Title at bottom-left */}

                  <p className="text-white text-md text-left font-semibold italic self-start mb-2">"{img.title}"</p>

                  {/* Name at bottom-right */}
                  <p className="text-white text-sm font-medium self-end pr-4">- {img.name}</p>
                </div>


              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
          onClick={prevSlide}
        >

          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span>Prev</span>
        </button>


        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
          onClick={nextSlide}
        >
          <span>Next</span>

          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>

      </div>
      <div className="flex justify-center mb-16">
        <button className="inline-flex text-white bg-backgroundColor border-0 py-2 md:py-4 px-6 focus:outline-none   text-lg">Join Our Happy Families!</button>
      </div>
    </>
  );
};

export default Families;
