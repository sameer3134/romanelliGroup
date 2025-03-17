import React, { useEffect, useState } from 'react'
import VideoPopUp from "./videoPopUp";

const Pag2 = () => {
    const [videoPopUp, setVideoPopUp] = useState(false);
    const [closeCorner, setCloseCorner] = useState(true)
    const video_pop_url = "https://media-hosting.imagekit.io//432b84cea88a4d78/050748de5868b1779c152ba72df21c73570958a5.mp4?Expires=1834914333&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P7qPGfyrFlDCn89VrU~wUpqBjc4FUFJDkg8H2ABgf3ip0qwVZsXw4jqXNi1X2WuH1ao5CGG6Us~gPHmt9ijeUjY~Vv7sTbuhjw~1ql6iInvOdTyo88hRD7~wHt8~YcQH45vcapcKyH4yk7Sk2hpxxvhqa8TQ73P89SNjrgTs8hKBRnCs6rTwTFjCwW18cAPVUNeuUU8r8acEvIhwPHed24t8vRc-de2K~VpBPJynsmiMA4H8xH9qpiCN6Qb3ZjS~ApcxYsUYxJjB2vPwmBYoioBgxc-QN1VsgXo1SzsmKS~JzaR41zctUIMlmCa2aelaNw3KFO8GcJ4taMULzAXMkg__"
    const handleVideoPopUp = () => {
        setVideoPopUp(true)
    }
    const [isLoaded, setIsLoaded] = useState(false);

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
    
    const waitForHomebot = () => {
        let attempts = 0;
        const interval = setInterval(() => {
            if (window.Homebot) {
                clearInterval(interval);
                console.log("✅ Homebot loaded!");
                setIsLoaded(true);
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
                                z-index: 102 !important;
                                right: 5px !important;
                                top: 0px !important;
                                bottom: 0px !important;
                                cursor: pointer;
                                color: rgb(255, 255, 255);
                                background-color: rgb(0,0,0);
                                border: none;
                                height:30px;
                                font-size: 0.75rem;
                                font-weight: 700;
                                text-transform: uppercase;
                                margin-top: 5px;
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
                                z-index: 101;
                                color: rgba(0, 0, 0, 0.7);
                                font-size: 16px;
                                width: 100%;
                                min-width: 84px;
                                padding: 5px;
                                border: 1px solid transparent;
                                border-radius: 0px;
                                height: 42px !important;
                            }
                        `;
                        homebotShadow.appendChild(style);
                        console.log("🎨 Custom styles applied inside Shadow DOM.");
                    }
                }, 100);
            } else {
                console.log("⏳ Waiting for Homebot...");
                attempts++;
                if (attempts > 10) {
                    clearInterval(interval);
                    console.log("❌ Homebot failed to load.");
                }
            }
        }, 500);
    };
    
    
    



    return (
        <div>
            <div className="relative z-10 container px-4 sm:px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white mx-auto max-w-4xl px-4">
                        Do you know how much you'd walk away with if you sold your property today
                    </h1>
                    <p className="mx-auto leading-relaxed font-medium md:font-bold text-base sm:text-lg max-w-2xl mt-4">
                        Enter your address to get an instant report for selling, renting it out, or listing it on Airbnb:
                    </p>
                </div>

                {/* Input & Button Section */}
                <div id="homebot_homeowner"></div>

                <div className={`fixed bottom-4 ${closeCorner == false ? "md:hidden" : "md:flex"}  right-2 sm:right-4 md:right-10 border-2 border-black md:border-4 h-24 w-20 sm:h-32 sm:w-24 md:h-40 md:w-28 rounded-lg  hidden flex-col items-end justify-end p-1 sm:p-2 shadow-lg z-20`}>

                    {/* Close Button */}
                    <button className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs hover:bg-gray-900 z-10" onClick={() => { setCloseCorner(false); console.log(closeCorner) }}>
                        ✕
                    </button>

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
                            <source src={video_pop_url} type="video/mp4" />
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
                    <button type="button" onClick={handleVideoPopUp} className="absolute right-2 top-1/4 transform -translate-x-3/4 -translate-y-1/2 bg-red-800 text-[10px]  text-white px-2 py-2 border border-black rounded-l-lg rounded-tr-lg shadow-lg">
                        Let Connect Now
                    </button>

                </div>
            </div>
            {videoPopUp && <VideoPopUp video_pop_url={video_pop_url} close={() => { setVideoPopUp(false) }} />}
        </div>
    )
}

export default Pag2