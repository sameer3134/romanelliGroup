import React from 'react'
import kw from "../../../assets/kw.png"
import instagram from "../../../assets/Instagram.png"
import youtube from "../../../assets/YouTube.png"
import facebook from "../../../assets/Facebook.png"
import tiktok from "../../../assets/TikTok.png"
import { useLocation } from 'react-router-dom'
import { logoUrl } from '../../../assets/allImg'

const Footer = () => {
       const location =useLocation()
    console.log(location.pathname)
    const socialLinks = [
        { src: youtube, href: "https://www.youtube.com/channel/UC6JTBB3S5QoOpknrvT16s7Q", alt: "YouTube" },
        { src: kw, href: "https://theromanelligroup.kw.com/", alt: "KW" },
        { src: instagram, href: "https://www.instagram.com/theromanelligroup_realtors/?hl=en", alt: "Instagram" },
        { src: facebook, href: "https://www.facebook.com/romanellihomes", alt: "Facebook" },
        { src: tiktok, href: "https://www.tiktok.com/@the.romanelli.gro", alt: "TikTok" },
    ];
    return (
        <>
        <header class={`text-gray-600 body-font ${location?.pathname == '/resources' || location?.pathname.startsWith('/properties/') || location?.pathname.startsWith('/details/') ? "bg-white": "bg-backgroundColor"}  `}>
            <div class="container mx-auto flex  flex-wrap pt-5 flex-col md:flex-row items-center px-0 lg:px-24">
                <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <img className="w-6 mr-5 h-auto hover:opacity-75 transition-opacity" src={link.src} alt={link.alt} />
                        </a>
                    ))}
                </nav>

                <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img className={`w-24 h-auto ${location?.pathname == '/resources' ? "invert": ""}`} src={logoUrl} alt='logo' />
                </a>
                <div class="lg:w-2/5 inline-flex lg:justify-end">
                    <button onClick={() => document.getElementById("mainVideo")?.scrollIntoView({ behavior: "smooth" })}
                        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Back To Top

                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9997 24V8M15.9997 8L9.33301 14.6667M15.9997 8L22.6663 14.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <hr className="bg-white h-[2px] w-full opacity-80 px-5 xl:px-24 mt-3" />
            
            </div>
            <p className='text-center text-lg pb-2 bg-backgroundColor  pt-3 justify-between items-center text-white'>© 2024 - The Romanelli Group</p>
        </header>
        </>
    )
}

export default Footer