import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Get Prequalified",
    description:
      "Prequalify to show you're serious about buying. This step ensures you're ready to act fast when you find 'the one'.",
    button: "Start Prequalification",
    imgSrc: "https://media-hosting.imagekit.io//de6be70f2e3143c0/undraw_certificate_71gt%201.png?Expires=1836519880&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JdFa7wVY1j-TYskQf0Pnqcmk~eCp3eFrI8B9Mn~V1hPscEuxAwOclwsMTW0c6iTr6yC7Rws7L0Kjxs5oIydBcp2D6XGpfZIPh8igGr4TgglecuZrcn0HbEkFUfQCvwiwn2A8yF7pn5eKy9MsUP42RXph3zFszurcDZib0dB-xGtl6grrUFN7itEpL9CdxeEIe4oT60uFPGQOrf6rKi1hWAaxStgE4DMUM9hGCZYXEAJfNECu4rZCLSw1AaRjpt~TTG02KIgi7~Uui2hyp3YKp--1pNVCZLa-miqXaF6N3pErpm0AFKpPtxnqjWq8HUpZU6cxblQ35DV9dJAmE4b93w__",
  },
  {
    step: "Step 02",
    title: "Start Your Journey",
    description:
      "Complete a quick form to share your goals, then book a consultation to plan your next steps—simple & stress-free.",
    button: "Get Started",
    imgSrc: "https://media-hosting.imagekit.io//9a453874e27c4e83/undraw_accept-tasks_syrr%201.png?Expires=1836519874&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=m~InqeO2e0UeJHBqUH7~afkgw0WRu2FsvqksGsPOjDsnaWYMQxjyXBXu~sKL8Tdf0Pt-kSt1DdThsvK8mkUSZjvKKAtFKm6APMYkfOulYy-s4iRH9YZfdP5H-ZZeG9NpQLwFToTAV7NwpvmV0Ncr8dMyLnXi-U2s92oZgJUMMYQOKBH0FT6MWE6~RpIkUmdx~nwjxdSNik6JkX79OXSkjR8Rw863CoJrz1tyq3EpVbLrXkhu~tJjnSohCJplv0CLqqyIEhyC~yCNzEVxe4HlAM-e1bf1iYsdnHEiR9YTHiujFGBPDJMBAUD64ibpjwFgv63lDaXWXRi2Lt2CF-iG1w__",
  },
  {
    step: "Step 03",
    title: "Find the One",
    description:
      "Start exploring properties that match your goals and lifestyle. Whether resale or new construction, the choice is yours.",
    button: "Start Searching",
    imgSrc: "https://media-hosting.imagekit.io//1d6722b412b44882/undraw_searching_no1g%201.png?Expires=1836519887&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xnBiDKjKIsU09r3AkhdVmMPJWKSEp6RRrjdM0X-eHE4Ik6aUxMRPNrQ1VS5rLHUHqzjNk9lnX8Ps5OtmXK3LketXoEcGenYVH98K22AY8qEeLhJCRycD9fVWwwtwgCW-3-yy-zX3O~yMJ5S8sQKSatEfAfN3qG7dkBjweye7~a2kAK-q1I0CR-QV0cpI0gaA79L6gPTDNc-h2qHdfiRArjhaBsXyt6Xqy8hCjJ0OFqcqYfchYk4ikpG3TkjOCDcs2BrnTcRQCoV72vZnVU-PGS9Ik2aRiGR1DCbYmIHiNJv4-zx5SXk21~MRYts3mWRnlUFBb~7gv4qOA1Z78ZTAzQ__",
  },
  {
    step: "Step 04",
    title: "Learn to Negotiate",
    description:
      "Master the art of negotiation with expert tips tailored to today's competitive market. Knowledge is power.",
    button: "Join Negotiation Workshop",
    imgSrc: "https://media-hosting.imagekit.io//f6ecc9b1ae1d4a43/undraw_interview_yz52%201.png?Expires=1836519883&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VKpNiCbOicMFpuqVKdgmeh7KySQlDwtBEtCZqauO25mAIIoMVPv8UMsTfflpn2XAuvVvTAV9cjxTUzeY5N5US9uqa05NKVWquWNLLa~q9Z355y0qt37xx8xcZs1JHfrYce9lb9a56Vz-OdxRJiRhzl94jS3waObDrnKNKuTaVkr3lZeepkp0upwFo2qQTgxh1148YN3qaNz95ZHMPMv73Gpdh4iMYMnNX4iGWNraKv8BpeUBziEiqfvWFhIopfMZuXGSXlK6k4OVgzLRL2jxM~iz6~tL2xg7H-owJGVxCo7U1MBhrgJom8GSTBmb0mK52joE-n3kDuXmBJwVDKob5Q__",
  },
];

const RoadMap = () => {
  return (
    <div className="container mx-auto lg:px-24 px-5 py-16 relative">
      {/* Header */}
      <div className="text-center">
        <h1 className="md:text-5xl text-2xl   font-bold mb-4 text-gray-900">
          Your RoadMap to{" "}
          <span className="italic font-playfair">Perfect Property</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We’ve simplified the homebuying process into four easy steps. Let’s get you closer to your dream home with confidence!
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
              <div className="w-[229px] h-[300px] bg-gray-300 rounded-lg overflow-hidden">
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
              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                {step.title}
              </h2>
              <p className="text-gray-600 mt-2">{step.description}</p>
              <button className="text-sm bg-black px-4 py-2 font-semibold text-white mt-2">
                {step.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;