import React from 'react';
import kw from "../../../assets/kw.png";
import instagram from "../../../assets/Instagram.png";
import youtube from "../../../assets/YouTube.png";
import facebook from "../../../assets/Facebook.png";
import tiktok from "../../../assets/TikTok.png";
import { connect_url1, connect_url2, connect_url3, connect_url4 } from '../../../assets/allImg';

const Connected = () => {
  const socialLinks = [
    { src: youtube, href: "https://www.youtube.com/channel/UC6JTBB3S5QoOpknrvT16s7Q", alt: "YouTube" },
    { src: instagram, href: "https://www.instagram.com/theromanelligroup_realtors/?hl=en", alt: "Instagram" },
    { src: facebook, href: "https://www.facebook.com/romanellihomes", alt: "Facebook" },
  ];

  const contactDetails = [
    {
      icon: connect_url1,
      title: "Visit Our Office",
      description: "Find us right in the heart of Central Ohio.",
      action: "View on Google Maps",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: connect_url2,
      title: "We’re Just a Call Away",
      description: "Reach out for any questions—big or small!",
      action: "Call Us Now",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: connect_url3,
      title: "You Can Reach Us",
      description: "Monday - Friday: 9:00 AM - 5:00 PM | Saturday: 10:00 AM - 2:00 PM",
      action: "Closed on Sundays, but feel free to drop an email!",
      actionLink: "#", // Add the actual link here
    },
    {
      icon: connect_url4,
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