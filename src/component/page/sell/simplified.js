import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Request a Free Valuation",
    description:
      "Start by understanding your home’s worth in today’s market. We’ll provide a detailed valuation tailored to your property.",
    button: "Get Your Valuation",
    imgSrc: "https://media-hosting.imagekit.io//72e54c1284454907/undraw_term-sheet_70lo%201.png?Expires=1836601706&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FwTQGguR5o3NppfKzarab9J0mCKuUdnxiUX9MNoAogMI-x7GTvKHKK22XQA4ksEfI84cy6egMqL621okamC9XgA5C7RWMnC5g-h5G26pzk5KNAqjq97BhD0JyblgaZxnNRbNgV5c~Qr-rGUvLEgfmG7y4RZYh7eEzrdeNDZpYcXkyRJt~iV629JcdwU6HySgI42zM1DPKuYezWUcfoa5PXUob4yCtXzT08r1TJq3IIjkUJF8jBhnfcqs0SlUDte3S4ek4hNlwXPALWk-WnyEVgZSR77pxUQl7tqD6TKoHGgZ1n3Ld1KJ-z6InYJonadq7FgR5ejexML86LVzgz1-jw__",
  },
  {
    step: "Step 02",
    title: "Schedule a Sales Call",
    description:
      "Talk to our experts to discuss your property goals and get a tailored selling strategy.",
    button: "Schedule a Prep Call",
    imgSrc: "https://media-hosting.imagekit.io//c211e94a427848d3/undraw_group-video_k4jx%201.png?Expires=1836601763&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x3qqm0kyKuVs~QMT-sQ6c7s2zCBptqOFcb76i3eOk96GQL6FiJabh4zwL-IUpujnver0Rfakcj~~ZWMmPCDcAKz7EdXVEg8agspncRSP7PRMrp0fh3annZQbYgXPqrG5BUcb3mqDkptBsL-LPl7FEi780FBQyLRRwSyCHqfo~~jAYb1VwNjapye14YV-HUIg0WKZmhqICx3Qvrz0NHna5uiyw9k2F7k81TsXyuvECi-Y9aRVZ~zsIUOl8I3e6Jr3F4koL13X85OmnCXFYaztas9fbKg31A4Zsy1sJ3~hj84ko6vxT188IAjdLxO8r3i18-a7MPFk~dSZqV7DdEGVaw__",
  },
  {
    step: "Step 03",
    title: "Get Your Home Market-Ready",
    description:
      "From staging tips to minor repairs, explore our expert resources to maximize your home’s appeal.",
    button: "Visit Resource Hub",
    imgSrc: "https://media-hosting.imagekit.io//2c0c5bbf42534336/undraw_for-sale_7qjb%202.png?Expires=1836601803&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H2mubtdrh31R80OEcXwhtncKhERzj2yhFxqFeUEnyZFbRPgaCw3m5bSU09sUlvPdAeutlPWZr0HZkgnBWkZSWAbbCjgoCTnmFCn9sAZJhGutNdFezTw58fjjjMYm9Vn0QmqfdgnKOQPrcG81WUnAAehZIcvm~y0YCqtc2ytLCHoYvGUslcQbvm47b0tRJhQ6DoRQzqor30xudNc4-hzhRosDaYh253J-wSfoz0rSObuXYj~E4IEYQSW9519j3nEdTIwMziw4IwQKyZ6HbB6vBxYbC~N9vH7h284z0NLqo2eHxOeEe9m-VcshaXrdSODGOmxPiZGgLGYX83hUeEsepg__",
  },
  {
    step: "Step 04",
    title: "List & Market",
    description:
      "Your property will be showcased to the right audience with stunning visuals, targeted ads, and expert strategies.",
    button: "List My Home",
    imgSrc: "https://media-hosting.imagekit.io//cafef11b70034bd6/undraw_online-ad_t56y%201.png?Expires=1836601835&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MiC8pNgYv-sa6MwGaG5vjN8al48I7~vD2RNw6q~whK9LbwYwWK5TwM~8Mft3h47qKEgR7KMkHXwpUB621hWk9ATClh4IgT0s36Hx4PCqF3-7Ffg9TkXzTCsZ46lpZKH6ajtHGXcr48pbW5aJ2CEwsnfum14a9dY01gC3seN7j4p1IeVxnv~dA1jaCp5Q6itCpxZNta~SBzS5tD7KRKP7K-CWcZepnpkul-2M3PpTz5gI3uWFY3VbfrIrpzkWern9EvvoLHdmJ4JNR9ZraRh9qCKO1RpYjXgRXNpIxLQdx9vQi1M0rNZoriJ-1WYs8r76tTWYaSrVXSYBKctX4nzAhQ__",
  },
  {
    step: "Step 05",
    title: "Negotiate & Close",
    description:
      "We’ll handle negotiations and paperwork, ensuring you get the best deal while staying stress-free.",
    button: "Start Searching",
    imgSrc: "https://media-hosting.imagekit.io//6646e1c68c7e4454/undraw_interview_yz52%201.png?Expires=1836601870&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fGoJJm1LDZc5fQsWwbm5WCF1nhsf~8El3ErVtdNP~QbIZyL9-aWe4VtwSCAfE6YPMWay0XYyc6j~JdLmyVk5u3omhhQRCGvcvUXxcSwQigj1vzGpurRHme-1sBTv3bjkNL0JPOXkD5tgx6QwmBtPWaId8uN8mm~0kxk9V59VY0all0XdJFRcv3hs4TyebpbRgkVMe4jiHvcmrO1dU-lv2XBsJDLZ53~jMP14FLEasw99woZy3acXU5JdC0z4~vMpRrToUluYRn3USu3neWQPf8aYZW3JCgVF7SnfDla2q4DhnyswAD7gQCuWTZlzHqq-7VEdYn3SrRAqy6xareLgdA__",
  },
  {
    step: "Step 06",
    title: "Celebrate",
    description:
      "Congratulations! With your sale complete, it’s time to move forward with confidence.",
    button: "Share Your Success",
    imgSrc: "https://media-hosting.imagekit.io//98371e554755451d/undraw_positive-attitude_xx3v%201.png?Expires=1836601905&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hLAhP3WZnJOXLaV3Pb5HZWpqEyzCMHUxW-c0f-h~~nFgiZq8vP1w7C~2x0MkJz6yR-0-i4Pps1EiFFUxPxY8rY3hMk95pGdUpEps3wU812VUcM35xuOTmMJse95vdtETw0Hb~gsGBcY0WiQsi1Cj9Ahy3fP4SWwc5KcH~kUHNZtyQ7KhLLpyQGBJRJpMkYYQjlb~JxqeCzRxxM5QHV84Gn5k1irMtLnwKrvT1RHosnY048vlI0ICc0kSKW~0imUDqgnNXjFnJxrDpPqg7BG~1juDzl7cEYG3gjV8vhYWD~FoKs-e8o8EDTDtB1HlD6wdrBrtoLF1ah2rygR3az9n8g__",
  },
];

