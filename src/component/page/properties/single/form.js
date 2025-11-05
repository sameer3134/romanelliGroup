import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.reason) newErrors.reason = "Reason is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const submitToAPI = async (source) => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log('📋 Form Data Being Submitted:', formData);
        console.log('📤 API Payload:', {
            firstName: formData.name.split(' ')[0],
            lastName: formData.name.split(' ').slice(1).join(' ') || '',
            emails: [{ value: formData.email }],
            tags: [`Reason: ${formData.reason}`, `Message: ${formData.message}`],
            source: source
        });

        try {
            const response = await fetch('https://api.followupboss.com/v1/people', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(process.env.REACT_APP_FOLLOWUPBOSS_API_KEY + ':'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.name.split(' ')[0],
                    lastName: formData.name.split(' ').slice(1).join(' ') || '',
                    emails: [{ value: formData.email }],
                    tags: [`Reason: ${formData.reason}`, `Message: ${formData.message}`],
                    source: source
                })
            });

            if (response.ok) {
                console.log('✅ SUCCESS: Lead submitted to FollowUpBoss');
                alert('Thank you! We will contact you soon.');
                setFormData({ name: "", email: "", reason: "", message: "" });
            } else {
                console.error('❌ FAILED: Lead submission failed');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('❌ ERROR:', error);
            alert('Network error. Please try again.');
        }
    };

    const handleSubmit = () => submitToAPI('Property Form - Submit');
    const handleScheduleCall = () => submitToAPI('Property Form - Schedule Call');
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
                        className={`w-full text-md p-2 border rounded mb-1 text-black ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                    <p className='text-white font-semibold text-left text-md mb-1'>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full text-md p-2 border rounded mb-1 text-black ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                    <p className='text-white font-semibold text-left text-md mb-1'>Reason for Contact*</p>
                    <select
                        name="reason"
                        id="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className={`w-full text-md p-2 border rounded mb-1 bg-white text-black ${errors.reason ? 'border-red-500' : ''}`}
                    >
                        <option value="">Choose from Options</option>
                        <option value="buyingInquiry">Buying Inquiry</option>
                        <option value="sellingInquiry">Selling Inquiry</option>
                        <option value="generalQuestion">General Question</option>
                        <option value="partnershipOpportunities">Partnership Opportunities</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.reason && <p className="text-red-500 text-sm mb-2">{errors.reason}</p>}
                    <p className='text-white font-semibold text-left text-md mb-1'>Message*</p>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full text-md p-2 border rounded mb-1 text-black ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}
                    <button onClick={handleSubmit} className="bg-red-800 text-white px-4 py-2 w-full rounded">
                        Submit Enquiry
                    </button>
                    <p className='text-center font-bold p-2'>OR</p>
                    <button onClick={handleScheduleCall} className="bg-white text-black px-4 py-2 w-full rounded">
                        Schedule a Call
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form