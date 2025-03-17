import React, { useEffect, useState } from "react";

const data = [
    {
      type: "image",
      src: "https://media-hosting.imagekit.io//cddf7dbc640745d6/screenshot_1742114273684.png?Expires=1836722274&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zpvM51JpXozJJOFL3RokLVuCli7AdaDNHsrJthcEzSLsl6JMrx2~dlQjihAVpGW2P1eaVLR4UbrDiEYIl3mISXP2o1u9TZyTgvTskcr369hbdpi2ba4fn4G-14SXyDqamnKPT-0lzFOsPgHDBP9TDUAwm8IE2gFAmPkPqHN1XLyyXeYKs9yohOh7YY28GqiqDRtSqXZyBuXdCFP4pDCRdIrU8K-Q52F9gl~UOoEJ~y8higHNuphU5VLMt9hJkQSxAtjTVOmp4f9Yj4Bx5ofENjiBzzixKRoSvucy0rZXiw4T3PrwJ3sZiFn1j4qD9meKPGCPLbPLfJ1GSzwF7l-zvg__",
      title: "Market Insights",
      description: "Central Ohio Real Estate Trends (2023 Report)",
      button:"Read More"
    },
    {
      type: "video",
      src: "https://media-hosting.imagekit.io//d1f5208abae0498c/-fcc1-4915-ac06-634f4cfcab8a.mp4?Expires=1836723664&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1qPWaRiJqzCLrNZp~VXY7p67zllE4bBiQOSoj77lo0vwJ1cY2Wfa69ozUwx-5nd6EvgxfheVmXdEJIjtTnEx8b-vDphZshrVG~af3X3LrPjUIdbBD2W4oFZyud7VH3CUq4r3ULMNNjUFXwglfWaGfWJUehdIdd8FdudTJkP-HKf6LfHTUZuwyQdDQAgBxTFJTo4Lf1CjRdXfq6e1Ut9BTudnXl-LYu4HH9I~IdOV89oRhEBsuK6MrV-Uj-QugSr1w9qUa4ra4cGQUiOqnXG-Wc2jtSSsOyNVTlEJkCjeP2dmrAPjFaKckq31X4vTdXTnjnO9hDbpF0ZCXhb2Zit41w__",
      title: "Video Tutorials",
      description: "How to Stage Your Home for Maximum Impact",
      button:"Watch Now"
    },
    {
      type: "image",
      src: "https://media-hosting.imagekit.io//f4ec52c700ab4e8a/image%20(2).png?Expires=1836722280&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i58Otx4XPwpQDXAXvbh64A-DNLHv9bXFlCfHGPPV8sZtEuJhX0zr7kqHb7~I-W9ByQ8WpMugPfba9kZUjWUHZFhdCNKL9eZte2qi2nKhimsILJ47XM0pgNGD3ztVg3in3qrv2IhyPLnUqI3Q8qjJTSSba1H~REjXoBsA~eP5qxp6f9DgypQxtj1Qk8~TyDKnEQ8Ue2Y0u4knaBLFsfzLOfze6okeznDhRQ~2FkDI3mXEZeHhPYGNaIxkXVyzlJHjVAiKO4m7xQsgbvv~sDu0TGVOVKvoKCnrhtQzT10kCdyeDeDATMnpizCXKf~eGWU0xCVqT5zUeys-BAG2EzQ0JA__",
      title: "Guides & Checklists",
      description: "10 Steps to Prepare Your Home for Sale",
      button:"Download PDF"
    },
    {
        type: "image",
        src: "https://media-hosting.imagekit.io//377b369fc3be45e2/image%20(1).png?Expires=1836722277&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MaK0efTGjHnDsPiu11Pcctvi0WJcWGjpGI3tWXMyJ9AfDYudwzvKQNHcbwp~YbpNO5LUqcyREsMcwGlhKF--upUT5nOVbQCOw~tMjaZT0Arg8dPV~7xMJCLemouZQuEblCutmLoo0GFeWVNhEzpBCf4rQ03I491G7cMU3GZeNAXrdFpmNRggApEKE19LRl92V6cZGyqTpVpznz817JBmHQvetFeynwOea10UkYnHnpgUPm-2u~5W7Kj3r8FUhdLqZjayp1ALdTzQdM5wLwqgm6CSFVvNSGiQ0DOen69Mi-VmAEsPvMPrebPJCdCRwDoTXI51sxsCIAz~BYNR2CzqEg__",
        title: "Seller FAQs",
        description: "Do I Need a Home Inspection Before Selling?",
        button:"Learn More"
      },
  ]


  const SellSmarter = () => {
    const [index, setIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(1); // Default to 1 item for mobile
  

  
    useEffect(() => {
      const updateVisibleImages = () => {
        if (window.innerWidth < 640) {
          setVisibleImages(1.9); // Mobile: 1 item
        } else if (window.innerWidth < 1024) {
          setVisibleImages(2.9); // Tablet: 2 items
        } else {
          setVisibleImages(3.5); // Desktop: 3 items
        }
      };
  
      // Initial call to set visible images
      updateVisibleImages();
  
      // Add event listener for window resize
      window.addEventListener("resize", updateVisibleImages);
  
      // Cleanup event listener
      return () => window.removeEventListener("resize", updateVisibleImages);
    }, []);
  
    const nextSlide = () => {
      setIndex((prevIndex) => {
        if (prevIndex < data.length - visibleImages) {
          return prevIndex + 1;
        }
        return prevIndex; // Stop at the last batch of items
      });
    };
  
    const prevSlide = () => {
      setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
      return () => clearInterval(interval);
    }, [index, visibleImages]); // Add visibleImages to dependency array
  
    return (
      <div className="bg-backgroundColor text-white py-12">
        <div className="container px-5 mx-auto text-center">
          <h1 className="sm:text-4xl text-2xl font-bold mb-4">
            Resources to Help You Sell{" "}
            <span className="italic font-playfair">Smarter</span>
          </h1>
          <p className="lg:w-2/3 mx-auto text-xl">
            Explore our expert resources to make informed decisions and maximize
            your property’s potential.
          </p>
        </div>
  
        {/* Responsive Grid */}
        <div className="relative overflow-hidden  mt-8">
          <div
            className="flex transition-transform duration-500 gap-2 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleImages)}%)`,
              width: `${(data.length / visibleImages) * 100}%`,
            }}
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                className="w-full"
                style={{
                  flex: `0 0 ${100 / visibleImages}%`,
                  maxWidth: `${100 / visibleImages}%`,
                }}
              >
                <div className="relative w-full mx-2">
                  {/* Media (Image or Video) */}
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt="gallery"
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white rounded-lg">
                    {/* Title */}
                    <div className="absolute top-2 left-2 bg-white py-1 px-2 text-black font-semibold rounded">
                      {item.title}
                    </div>
  
                    {/* Description */}
                    <p className="text-lg sm:text-xl font-semibold mb-3 text-left">
                      {item.description}
                    </p>
  
                    {/* Button Group */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-red-700 py-2 text-sm sm:text-lg font-semibold text-white rounded-md transition hover:bg-red-800">
                        {item.button}
                      </button>
                      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 flex items-center justify-center rounded-md transition hover:bg-red-800">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.333 14.665L14.666 1.332M14.666 1.332H2.666M14.666 1.332V13.332"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white text-black px-2 py-1 sm:px-3 sm:py-2 flex items-center space-x-2"
            onClick={prevSlide}
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">Prev</span>
          </button>
          <button
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white text-black px-2 py-1 sm:px-3 sm:py-2 flex items-center space-x-2"
            onClick={nextSlide}
          >
            <span className="hidden sm:inline">Next</span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 18H9M27 18L19.5 25.5M27 18L19.5 10.5"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default SellSmarter;