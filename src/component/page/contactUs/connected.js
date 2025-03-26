import React from 'react';
import kw from "../../../assets/kw.png";
import instagram from "../../../assets/Instagram.png";
import youtube from "../../../assets/YouTube.png";
import facebook from "../../../assets/Facebook.png";
import tiktok from "../../../assets/TikTok.png";

const Connected = () => {
  const socialLinks = [
    { src: youtube, href: "https://www.youtube.com/channel/UC6JTBB3S5QoOpknrvT16s7Q", alt: "YouTube" },
    { src: instagram, href: "https://www.instagram.com/theromanelligroup_realtors/?hl=en", alt: "Instagram" },
    { src: facebook, href: "https://www.facebook.com/romanellihomes", alt: "Facebook" },
  ];

  const contactDetails = [
    {
      icon: "https://media-hosting.imagekit.io//b348df30abcb4c5e/location.png?Expires=1836757631&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qMLCf6skmiOUkNOhteUz7zXDyDOqSBHk11FGvPV5XvCZ6i8G-hYG0QpXRz0oyqDHZvqKXz7d64hBkJsqGlmJYXRA4A0ZSLkySNY4MUmPedpsXw1B1eqU9p7v~fOCl7jg7rHEHgxdWY7Q4XITszcR3Tv1mNFp5TraiaIqlDhoZGt1vzmGbB-jiWK2O2vrskLxVLUTs7fGplme9efgUtJweBEr8MRFreYCwJ4MNdpkeg3KHhqqyGqRssQUXegWW2FwmSlCnWRaswCVKctArBFTkOJhJOWBD4lFhN~~Snh7aG9Xm7OdjA-PVkJX8dQZ1SV39Rwr3FUNmpRS2khZRfbTvQ__",
      title: "Visit Our Office",
      description: "Find us right in the heart of Central Ohio.",
      action: "View on Google Maps",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: "https://media-hosting.imagekit.io//c509e08898b64c82/call-chat-svgrepo-com%201.png?Expires=1836752658&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dXjY4~PhEc5yNvabbYzxTPlwuNSmpaW8AhwSeFn0t8kh2omYhS77HDA0F66dEly4TDcu29bcfxWChhY3SmyaZOsk87NjjJlLE6Hr6cAIKVi-1jh-~Wvk6DPhG38aT2NfY92YXwXPmMjl0MMp8Sl89GOK~AL9Y9BrYFnLXNOQO7jfo-Lkl-uvsaryYUzHdrYM51RhuQDdQyVIg5wiwhp7QrMFjdhGH8UiJETmyAaF6qTdbMXSoFhb~z-DgfA1fKIX5SllRxkINm~JXPNyTEaCmZKzG5INn86XvKTECs1mrAoriKLjUxNiOtSjZrXdBEpCIqIhiMOvZUvzpNJu53ziTQ__",
      title: "We’re Just a Call Away",
      description: "Reach out for any questions—big or small!",
      action: "Call Us Now",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: "https://media-hosting.imagekit.io//688f01ce0cb9425f/business-hours-svgrepo-com%201.png?Expires=1836757667&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BsFqufUutPdj5J3ZlM37ZRfxXI~HqbyOeU4~jY09tcChIGq7GHJPH89CGxUpeXwc1uGHtZ7JasgpAqU7uT2Y1cdvaupfVbQ9IRtkxWkTYx9q9c2BSLcVNdanVVrL1HJqNVppsPRuzY6sBMTJ~r2N2qWNQnIErLJcBtv3KVE38xuTOhCW0Xf3VVuEEN2i9oyOUY6-cZoVhR5AcSymNvfdMtaTWkH4WvPrV3fYrfMyAx7rO5RZO~rAWyaEx~ijQv0H-Bsao2ZRTrCfnVvHxKPCRMNgIBvXjPZJALyGsTRN6uj1MORCiROElXsr86xc93tHYmq9FV0dsHPtbfO7Y1z7aQ__",
      title: "You Can Reach Us",
      description: "Monday - Friday: 9:00 AM - 5:00 PM | Saturday: 10:00 AM - 2:00 PM",
      action: "Closed on Sundays, but feel free to drop an email!",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: "https://media-hosting.imagekit.io//b8589011f8bb4810/find-svgrepo-com%201.png?Expires=1836757687&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ci2rRqui53LLKhG9RHa6EafpPxgyeeG1MQ3ocqjOQbpYgYG4XQotcHZIrw2XuIIYMnp~t0LrpZ3QVHw-vffI0s9s7LqI2rCLLh8iDKe22lO8KHzkjmH4jMxS7qU3KQzYWjVlljTapEE~dMOu78nF5djfKWO1cB5rIto5fpkTfJCsQwugNVBkKnnsGydRtzvS9tp27JLpBHx0cXRAhQVcLVIwJao1MZ5kz2pyFp~5riKOCgEb4CprpukYnwNZIR~gKE7cNOpQ4oSU-5WWJBQwrP6SudNKEMJMXv1Uia-eMB5sQgErzoCUV6FctNObjT1YXeTT-U0XVmpQzJkmdpmVHg__",
      title: "Find Us on Social Media",
      description: "Stay updated with our latest listings and tips.",
      action: socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img
            className="w-8 h-auto hover:opacity-75 transition-opacity"
            src={link.src}
            alt={link.alt}
          />
        </a>
      )),
    },
  ];

  return (
    <div>
      <section className="text-gray-600 px-5 lg:px-24 body-font overflow-hidden bg-backgroundColor">
        <div className="flex flex-col text-center w-full mt-10 mb-10 text-white">
          <h1 className="sm:text-4xl text-2xl font-bold title-font">
            Let’s Stay <span className="italic font-playfair ">Connected</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl mt-5">
            Whether you’re ready to buy, sell, or simply have questions, we’re here to help every step of the way.
          </p>
        </div>
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {contactDetails.map((detail, index) => (
              <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-[440px] w-auto p-6 text-left border-2 bg-white flex flex-col relative overflow-hidden">
                  <span className="bg-red-800 text-white px-3 py-3 tracking-widest text-xs absolute left-5 top-5 ">
                    <img src={detail.icon} alt={detail.title} />
                  </span>
                  <p className="flex mt-auto text-gray-900 font-bold text-xl border-0 py-2 w-full focus:outline-none ">
                    {detail.title}
                  </p>
                  <p>{detail.description}</p>
                  <p className="text-lg flex gap-2 font-semibold text-gray-900 mt-3 underline">
                    {detail.actionLink ? (
                      <a href={detail.actionLink}>{detail.action}</a>
                    ) : (
                      detail.action
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connected;