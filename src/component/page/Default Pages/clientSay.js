import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {

  const maxLength = 300; // Character limit for truncated text

  const truncatedText =
    testimonial.comment.length > maxLength
      ? testimonial.comment.substring(0, maxLength) + "..."
      : testimonial.comment;
      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const imageUrl = proxyUrl + encodeURIComponent(testimonial.image);
  return (
    <article className="bg-gray-200 p-6 text-black rounded-lg">
      <div className="pb-2">
        <div className="flex justify-between items-center">
          <StarRating rating={testimonial.rating} />
        </div>
        <div className="border border-gray-300 mt-2"></div>
      </div>
      <p
  className="leading-relaxed text-base text-left h-[250px] overflow-hidden text-ellipsis"
>
  {truncatedText}
  {testimonial.comment.length > maxLength && (
    <button
      onClick={() => window.open(testimonial.url, "_blank")}
      className="text-blue-600 text-sm ml-2"
    >
      Read More
    </button>
  )}
</p>

      <div className="border border-gray-300 mt-2"></div>
      <div className="h-full flex items-start border-gray-200 border p-2 mt-2 rounded-lg">
        <img
          alt={testimonial.name}
          className="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
          src={imageUrl}
           loading="lazy"
        />
        <div className="flex-grow items-start text-xs">
          <h2 className="text-gray-900 title-font font-medium text-left">
            {testimonial.name}
          </h2>
          <p className="text-gray-900 text-left">{testimonial.role || "Customer"}</p>
        </div>
      </div>
    </article>
  );
};


// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div class="flex flex-wrap w-full">
    <div class="w-1/2  lg:mb-0 flex">
    {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          className="w-4 h-4 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )}
    </div>
    <span className="ml-2 text-xs text-black">({rating} Star Rating)</span> </div>
  );
};

const ClientSay = () => {
  const [reviews, setReviews] = useState([]);

  const fetchGoogleReviews = async () => {
    try {
      const response = await axios.get(
        `https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=ChIJRy_MPSX1OIgRCxDRvAZS524&with_text_only=1&min_rating=5&page_length=100&order=date`
      );


      // Map API response to match testimonial structure
      const formattedReviews = response.data.result.data.map((review) => ({
        id: review.id,
        name: review.reviewer_name || "Anonymous",
        role: review.title || "Customer", // If title is null, use 'Customer'
        rating: review.rating,
        comment: review.text || "No comment provided",
        image: review.reviewer_picture_url,
        url: review.url
      }));

      setReviews(formattedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchGoogleReviews();
  }, []);
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1.2); // Mobile: 1 image
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2); // Tablet: 2 images
      } else {
        setVisibleImages(4); // Desktop: 3 images
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []); // Show 4 images at a time (2 full + 2 halves)

  const nextSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex < reviews.length - visibleImages) {
        return prevIndex + 1;
      }
      return prevIndex; // Stop at the last batch of items
    });
  };
  
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Auto-slide every 4 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container px-5 pt-12 mx-auto text-gray-900">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl   font-bold title-font mb-4 text-gray-900">
            What Our <span className="italic font-playfair">Clients Say</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Hear from our satisfied clients and explore their experiences with us.
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font mb-0 md:mb-12">
        <div className="container relative px-5 mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(index / reviews.length) * 100}%)`,
                width: `${reviews.length * (100 / visibleImages)}%`,
              }}
            >
              {reviews.length > 0 ? (
                reviews.map((testimonial) => (
                  <div key={testimonial.id} className="xl:w-1/4 md:w-1/2 p-1">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))

              ) : (
                <p className="text-center w-full text-gray-500">
                  Loading reviews...
                </p>
              )}
            </div></div>

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
            onClick={prevSlide}
          >
          

          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            <span></span>
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
            onClick={nextSlide}
          >
            <span></span>
           
<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button> </div>
      </section>
    </div>
  );
};

export default ClientSay;
