import React, { useState } from 'react';

const FirstPageSell = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div className="relative w-full ">
            <div className="container px-4 sm:px-5 py-12 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <section className="text-white body-font">
                        <div className="container flex flex-wrap px-5 py-12 md:py-24 mx-auto items-center">
                            {/* Left Section (Text) */}
                            <div className="w-full md:w-1/2 text-left md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 border-gray-200">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Your Next Move Starts Here
                                </h1>
                                <p className="leading-relaxed font-bold text-xl">
                                Whether you're buying, selling, or just have a question, we're here to help. Let's start the conversation!
                                </p>
                            </div>

                            {/* Right Section (Form) */}
                            <div className="w-full md:w-1/2 md:pl-12">
                                <div className="max-w-md mx-auto h-auto p-4 bg-white rounded-lg shadow-lg text-gray-800">
                                        <div>
                                            <h2 className="text-2xl font-bold mt-2 text-center">Connect with Us </h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center"> <span className="  italic">Directly</span></h2>
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
                                            <p className='text-black font-semibold text-left text-md mb-1'>Reason for Contact*</p>
                                            <select
                                                name="text"
                                                id="reason"
                                                value={formData.reason}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2 bg-white"
                                            >
                                                <option value="">Choose from Options</option>
                                                <option value="buyingInquiry">Buying Inquiry</option>
                                                <option value="sellingInquiry">Selling Inquiry</option>
                                                <option value="generalQuestion">General Question</option>
                                                <option value="partnershipOpportunities">Partnership Opportunities</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <p className='text-black font-semibold text-left text-md mb-1'>Message*</p>
                                            <textarea
                                                type="text"
                                                name="message"
                                                placeholder="How can we help you?"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2"
                                            />
                                            <button onClick={handleSubmit} className="bg-red-800 text-white px-4 py-2 w-full rounded">
                                                Submit Enquiry
                                            </button>
                                            <p className='text-center font-bold p-2'>OR</p>
                                            <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 w-full rounded">
                                                Schedule a Call
                                            </button>
                                        </div>        
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