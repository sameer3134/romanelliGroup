import React, { useEffect, useState } from 'react'


const images = [
  {
    url: "https://media-hosting.imagekit.io//21b477256c034cc5/image%20(1).png?Expires=1834844633&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VLcvYAsr3RjVFh9iNFYUfkWUtlSGpfjI1K4Z9tl7YMaRF0kU-DM~ukwIn64zbe6h27eSGmR2ma0lHCd6aU01uyXDGLZQLJriwOucH2uQBkLUIyPY3-KiLonhuJc6lwfvGQEjDXlrLDCLlnU946FjdC7sjb-f09n6ePC-ThkPvIUOVnype~GBVnYG0H6o6j8EFgCaU~hxUf63YXRFr~70F9nws2Xz21c6W~bAj4AU9H91fCaRqc~HdU81-L4AvKcgDQxG8QtZKu2o7dYF1JqiJXCcacvYWzmuT3ZTYtCY~~WnfuF42UBFr9L7wjPo4A7lRWxecSZ0M6CJlRo7ammf1w__",
    title: "Antonio and Cristina made our home-buying journey seamless! Their expertise and dedication helped us find the perfect home for our family.",
    name: "The Johnson Family",
  },
  {
    url:   "https://media-hosting.imagekit.io//c5a623ff783f4c4a/image%20(2).png?Expires=1834845250&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GnSHMf3JUr4fN7Ipof9wo5Okj4lZIfwHR5yP3dM1Ftr4GtW4beLcdYKhgwOcjef-ztuC4nNnUlFr9qd5JvZDiNIHW3PGwJYeIPTFHCfyK43wrc8ylwN5Q1uqCNExSS6dFIfV-SMQgohyWKzyfamWHQ3iMlOM5q4Tq1B6dnqPN1prVjo-4jVgftC2aSGkC2mCcFQfJDYOLU-HMogH3lwpO70I9iHiWBEfGjUyCZz5qljLWIAHkBVmn8rqDaNu8lTgFnA-awRLe6AbVtmuNpy20slADMCFqwWBRTY87y1ms1-iPeJtBGZGH61MCfK3eoIhHaX~igXsNIFn8VQqJfWy9w__",
    title: "Selling our home felt overwhelming, but The Romanelli Group guided us every step of the way. We couldn’t have asked for better realtors!",
    name: "The Martinez Family",
  },
  {
    url: "https://media-hosting.imagekit.io//7be58930fe5b4bf2/image%20(3).png?Expires=1834914021&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BxR~E04IYPUzzpUQ1RICcaAe2YOQWNS~vgafpaTF~i3kSc81qni1ENkQOAKaesP0AM4jWNYpHgiA3t41h4GoBV0tSZnzVMDz1wwctDG0olnLG5lQUqc41LD4-blug8VMFi7Brk8V4greqwF6SGmps03X5WENFr1YTEKfwPMIgM~1NjhUjNVMyv50kH21YX2dUucc5dzKKvbkCFiVppp-gOk9xwLQZtA1yuj-Hect9KhytEumQq6q0to72-jCQCI6vJRl~LkkEMjXrO~HzmV8sLvQTDRM-RtaYrJY-1QpHt0u4hUjZ3uEGIn1mChuKGFjX~R9z1R7gjMsAXHC0y6HUQ__",
    title: "From our first meeting to closing day, Antonio and Cristina were incredible. They truly care about their clients and go above and beyond!",
    name: "The Patel Family",
  },
  {
    url: "https://media-hosting.imagekit.io//8d78116cd7894265/image%20(3).png?Expires=1836735975&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pB5zQAp4uoxDtAozpT0g7wGqYUBLlqjNHRULcMFoexmrXPssOYBSYKUQS24N6UQNqRdP~04TB1TKIQpOaP6Q4H6nKwNLpf4BX6EY0HjoJjsloubUyVrW6GO9pwpzzI-vtEiPu1Lv3UwuWbb5ZSqoWMivKvTZsUTu2irbPikhEwQi4P4QvzZYDPseqS4EcDIE9M7nmzR2rLlODDXqmAt35vAf-NGgfSeM52euaAVicTBEZhaFdsPL61aAmoK4QJBkLRV3j1AiNmXVaf0OUdXz6DggnbVsw-yCmG3H8FIlZ-xVjpO0-rXcG8pnFgoruKvAXJ9oqZC94RhE2Jt0Gx9hFg__",
    title: "Finding our forever home was a dream come true, thanks to The Romanelli Group. Highly recommend their team!",
    name: "The Thompson Family",
  },
    ];
  
  const Families = () => {
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
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 sec
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
        <div className="container px-5 py-12 mx-auto text-gray-900">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900">
              Families We’ve <span className="italic font-playfair">Served</span>
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
  <svg width="16" height="14" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <span>Prev</span>
</button>


        <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
        onClick={nextSlide}
      >
        <span>Next</span>
        <svg width="16" height="14" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 18H9M27 18L19.5 25.5M27 18L19.5 10.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
        </div>
        <div class="flex justify-center mb-16">
        <button class="inline-flex text-white bg-backgroundColor border-0 py-2 px-6 focus:outline-none  rounded-2xl text-lg">Join Our Happy Families!</button>
        </div>
      </>
    );
  };
  
  export default Families;
