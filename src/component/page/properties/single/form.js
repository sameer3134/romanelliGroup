import React, { useState } from 'react'

const Form = () => {
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
    <div>
                <div className="max-w-md mx-auto h-auto p-4 bg-black rounded-lg shadow-lg text-white ">
                                        <div>
                                            <h2 className="text-2xl font-bold mt-2 text-center">Connect with Us </h2>
                                            <h2 className="text-2xl font-bold mb-4 text-center"> <span className="font-playfair  italic">Directly</span></h2>
                                            <p className='text-white font-semibold text-left text-md mb-1'>Full Name</p>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2 text-black"
                                            />
                                            <p className='text-white font-semibold text-left text-md mb-1'>Email</p>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2 text-black"
                                            />
                                            <p className='text-white font-semibold text-left text-md mb-1'>Reason for Contact*</p>
                                            <select
                                                name="reason"
                                                id="reason"
                                                value={formData.reason}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2 bg-white text-black"
                                            >
                                                <option value="">Choose from Options</option>
                                                <option value="buyingInquiry">Buying Inquiry</option>
                                                <option value="sellingInquiry">Selling Inquiry</option>
                                                <option value="generalQuestion">General Question</option>
                                                <option value="partnershipOpportunities">Partnership Opportunities</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <p className='text-white font-semibold text-left text-md mb-1'>Message*</p>
                                            <textarea
                                                type="text"
                                                name="message"
                                                placeholder="How can we help you?"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full text-md p-2 border rounded mb-2 text-black"
                                            />
                                            <button onClick={handleSubmit} className="bg-red-800 text-white px-4 py-2 w-full rounded">
                                                Submit Enquiry
                                            </button>
                                            <p className='text-center font-bold p-2'>OR</p>
                                            <button onClick={handleSubmit} className="bg-white text-black px-4 py-2 w-full rounded">
                                                Schedule a Call
                                            </button>
                                        </div>        
                                </div>
    </div>
  )
}

export default Form