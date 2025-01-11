import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import data from '../utils/data';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    const { language } = useLanguage();
    const contact = data[language].contact;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            // Remove non-digit characters and limit to 10 digits
            const phoneValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: phoneValue
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number must be exactly 10 digits';
        }
        if (!formData.subject.trim()) errors.subject = 'Subject is required';
        if (!formData.message.trim()) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setSubmitStatus('sending');

            try {
                const response = await fetch('https://formsubmit.co/ajax/72cbb4b2a2daec6e7b0347a2e2b9bfa8', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        subject: formData.subject,
                        message: formData.message,
                        _template: 'table', // Uses table format in email
                        _captcha: 'false' // Disable captcha
                    })
                });

                const result = await response.json();

                if (result.success) {
                    setSubmitStatus('success');
                    // Clear form after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                setSubmitStatus('error');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-300 to-gray-100">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-blue-600">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold font-poppins mb-4">{contact.title}</h1>
                        <p className="text-xl">{contact.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="container mx-auto px-4 py-12 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <FaPhone />, title: contact.phone.title, content: contact.phone.content },
                        { icon: <FaEnvelope />, title: contact.email.title, content: contact.email.content },
                        { icon: <FaMapMarkerAlt />, title: contact.address.title, content: contact.address.content },
                        { icon: <FaClock />, title: contact.hours.title, content: contact.hours.content }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-center mb-8 font-poppins">{contact.form.title}</h2>

                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={contact.form.name}
                                    className={`w-full p-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={contact.form.email}
                                    className={`w-full p-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={contact.form.phone}
                                    className={`w-full p-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder={contact.form.subject}
                                    className={`w-full p-3 rounded-lg border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                            </div>
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={contact.form.message}
                                rows="6"
                                className={`w-full p-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                            ></textarea>
                            {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={submitStatus === 'sending'}
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium
                                hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50
                                flex items-center justify-center"
                        >
                            {submitStatus === 'sending' ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : contact.form.submit}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-50 text-green-600 rounded-lg text-center">
                                {contact.form.success}
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-center">
                                {contact.form.error}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="container mx-auto px-4 pb-12">
                <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28943.614735315532!2d78.465638!3d17.446136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cd07585bcd%3A0xb10cf49e7038d870!2sISRAELITES%20SHOPPING%20NETWORK%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1727708685071!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;