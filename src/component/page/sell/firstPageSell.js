import React, { useState } from 'react';

const FirstPageSell = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        propertyType: "",
        timeline: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setStep(step + 1)
        console.log(formData);
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="relative w-full ">
            <div className="container px-4 sm:px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <section className="text-white body-font">
                        <div className="container mt-[-50px] flex flex-wrap px-5 py-12 md:py-24 mx-auto items-center">
                            {/* Left Section (Text) */}
                            <div className="w-full md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 border-gray-200">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                    Let's find the perfect home for you!
                                </h1>
                                <p className="leading-relaxed font-bold text-xl">
                                    Get top dollar for your property with our proven strategies and personalized approach.
                                </p>
                            </div>

                            {/* Right Section (Form) */}
                            <div className="w-full  md:w-1/2 md:pl-12">
                                <div className="max-w-md mx-auto h-auto p-4 bg-white rounded-lg shadow-lg text-gray-800">
                                    {/* Progress Indicator */}
                                    <div className="flex justify-between mb-2">
                                        <div className="flex w-full justify-between gap-1">
                                            {["1. Basic Info", "2. Property Info", "3. Confirmation"].map((text, index) => (
                                                <div key={index} className="flex flex-col items-center">
                                                    {/* Step Title with Spacing */}
                                                    <div className={`text-[11px] md:text-md lg:text-lg pr-4 md:pr-3 font-semibold mb-2 ${step > index ? 'text-black' : 'text-gray-500'}`}>
                                                        {text}
                                                    </div>
                                                    {/* Progress Bar */}
                                                    <div className={`h-[4px] w-full ${step > index ? 'bg-red-800' : 'bg-red-300'}`}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form Steps */}
                                    {step === 1 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mt-6 text-center">Get a Free</h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center">Home <span className="font-playfair  italic">Valuation</span></h2>
                                            <p className='text-black font-semibold text-left text-md mb-1'>Full Name</p>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2"
                                            />
                                            <p className='text-black font-semibold text-left text-md mb-1'>Email</p>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2"
                                            />
                                            <p className='text-black font-semibold text-left text-md mb-1'>Phone</p>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-4"
                                            />
                                            <button onClick={nextStep} className="bg-red-800 text-white px-4 py-2 w-full rounded">
                                                Next
                                            </button>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div>
                                            <h2 className="text-2xl font-bold mt-4 text-center">Get a Free</h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center">Home <span className="font-playfair   italic">Valuation</span></h2>
                                            <p className='text-black font-semibold text-left text-md mb-1'>Property Address</p>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Enter your Property Address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2"
                                            />
                                            <p className='text-black font-semibold text-left text-md mb-1'>Property Type</p>
                                            <select
                                                name="propertyType"
                                                id="propertyType"
                                                value={formData.propertyType}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2 bg-white"
                                            >
                                                <option value="">Choose from Options</option>
                                                <option value="Residential">Residential</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Land">Land</option>
                                                <option value="Other">Other</option>
                                            </select>

                                            <p className='text-black font-semibold text-left text-md mb-1'>Timeline</p>
                                            <select
                                                name="timeline"
                                                id="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-4 bg-white"
                                            >
                                                <option value="">When are you planning to sell?</option>
                                                <option value="Immediately">Immediately</option>
                                                <option value="Within 1 Month">Within 1 Month</option>
                                                <option value="1-3 Months">1-3 Months</option>
                                                <option value="3-6 Months">3-6 Months</option>
                                                <option value="Not Sure">Not Sure</option>
                                            </select>
                                            <div className="flex flex-col sm:flex-row justify-center gap-1 mt-4">
                                                <button onClick={prevStep} className="text-gray-900 font-semibold bg-gray-200 px-4 py-2 text-md rounded w-full ">
                                                    Back
                                                </button>
                                                <button onClick={handleSubmit} className="bg-red-800 text-white px-4 py-2 text-md rounded w-full ">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="">
                                            {/* Centered Image */}
                                            <img
                                                className="w-32 md:w-40 lg:w-48 mx-auto mb-4"
                                                src="https://media-hosting.imagekit.io//b26811412c2c4bad/Group%20223.png?Expires=1836563036&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Cvmexegcmh2phEMptYbsrnGFcMiVIBGopo7qOULWMMFptRQOmwn0nPBViD2v5zlSR5B9p0OTprA98InsmuyirfektrvjP01XzUm~0hSqcNnW~sg9BMsT3Bez3mdOL0UKzAnwCD4hvtl5SUXHCryb2Jlka~nz5tRqdfkuFv0JJ9SKuToyZAX-0jTebJRNLAowA0y8LyypQZELz3kkIqJOriJjeokEeInJrxyma-Wf3ChRTKtWv~eOi20v1AmpjGo5o3ThUYT3jxNcYlrE7~0ewzx9pFdjUu55GV5U6cQZOWDYtXFq3qff1QF-BTq-ReDdYvkwX7EUFwqxMi37xokhrA__"
                                                alt="Thank You"
                                            />

                                            {/* Text Content */}
                                            <p className="text-2xl px-4 italic font-bold">Thank You for Taking the <span className="font-playfair   italic">First Step!</span></p>
                                            <p className="text-gray-900 max-w-md my-2">
                                                We’ve received your details and will contact you shortly to discuss your property’s valuation.
                                            </p>

                                            {/* Buttons in One Line */}
                                            <div className="flex flex-col sm:flex-row justify-center gap-1 mt-4">
                                                <button className="text-gray-900 font-semibold bg-gray-200 px-2 py-2 text-md rounded w-full">
                                                    View Sold Properties
                                                </button>
                                                <button className="bg-red-800 text-white px-4 py-2 text-md rounded w-full">
                                                    Contact Us Now
                                                </button>
                                            </div>
                                            
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FirstPageSell;