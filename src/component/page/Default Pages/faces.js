import React from 'react';

const Faces = () => {
  const image1_url =
    'https://media-hosting.imagekit.io//7e9679f120bb4dcc/image%20(4).png?Expires=1836772144&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j1Pepq4bFiKjG6hJ40R844ODW7EpSOxQ8XdbTYR-FHuEvBPlR~6DqNj4BR0RX7Sztlx1lRURAFMzwBYpgj8zKg2EJJCq00Hfoj5~nDrqReNcAd7yiuTyg~1SYT21C7IaeHE6MKQ5~lzP9o7L3J0F~uEPXQ5vZYyrbZyuTcX10Qykop8jfAxNw3E4Wmfk6J95oNBYMRGVJ3zWr7wSgMsHB1yNqgAX9AvId9IXa3cOfaRTawvRa9tAbY~djTDimu8ldZnssEOdzcbo3pbRzvHeD51E48XOL9SOnwPguZgh6DR1FlAV8CjiGjoT5okhc70Pn~cXIHeVUo8jZp~OYZja7A__';
  const image2_url =
    'https://media-hosting.imagekit.io//ed7776bcc5d447ff/screenshot_1740236218214.png?Expires=1834844219&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DVCdW4C6t97Jaqlw1y6Y~Tf8hoX61JuAek2zpjHjlBNewXF79JF1UNtmYsrPxpSaF8d23rQisWjJiv2N3AdNcmfd2ISLW7M~JauaW1hIM9cNROcxTW8iHH7spT6ON07BBvEXQppAMecNoPpd-0tsF0PsInTIsxfmddUDox74H8DOkQAnuctgXyaLwqTDCrB-W3fZMSHOZU8SHyjFgBQOtXzxx5PnIRXlMOIQ02Id94nH6cOncBlpS7w0A41F7lH9hVQsSGITa6LqMsMS7qDUWC23SBzVRd~yFRt-o~riBnGh7Sh3enIht5A0gbYQ5oGcmLCMzEpmp7ny0k0UdgytAQ__';

  return (
    <>
      {/* Heading */}
      <div className="bg-backgroundColor ">
        <div className="flex flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl font-playfair mb-2 font-semibold text-white">
            Meet the <span className="italic ">Faces</span> behind the
          </h1>
          <h1 className="sm:text-5xl text-2xl font-semibold text-white">Romanelli Group</h1>
        </div>
      </div>

      {/* Section with Split Background */}
      <section className="relative">
  <div className="absolute inset-0 bg-white md:bg-backgroundColor h-1/3"></div> {/* 1/4 background color */}
  <div className="absolute inset-0 bg-white h-2/3 top-1/3"></div> {/* 3/4 white background */}

  <div className="container px-5 py-12 mx-auto relative z-10">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
      
      {/* First Profile */}
      <div className="sm:w-1/2 mb-10 px-4 flex flex-col items-center">
      <div className="relative w-80">
  <div className="relative">
    <img
      alt="content"
      className="object-cover object-center h-auto w-full"
      src={image1_url}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/4 to-transparent"></div>
    <div className="absolute bottom-2 left-0 w-full text-white text-left px-2 pl-4">
      <h3 className="text-2xl font-semibold">Cristina Romanelli</h3>
      <p className="text-lg">CEO & Founder</p>
    </div>
  </div>
</div>


        <p className="leading-relaxed text-base text-black mt-4 max-w-xl">
        In 2021, I was honored to be named among the Top 500 (out of 10,000) in Central Ohio by Real Producers Magazine. That same year, I joined the elite ranks of the $10 Million Dollar Club at the Columbus Board of Realtors. As a proud Ohio University alumnus, I bring the dedication and teamwork I learned as a Bobcat to every deal we close. My mission? To help you achieve your dreams with unmatched expertise and personalized service
        </p>
      </div>

      {/* Second Profile */}
      <div className="sm:w-1/2 mb-10 px-4 flex flex-col items-center">
      <div className="relative w-80">
    <img
      alt="content"
      className="object-cover object-center h-auto w-full"
      src={image2_url}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/4 to-transparent"></div>
    <div className="absolute bottom-2 left-0 w-full text-white text-left px-2 pl-4">
      <h3 className="text-2xl font-semibold">Antonio Romanelli</h3>
      <p className="text-lg">Agent & Brother</p>
    </div>
  </div>
        <p className="leading-relaxed text-base text-black mt-4 max-w-xl">
        As a graduate of Ohio Wesleyan University with a degree in Finance and Economics, I bring a detail-oriented, data-driven approach to every property transaction. After starting my career in Commercial Real Estate at Huntington Bank in 2021, I’ve transitioned to residential properties with The Romanelli Group. Growing up in Central Ohio, I learned the value of community and connection—values I bring to every client relationship.
        </p>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default Faces;
