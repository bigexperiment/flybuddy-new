'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSpinner, FaCheckCircle } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccessMessage('Your message has been sent. We will get back to you soon!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrors({
        form: 'Failed to send your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Get in touch with our friendly team.
            </p>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-blue-600 text-white p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8 text-blue-100">
                  We're here to help with any questions about travel mates, 
                  flight companions, or assistance with using our platform.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="mt-1 h-6 w-6 text-blue-200" />
                    </div>
                    <div className="ml-3 text-blue-100">
                      <p className="font-medium text-white">Our Location</p>
                      <p>123 SkyMates Avenue, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaPhone className="mt-1 h-6 w-6 text-blue-200" />
                    </div>
                    <div className="ml-3 text-blue-100">
                      <p className="font-medium text-white">Phone</p>
                      <p>+977 1 4123456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaEnvelope className="mt-1 h-6 w-6 text-blue-200" />
                    </div>
                    <div className="ml-3 text-blue-100">
                      <p className="font-medium text-white">Email</p>
                      <p>support@skymates.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-white mb-4">Operating Hours</h3>
                  <div className="space-y-2 text-blue-100">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {successMessage ? (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-green-800">Message sent!</h3>
                        <div className="mt-2 text-green-700">
                          <p>{successMessage}</p>
                        </div>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setSuccessMessage('')}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            Send another message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errors.form && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded">
                        {errors.form}
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 border ${
                            errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 border ${
                            errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <div className="mt-1">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 border ${
                            errors.subject ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                          } rounded-md shadow-sm focus:outline-none focus:ring-2`}
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Billing Question">Billing Question</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="Report a Problem">Report a Problem</option>
                        </select>
                      </div>
                      {errors.subject && (
                        <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 border ${
                            errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2`}
                          placeholder="Please describe your question or issue in detail..."
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin -ml-1 mr-2 h-4 w-4" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            
            <dl className="space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  How does SkyMates work?
                </dt>
                <dd className="mt-2 text-gray-600">
                  SkyMates connects travelers who need assistance during their journey with fellow travelers or companions who are flying on the same route. Users can create listings for themselves or their loved ones who need travel companions, and interested helpers can contact them through our platform.
                </dd>
              </div>
              
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Is SkyMates free to use?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Basic listings and searches are free. We offer premium features for verified members who need additional support or priority matching services.
                </dd>
              </div>
              
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  How do you ensure safety and trust?
                </dt>
                <dd className="mt-2 text-gray-600">
                  We implement a robust verification process for all users, including identity verification, background checks for premium members, and a review system that allows users to rate their experiences.
                </dd>
              </div>
              
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Can I find travel companions for elderly family members?
                </dt>
                <dd className="mt-2 text-gray-600">
                  Absolutely! Many of our users find travel companions for their elderly parents or grandparents who need assistance during international flights. You can create a listing specifying the exact needs and requirements for your family member.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 