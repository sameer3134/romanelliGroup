import React from 'react'


const imagesData = [
    {
        image: "https://ik.imagekit.io/ic938owib/0041de26f53f09af894faf5811e9348ae7d2f6d5.png?updatedAt=1748094166923",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://ik.imagekit.io/ic938owib/5530e4a90777dee3ab2e9957940d865701839bf8.png?updatedAt=1748094168921",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://ik.imagekit.io/ic938owib/0041de26f53f09af894faf5811e9348ae7d2f6d5.png?updatedAt=1748094166923",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://ik.imagekit.io/ic938owib/29fdd38b5e8053540c1a9e519c8bb207f1093ea5.png?updatedAt=1748094169141",
        amount: "$67500",
        heading: "Stunning 4-Bedroom Home in Worthington",
        detail: "4 Bed | 2 Bath | 2,500 sqft",
        description: "This property is hot! Contact us today for a private showing.",
    },
    {
        image: "https://ik.imagekit.io/ic938owib/29fdd38b5e8053540c1a9e519c8bb207f1093ea5.png?updatedAt=1748094169141",
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
          <div className="container px-0 lg:px-24 pt-8 mx-auto">
            <div className="flex flex-wrap w-full mb-8">
              <div className="lg:w-1/2 w-full lg:mb-0 text-left ml-4 lg:ml-8">
                <h1 className="sm:text-5xl   text-2xl font-semibold heading-font mb-2 text-white">
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
                    <div className="text-black absolute bottom-0 left-0 w-full h-2/3 lg:h-1/3 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
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