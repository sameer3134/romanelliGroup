import React from 'react'


const imagesData = [
    {
        image: "https://media-hosting.imagekit.io//4d9d3b8615b84738/image%20(9).png?Expires=1835003340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fcwMrIbBOKFNLhzaL~n9K1EW4ZKP~eL1WyrGfzW4Zb92qTygzzVeItMj6enqrkGS4EFXFb92UlOpNaqweCXGPa8abUwnXJGPqWzP~3WRnsE-cUvqhaG2OBs91HCW2IIvXjD183nRs5nqY9cv02TzjLaDR-3XV1AC3CxOesKFX9k~y6MOaPavIpl7kcgtcmAGE66PdFBR8fCrG4DB0ou7a-SsEl-9joOjXL8QYff7UVIf6j~oVP897aeO9-De2CFS2tgnM6oIQmy483PqgUZh5yExUd1Tc6FkpmqToCvf4rO~XHLzv5hfbbRGGYIXRVuoNL3vpM5hwgRhdClh-liCMw__",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://media-hosting.imagekit.io//78409b8fe70a4058/image%20(10).png?Expires=1835003515&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Hifx3wm13MEXu90~eyNXskfh676i5izxXc6MeDPPDW5SI7j4VYArxd4v2xQlVzFH3sFw3hugLEglZjxgvaWnXjxK5jlDvsJCq1j4eceb3tNmysq0j~BvmIZSs6vIBajb~aNqcDu0tA9GGEJwQQ714GWuJyX5fZTCas4lv-kiof8zsWxeaddqG6Q9bBvwQW-01wcFM3vb-oQEhF5R2bUZPaWmpJu0qDl864k7rz2wbNlVHaIKt8EV0fnPNjx~A1da8-KHzlmtmNblyWS8QUU2yBxmoOFXaNjowHNf-HfL71DLIt~7mKQr1ChYDI2Au15M9QuO9SQWEOV21pWbQdw9Zw__",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://media-hosting.imagekit.io//4d9d3b8615b84738/image%20(9).png?Expires=1835003340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fcwMrIbBOKFNLhzaL~n9K1EW4ZKP~eL1WyrGfzW4Zb92qTygzzVeItMj6enqrkGS4EFXFb92UlOpNaqweCXGPa8abUwnXJGPqWzP~3WRnsE-cUvqhaG2OBs91HCW2IIvXjD183nRs5nqY9cv02TzjLaDR-3XV1AC3CxOesKFX9k~y6MOaPavIpl7kcgtcmAGE66PdFBR8fCrG4DB0ou7a-SsEl-9joOjXL8QYff7UVIf6j~oVP897aeO9-De2CFS2tgnM6oIQmy483PqgUZh5yExUd1Tc6FkpmqToCvf4rO~XHLzv5hfbbRGGYIXRVuoNL3vpM5hwgRhdClh-liCMw__",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://media-hosting.imagekit.io//78409b8fe70a4058/image%20(10).png?Expires=1835003515&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Hifx3wm13MEXu90~eyNXskfh676i5izxXc6MeDPPDW5SI7j4VYArxd4v2xQlVzFH3sFw3hugLEglZjxgvaWnXjxK5jlDvsJCq1j4eceb3tNmysq0j~BvmIZSs6vIBajb~aNqcDu0tA9GGEJwQQ714GWuJyX5fZTCas4lv-kiof8zsWxeaddqG6Q9bBvwQW-01wcFM3vb-oQEhF5R2bUZPaWmpJu0qDl864k7rz2wbNlVHaIKt8EV0fnPNjx~A1da8-KHzlmtmNblyWS8QUU2yBxmoOFXaNjowHNf-HfL71DLIt~7mKQr1ChYDI2Au15M9QuO9SQWEOV21pWbQdw9Zw__",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://media-hosting.imagekit.io//4d9d3b8615b84738/image%20(9).png?Expires=1835003340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fcwMrIbBOKFNLhzaL~n9K1EW4ZKP~eL1WyrGfzW4Zb92qTygzzVeItMj6enqrkGS4EFXFb92UlOpNaqweCXGPa8abUwnXJGPqWzP~3WRnsE-cUvqhaG2OBs91HCW2IIvXjD183nRs5nqY9cv02TzjLaDR-3XV1AC3CxOesKFX9k~y6MOaPavIpl7kcgtcmAGE66PdFBR8fCrG4DB0ou7a-SsEl-9joOjXL8QYff7UVIf6j~oVP897aeO9-De2CFS2tgnM6oIQmy483PqgUZh5yExUd1Tc6FkpmqToCvf4rO~XHLzv5hfbbRGGYIXRVuoNL3vpM5hwgRhdClh-liCMw__",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    }
];

const FeaureListing = () => {
    return (
        <div>
        <section className="text-white body-font bg-backgroundColor">
          <div className="container px-5 pt-8 mx-auto">
            <div className="flex flex-wrap w-full mb-8">
              <div className="lg:w-1/2 w-full lg:mb-0 text-left ml-4 lg:ml-8">
                <h1 className="sm:text-3xl text-2xl font-medium heading-font mb-2 text-white">
                  <span className="font-playfair italic">Featured</span> Listings
                </h1>
              </div>
            </div>
          </div>
      
          {/* Scrolling Image Section */}
          <div className="relative flex overflow-hidden space-x-4 sm:space-x-6 group w-full">
            {/* First scrolling set */}
            <div className="flex space-x-4 sm:space-x-6 animate-loop-scroll group-hover:[animation-play-state:paused]">
              {imagesData.map((item, index) => (
                <div key={index} className="relative group/item">
                  {/* Image */}
                  <img
                    src={item.image}
                    className="max-w-none w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] lg:w-[440px] lg:h-[500px] object-cover"
                    alt={item.heading}
                  />
                  {/* Overlay (Appears only on hovered image) */}
                  <div className="absolute inset-0 flex flex-col items-start justify-start opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 p-4 text-center">
                    {/* Transparent Upper Half */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-transparent"></div>
      
                    {/* Solid White Lower Half (Responsive Text Sizes) */}
                    <div className="text-black absolute bottom-0 left-0 w-full h-1/2 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{item.amount}</h3>
                      <p className="text-base sm:text-lg mt-1 font-bold">{item.heading}</p>
                      <h3 className="text-sm sm:text-lg mt-1">{item.detail}</h3>
                      <p className="text-sm sm:text-lg mt-1">{item.description}</p>
                      <button className="w-full py-1 px-2 bg-red-800 text-white mt-2 text-sm sm:text-base">
                        Schedule a Tour
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
            {/* Duplicate set for seamless loop */}
            <div
              className="flex space-x-4 sm:space-x-6 animate-loop-scroll group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {imagesData.map((item, index) => (
                <div key={index} className="relative group/item">
                  {/* Image */}
                  <img
                    src={item.image}
                    className="max-w-none w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] lg:w-[440px] lg:h-[500px] object-cover"
                    alt={item.heading}
                  />
                  {/* Overlay (Appears only on hovered image) */}
                  <div className="absolute inset-0 flex flex-col items-start justify-start opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 p-4 text-center">
                    {/* Transparent Upper Half */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-transparent"></div>
      
                    {/* Solid White Lower Half (Responsive Text Sizes) */}
                    <div className="text-black absolute bottom-0 left-0 w-full h-1/2 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                      <h3 className="text-xl sm:text-2xl font-bold">{item.heading}</h3>
                      <p className="text-base sm:text-lg mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    )

}

export default FeaureListing