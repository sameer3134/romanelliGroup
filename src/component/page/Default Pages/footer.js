import React from 'react'
import kw from "../../../assets/kw.png"
import instagram from "../../../assets/Instagram.png"
import youtube from "../../../assets/YouTube.png"
import facebook from "../../../assets/Facebook.png"
import tiktok from "../../../assets/TikTok.png"

const Footer = () => {
    const logoUrl =
        "https://media-hosting.imagekit.io//432a35325f694451/logo.png?Expires=1834842381&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bUTNXPHieLXZkZ1TVU8c7c0Sp1tM0ss5CmY5i799UOCbkGbACfxakQJSUnvyWWoNnA7ctpJyYauHziza2ox1Mf8WYsagLmr1EGDozBz6RRgT2siO2Fb8UDiUL0xUAdWHOwbWGkx-w6frrC8jyVW0oL6AO8WTmOc~yoK4K3Fkq3RXAW8FxwW4RbBJApNfppfroRExs3FahGxzNYtY6dqHm8P~X6gE~kK4P1Kfa2375FdAQlXoR347dhtKEc6qKUgnsvrz7c76hraZ0Fi3C1Kxlg3G2vqUzvAOWc2G1LKmcND-2X31I4gUVsM~jSchIssyj86h-dal5Ve3fFhwGBE2Ww__";

    const socialLinks = [
        { src: youtube, href: "https://www.youtube.com/channel/UC6JTBB3S5QoOpknrvT16s7Q", alt: "YouTube" },
        { src: kw, href: "https://theromanelligroup.kw.com/", alt: "KW" },
        { src: instagram, href: "https://www.instagram.com/theromanelligroup_realtors/?hl=en", alt: "Instagram" },
        { src: facebook, href: "https://www.facebook.com/romanellihomes", alt: "Facebook" },
        { src: tiktok, href: "https://www.tiktok.com/@the.romanelli.gro", alt: "TikTok" },
    ];
    return (
        <>
        <header class="text-gray-600 body-font bg-backgroundColor pb-2">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-5 lg:px-24">
                <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <img className="w-6 mr-5 h-auto hover:opacity-75 transition-opacity" src={link.src} alt={link.alt} />
                        </a>
                    ))}
                </nav>

                <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img className='w-24 h-auto' src={logoUrl} alt='logo' />
                </a>
                <div class="lg:w-2/5 inline-flex lg:justify-end">
                    <button onClick={() => document.getElementById("mainVideo")?.scrollIntoView({ behavior: "smooth" })}
                        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Back To Top

                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9997 24V8M15.9997 8L9.33301 14.6667M15.9997 8L22.6663 14.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
            <hr className="bg-white h-[2px] w-full opacity-80 " />
            <p className='text-center text-lg  text-white my-2'>© 2024 - The Romanelli Group</p>
        </header>
        </>
    )
}

export default Footer