import React, { useEffect, useState } from 'react'
import VideoPopUp from "./videoPopUp";
import { video_url } from '../../../assets/allImg';

const Pag2 = () => {
    const [videoPopUp, setVideoPopUp] = useState(false);

    useEffect(() => {
        const scriptId = "homebot-script";
        const styleId = "homebot-style";

        // Check if script already exists
        if (document.getElementById(scriptId)) {
            waitForHomebot();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://embed.homebotapp.com/lgw/v1/widget.js";
        script.id = scriptId;
        script.async = true;

        script.onload = waitForHomebot;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }

            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }
        };
    }, []);

    const handleVideoPopUp = () => {
        setVideoPopUp(true)
    }

    const waitForHomebot = () => {
        let attempts = 0;
        const interval = setInterval(() => {
            if (window.Homebot) {
                clearInterval(interval);
                window.Homebot("#homebot_homeowner", "df5f3d04dde9ce0dccc0f12c06ac8d7cfd911b11ea7f4bfd", {
                    size: "compact",
                    theme: "light-mode-theme",
                });

                // Inject CSS inside Shadow DOM
                setTimeout(() => {
                    const homebotShadow = document.querySelector("#homebot_homeowner")?.shadowRoot;
                    if (homebotShadow) {
                        const style = document.createElement("style");
                        style.textContent = `
                            .__hblgw--button-container-light-mode-theme {
                                position: absolute !important;
                                z-index: 12 !important;
                                right: 4px !important;
                                top: 0px !important;
                                bottom: 0px !important;
                                cursor: pointer;
                                color: rgb(255, 255, 255);
                                background-color: rgb(0,0,0);
                                border: none;
                                height:36px;
                                font-size: 0.75rem;
                                font-weight: 700;
                                text-transform: uppercase;
                                margin-top: 3px;
                                width: 84px;
                                border-radius: 0px 0px 0px 0px;
                                transition: 0.2s cubic-bezier(0.05, 0.69, 0.14, 1);
                            }
    
                            .__hblgw--logo-message_small {
                                display: none !important;
                                height: 16px;
                                line-height: 16px;
                                white-space: nowrap;
                                text-align: left;
                                margin-top: 6px;
                            }
    
                            .__hblgw--input-input-light-mode-theme {
                                position: relative;
                                z-index: 11;
                                color: rgba(0, 0, 0, 0.7);
                                font-size: 16px;
                                width: 100%;
                                min-width: 84px;
                                padding: 5px;
                                border: 1px solid transparent;
                                border-radius: 0px;
                                height: 42px !important;
                            }
                                .__hblgw--input-input-light-mode-theme {
    position: relative;
    z-index: 11;
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    width: 100%;
    min-width: 84px;
    padding: 5px 5px 5px 20px;
    border: 1px solid transparent;
    border-radius: 0px;
    height: 42px !important;
}
                        `;
                        homebotShadow.appendChild(style);
                    }
                }, 100);
            } else {
                attempts++;
                if (attempts > 10) {
                    clearInterval(interval);
                }
            }
        }, 500);
    };
    return (
        <div>
            <div className="relative z-10 container px-4 sm:px-5 py-12 md:py-24 mx-auto overflow-visible">
                <div className="flex flex-col text-center w-full md:mb-6">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white mx-auto max-w-5xl px-4">
                        Making Real Estate Feel Like Home
                    </h1>
                    <p className="mx-auto leading-relaxed font-medium md:font-semibold text-base sm:text-xl max-w-4xl mt-4">
                        Enter your address to get an instant report for selling, renting it out, or putting it on Airbnb:
                    </p>
                </div>

                {/* Input & Button Section */}
                <div id="homebot_homeowner" className='mb-10 md:mb-0'></div>

                <div className={`fixed inset-auto bottom-1 md:bottom-4 flex  right-2 sm:right-4 md:right-10 border-2 border-black md:border-4 h-32 w-20 sm:h-32 sm:w-24 md:h-40 md:w-28 rounded-lg  flex-col items-end justify-end p-1
                 sm:p-2 shadow-lg z-50`}>
                    {/* Video Background */}
                    <div className="absolute inset-0 w-full h-full">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover rounded-lg"
                        >
                            <source src={video_url} type="video/mp4" />
                        </video>
                    </div>
                    {/* Square Button */}
                    <button className="rounded-sm z-10 mb-1" type="button" onClick={handleVideoPopUp}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        >
                            <path d="M3.33301 7.4987V4.9987C3.33301 4.07822 4.0792 3.33203 4.99967 3.33203H7.49967" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.6667 12.5V15C16.6667 15.9205 15.9205 16.6667 15 16.6667H12.5" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 3.33203H15C15.9205 3.33203 16.6667 4.07822 16.6667 4.9987V7.4987" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.49967 16.6667H4.99967C4.0792 16.6667 3.33301 15.9205 3.33301 15V12.5" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* "Let Connect Now" Button */}
                    <button type="button" onClick={handleVideoPopUp} className="absolute right-2 top-1/4 transform -translate-x-3/4 -translate-y-1/2 bg-red-800 text-[7px]  md:text-[10px]  text-white px-1 py-1 md:px-2 md:py-2 border border-black rounded-l-lg rounded-tr-lg shadow-lg">
                        Let Connect Now
                    </button>

                </div>
            </div>
            {videoPopUp && <VideoPopUp video_pop_url={video_url} close={() => { setVideoPopUp(false) }} />}
        </div>
    )
}

export default Pag2