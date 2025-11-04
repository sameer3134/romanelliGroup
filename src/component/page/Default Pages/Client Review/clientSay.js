import { useEffect, useState } from "react";
import TestimonialCard from "./testionialCard";
import axios from "axios";

const ClientSay = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://talented-virtue-526c01e261.strapiapp.com/api/reviewdatas?populate=*');
        const apiData = response.data.data;
        
        // Map API data to match expected format
        const mappedReviews = apiData.map(review => ({
          id: review.id,
          name: review.Name,
          rating: review.Rating,
          comment: review.Comment,
          image: review.Image_url,
          url: review.GoogleReviewsUrl
        }));
        
        setReviews(mappedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    
    fetchReviews();
  }, []);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) setVisibleImages(1.2);
      else if (window.innerWidth < 1024) setVisibleImages(2);
      else setVisibleImages(4);
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [reviews, visibleImages]);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < reviews.length - visibleImages ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <div>
      <div className="container px-5 pt-12 mx-auto text-gray-900">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-900">
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
                <p className="text-center w-full text-gray-500">Loading reviews...</p>
              )}
            </div>
          </div>

          {/* Arrows */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
            onClick={prevSlide}
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9H20M2 9L9.5 1.5M2 9L9.5 16.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 flex items-center space-x-2"
            onClick={nextSlide}
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 9L2 9M20 9L12.5 16.5M20 9L12.5 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientSay;
