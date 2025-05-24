import React from 'react';
import { faces_url1, faces_url2 } from '../../../assets/allImg';

const Faces = () => {
  
  return (
    <>
      {/* Heading */}
      <div className="bg-backgroundColor ">
        <div className="flex flex-col items-center text-center py-10 -mb-1">
          <h1 className="sm:text-5xl text-2xl   mb-2 font-semibold text-white">
            Meet the <span className="italic font-playfair">Faces</span> behind the
          </h1>
          <h1 className="sm:text-5xl text-2xl font-semibold text-white">Romanelli Group</h1>
        </div>
      </div>

      {/* Section with Split Background */}
      <section className="relative">
  <div className="absolute inset-0 bg-white md:bg-backgroundColor h-1/3"></div> {/* 1/4 background color */}
  <div className="absolute inset-0 bg-white h-2/3 top-1/3"></div> {/* 3/4 white background */}

  <div className="container px-5 lg:px-24  py-12 mx-auto relative z-1">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
      
      {/* First Profile */}
      <div className="sm:w-1/2 mb-10 px-4 flex flex-col items-center">
      <div className="relative w-80">
  <div className="relative">
    <img
      alt="content"
      className="object-cover object-center h-auto w-full"
      src={faces_url2}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/4 to-transparent"></div>
    <div className="absolute bottom-2 left-0 w-full text-white text-left px-2 pl-4">
      <h3 className="text-2xl font-semibold">Cristina Romanelli</h3>
      <p className="text-lg">CEO & Founder</p>
    </div>
  </div>
</div>


        <p className="leading-relaxed text-base text-black mt-4 max-w-xl ">
        In 2021, I was honored to be named among the Top 500 (out of 10,000) in Central Ohio by Real Producers Magazine. That same year, I joined the elite ranks of the $10 Million Dollar Club at the Columbus Board of Realtors. As a proud Ohio University alumnus, I bring the dedication and teamwork I learned as a Bobcat to every deal we close. My mission? To help you achieve your dreams with unmatched expertise and personalized service
        </p>
      </div>

      {/* Second Profile */}
      <div className="sm:w-1/2 mb-10 px-4 flex flex-col items-center">
      <div className="relative w-80">
    <img
      alt="content"
      className="object-cover object-center h-auto w-full"
      src={faces_url1}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/4 to-transparent"></div>
    <div className="absolute bottom-2 left-0 w-full text-white text-left px-2 pl-4">
      <h3 className="text-2xl font-semibold">Antonio Romanelli</h3>
      <p className="text-lg">Agent & Brother</p>
    </div>
  </div>
        <p className="leading-relaxed text-base text-black mt-4 max-w-xl">
        Growing up with a dad who was a custom home builder in Columbus, I didn’t realize how much I loved real estate until I graduated from Ohio Wesleyan University. I majored in Finance, Economics, and Accounting, and took a job in Commercial Real Estate at Huntington Bank. I enjoyed my time there and built a strong understanding of real estate financing.
        </p>
        <p className="leading-relaxed text-base text-black max-w-xl">
        Once I realized the 9-to-5 life wasn’t for me, I teamed up with my sister Cristina, and together we’ve built a strong real estate business that we take a lot of pride in. Homes have been a part of our lives since we were kids!
          </p>
          <p className="leading-relaxed text-base text-black max-w-xl">
          As we say, Romanelli is Real Estate.
            </p>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default Faces;
