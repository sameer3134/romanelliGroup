import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { sellsmarter_step1, sellsmarter_step2, time, trend } from '../../../assets/allImg'

const blogData = [
  {
    media: "blog",
    type: "video",
    src: sellsmarter_step1,
    title: "Blog Post",
    timing: "5 min read",
    description: "How to Stage Your Home for Maximum Impact",
    button: "Read Now"
  },
  {
    media: "blog",
    type: "image",
    src: sellsmarter_step2,
    title: "Blog Post",
    timing: "5 min read",
    description: "Central Ohio Real Estate Trends (2023 Report)",
    button: "Read Now"
  },
]
const Category = () => {
  const [selectedArea, setSelectedArea] = useState("all")
  const [showData, setShowData] = useState(blogData)
  const [selectyoutube, setSelectYoutube] = useState([])
  const [selectinstagram, setSelectInstragram] = useState([])
  const [visibleItems, setVisibleItems] = useState(6)
  const fetchYoutubeVidoes = async () => {
    try {
      // await axios.get(`https://embed.homebotapp.com/lgw/v1/widget.js`)
      //  await axios.get(`https://static.elfsight.com/apps/yottie/stable/774d9b25dc41371a3d1fabd227dc5573870d3569/app/yottie.js`)
      //  await axios.get(`https://static.elfsight.com/platform/platform.js`)
      const response = await axios.get(
        `https://storage.elfsight.com/api/v2/youtube?q=%2Fvideos%3Fid%3D56TmOwhfJxE%252Cf5b3v3zPG_I%252C3jZLIPTABRM%252CyJ5NNkteBmc%252CiseAOp2xBhI%252Cn2aIAbGEcvo%252CsENwKuQO5iE%252COULPdgY_yDo%252Clt_PhNeRPis%252C1_i2dWtJJMc%252CjcjHxpP-BUA%252CJCYSbmOGDq0%252CwwNnh7VOsYA%252C82SYtIW1Vto%252CRgKZ7FiiPBs%252Cba1pD1snY8U%252COqoojWSFLXQ%252CYHIpHvO91g4%252CoLyHWqaudos%252C_cU4jEX7JFw%252Cyl6abGknojw%252C4DxbtvWo_AM%252CIpHmABoBQGs%252CmqEBCdNtvqA%252CdvSEwZLQ914%252CgaQMQwUwS1Y%252CSASezCQsWbY%252CkLj2DO0jSsE%252CxXVHIM7z_Z8%252CXy_nMhxsZq4%252C0BUOviyBa_w%252CVYXKtFyZlOw%252CUwD2w26uMpg%252CJgbcodyLUI8%252C1AnRGqG1Nu0%252CqGGAPPw0h9I%252CFQjg-WHaSX8%252COBK43uSzP7g%252CgF9R5oowqz0%252Cbr8Sjrd4UeM%252COmuWfrFyMpA%252CZf4jo1NGKvw%252Cuu6UY1gjQGU%252CT79cG9Yui9c%252Chh1c-lRTe_U%252C27NfF1fQaC0%252CvyuaYJAKdF0%252CBLdBhvrwR0s%252C7la8xzYa5-w%252CqxUwIlwS8YY%26part%3Dsnippet%252CcontentDetails%252Cstatistics&public_key=RWxmc2lnaHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQu`,
        {
          headers: {
            'x-widget-token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiUFVCTElDIiwid2lkZ2V0UGlkIjoiNmU3NzY0YzQtNzRhOS00ZGEyLWIxMzEtNTFjMDA1NGQzZWM4Iiwid2lkZ2V0UmV2aXNpb25QaWQiOiJkZDViMjgyOC03NGY1LTRlNWUtYTUxZi03NDZkNDllZTQ2MzIiLCJhcHAiOiJ5b3V0dWJlLWdhbGxlcnkiLCJhY2NvdW50UGlkIjoiMjYxM2RhNzktYTc3OC00NmE3LThjNTAtNDkwODc3MWNkYjFiIiwic3ViIjoiNmU3NzY0YzQtNzRhOS00ZGEyLWIxMzEtNTFjMDA1NGQzZWM4IiwidmVyIjoiZGQ1YjI4MjgtNzRmNS00ZTVlLWE1MWYtNzQ2ZDQ5ZWU0NjMyIiwiaWF0IjoxNzQ2NzEwMzU0LCJleHAiOjE3NDY4ODMxNTR9.Ap6J-UE0yRkZubc0CoU68aaNWMU-QzvXq9oTfyNUs_xh7mf0L55Hlvz4TvYGcOcMZ7cXo3OQH-iGsOVKqP79DcyU2btuodzrpjuHWMnoPGO-co8awzSzsEgoadeL4wlKqn-6tr1nM0iY9Bd2Qf4WpNOL1q-lPtF_Okh8vUxPvFyFsLAfDz7a_YVHI0PEETuLyZ2Bbsvx8BNlU4TFjTIZfiSTfAWUAG9qeZZJQa5goR7KjIv2urTEAt5OIaH1R4eT_H62sVVXidTCWmPrSSAcDTPNVklQl9t2ocgdWIkQEdIj9bbEz6-dbSjpSu2uSzg0QY81b-ex7tIcYw4zDOTmMcJfZ0cUhOwYSVCfwuwmtVlDxnSi409Ru5ltDj609cZXHI5ydLbAykITUDJhwaQ9QnFAobNtOo0q3bLzrarTyWfXb1rmq2TvrJc9UCWGps-rMn3Dqpk5aYiZgoqzbEq36RQitkINxQNdhkcotGfpCsASsALNSi2Br3nEo0Yn6bn3A-CLwax9K0RMpWxcOESb_Z1aI1CRPRVmpddhijETRqFw1DkMdWEg_D98Nk3plI7FNGjqHgUwJ6Qbz--1l2N8khTcNNtP6yfqKYlMa244MJbJQ155u5qv5GGf7qiU0Cbkl_Thsab6gASIwrw_cDfC_U-JzmlBohMtEd_2Y0mxKT0'
          }
        }
      );

      //   // Map API response to match testimonial structure
      const formattedYoutube = response.data.items.map((review) => ({
        media: "image",
        type: "image",
        videoId: review.id,
        title: "YouTube Video",
        description: review.snippet.title,
        timing: `${review.statistics.viewCount}  views`,
        src: `https://i.ytimg.com/vi/${review.id}/hqdefault.jpg`,
        mediumImage: `https://i.ytimg.com/vi/${review.id}/sddefault.jpg`,
        largeImage: `https://i.ytimg.com/vi/${review.id}/maxresdefault.jpg`,
        url: `https://www.youtube.com/shorts/${review.id}`,
        button: "Watch on Youtube"
      }));
      setSelectYoutube(formattedYoutube)
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  const cleanUrl = (url) => url.replace(/\\/g, "");
  const limitWords = (text, wordLimit) => {
    if (!text) return ""; // Handle empty cases
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };
  const fetchInstagramVidoes = async () => {
    try {
      const response = await axios.get(
        `https://widget-data.service.elfsight.com/api/posts?sources[]=%7B%22pid%22%3A%2247700ad8-54d7-4516-aee5-a21f85caa778%22%2C%22filters%22%3A%5B%5D%7D&sort=date&limit=50&offset=50`
      );

      //   // Map API response to match testimonial structure
      // "https://images.weserv.nl/?url=";
      const proxyUrl = "https://images.weserv.nl/?url=";
      const formattedInstagarm = response.data.payload.map((review) => ({
        media: "image",
        type: "image",
        title: "Instagram Video",
        description: limitWords(review.caption, 10),
        timing: `${review.likesCount}  views`,
        src: proxyUrl + encodeURIComponent(review.media[0]?.url || review.media[0]?.original || review.media[0]?.thumbnail?.url || "", // Get the best available image
        ), // Get the best available image,
        url: cleanUrl(review.link),
        button: "Watch on Instagram"
      }));
      setSelectInstragram(formattedInstagarm)
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  useEffect(() => {
    fetchYoutubeVidoes();
  }, []);
  useEffect(() => {
    fetchInstagramVidoes();
  }, []);
  useEffect(() => {
    if (selectedArea === "youtube") {
      setShowData(selectyoutube)
    } else if (selectedArea === "all") {
      setShowData([...blogData, ...selectinstagram, ...selectyoutube,])
    } else if (selectedArea === "blog") {
      setShowData(blogData)
    } else if (selectedArea === "instagram") {
      setShowData(selectinstagram)
    }
  }, [selectedArea, selectinstagram, selectyoutube]);
  const loadMore = () => {
    setVisibleItems(visibleItems + 6);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);


  return (
    <div className="bg-backgroundColor">
      <div className="container mx-auto lg:px-24 px-5  py-16 relative bg-backgroundColor">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Explore By
            <span className="italic  font-playfair ">{" "}Category</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-4">
            Find the content you need with ease—browse by topic to stay informed and inspired.
          </p>
          <div className="flex flex-wrap justify-center lg:w-full mx-auto leading-relaxed text-base">
            <button
              onClick={() => { setSelectedArea("all") }}
              className={`inline-flex py-2 px-4 sm:px-6 ${selectedArea === "all" ? "text-white bg-red-800" : "text-black bg-white"} text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              All
            </button>
            <button
              onClick={() => { setSelectedArea("instagram") }}
              className={`inline-flex py-2 px-4 sm:px-6 ${selectedArea === "instagram" ? "text-white bg-red-800" : "text-black bg-white"} text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              Instagram Reels
            </button>
            <button
              onClick={() => { setSelectedArea("youtube") }}
              className={`inline-flex py-2 px-4 sm:px-6 ${selectedArea === "youtube" ? "text-white bg-red-800" : "text-black bg-white"} text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              YouTube Videos
            </button>
            <button
              onClick={() => { setSelectedArea("blog") }}
              className={`inline-flex py-2  px-4 sm:px-6 ${selectedArea === "blog" ? "text-white bg-red-800" : "text-black bg-white"} text-base sm:text-lg mb-2 sm:mb-0 mx-2`}
            >
              Case Studies
            </button>
          </div>

        </div>
        {/* Responsive Grid */}
        <div className="relative overflow-hidden mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {showData?.slice(0, visibleItems).map((item, idx) => (
              <div key={idx} className="relative w-full">
                {/* Media (Image or Video) */}
                {item.type === "image" ? (
                  <img
                    src={item.src} alt={item.src}
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] text-white object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white">
                  {/* Title and Timing */}
                  <div className="absolute top-2 left-2 bg-white py-1 px-2 text-black font-semibold">
                    {item.title}
                  </div>
                  {item?.media === "blog" ? <div className="absolute flex items-center top-2 right-2 bg-white py-1 px-2 text-black font-semibold">
                    <img src={time} className="w-5 h-5 mr-1" alt="trends icon" />
                    {item.timing}
                  </div> : <div className="absolute flex items-center top-2 right-2 bg-white py-1 px-2 text-black font-semibold">
                    <img src={trend} className="w-5 h-5 mr-1" alt="trends icon" />
                    {item.timing}
                  </div>}


                  {/* Description */}
                  <p className="text-xl sm:text-3xl font-semibold mb-3 text-left">
                    {item.description}
                  </p>

                  {/* Button Group */}
                  <div className="flex gap-2">
                    <button onClick={() => window.open(item.url, "_blank")}
                      className="flex-1 bg-red-700 py-2 text-sm sm:text-lg font-semibold text-white transition hover:bg-red-800">
                      {item.button}
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 flex items-center justify-center transition hover:bg-red-800">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.333 14.665L14.666 1.332M14.666 1.332H2.666M14.666 1.332V13.332"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-wrap mt-4 justify-center lg:w-2/3 mx-auto leading-relaxed text-base">
          {showData.length > visibleItems && <button onClick={loadMore} className={`inline-flex   py-2 px-4 sm:px-6 bg-white text-black text-base sm:text-lg mb-2 sm:mb-0`}>
            Load more
          </button>}</div>
        {/* <div className="elfsight-app-6e7764c4-74a9-4da2-b131-51c0054d3ec8 hidden" data-elfsight-app-lazy></div> */}
      </div>
    </div>
  )
}

export default Category