const Simplified = () => {
  return (
    <div className="bg-backgroundColor">
    <div className="container mx-auto lg:px-24 px-5  py-16 relative bg-backgroundColor">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Selling Your Home, 
          <span className="italic  font-playfair ">{" "}Simplified</span>
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
        We make selling your property easy, efficient, and rewarding. Follow these simple steps to get started.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Vertical Line in Center */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-800 h-full hidden md:block`}></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Circle Indicator in Middle */}
            <div className={`absolute left-1/2 transform ${index<2?"bg-red-800":"bg-red-300"} -translate-x-1/2 w-10 h-10  flex items-center justify-center text-white font-bold z-10`}>
             
            </div>

            {/* Image Section */}
            <div className="w-full md:w-5/12 p-4 flex justify-center">
              <div className="w-auto h-auto  rounded-lg overflow-hidden">
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step Info */}
            <div
              className={`w-full md:w-5/12 p-4 text-center md:text-left ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <button className="text-lg bg-red-800 px-2 py-1 font-semibold text-white">
                {step.step}
              </button>
              <h2 className="text-2xl lg:text-4xl font-semibold text-white mt-2">
                {step.title}
              </h2>
              <p className="text-white mt-2">{step.description}</p>
              <button className="text-sm bg-white px-4 py-2 font-semibold text-black mt-2">
                {step.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Simplified;