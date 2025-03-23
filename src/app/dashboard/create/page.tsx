'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaArrowLeft, 
  FaPlus, 
  FaSave, 
  FaCamera,
  FaPlane,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInfoCircle,
  FaUser
} from 'react-icons/fa';

export default function CreateTravelMatePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Travel Mate form state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    languages: '',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    email: '',
    phone: '',
    bio: '',
    additionalInfo: '',
    preferredAirline: '',
    flightNumber: '',
    accommodationNeeds: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  
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
  
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = 'Age must be a valid number';
    }
    
    if (!formData.from.trim()) {
      newErrors.from = 'Origin location is required';
    }
    
    if (!formData.to.trim()) {
      newErrors.to = 'Destination is required';
    }
    
    if (!formData.departureDate.trim()) {
      newErrors.departureDate = 'Departure date is required';
    }
    
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = 'Either email or phone number is required';
      newErrors.phone = 'Either email or phone number is required';
    }
    
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccessMessage('Travel mate listing created successfully!');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        age: '',
        gender: 'male',
        languages: '',
        from: '',
        to: '',
        departureDate: '',
        returnDate: '',
        email: '',
        phone: '',
        bio: '',
        additionalInfo: '',
        preferredAirline: '',
        flightNumber: '',
        accommodationNeeds: ''
      });
      setPreviewImage(null);
      
      // Clear success message after 3 seconds and redirect to listings
      setTimeout(() => {
        setSuccessMessage('');
        window.location.href = '/dashboard';
      }, 3000);
    } catch (error) {
      console.error('Failed to create travel mate listing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaPlus className="text-blue-600" /> Add New Travel Mate Listing
          </h1>
        </div>
        
        {/* Success message */}
        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">{successMessage}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Create Travel Mate Listing</h2>
            <p className="mt-1 text-gray-500">
              Fill out the form below to create a new travel mate listing. Fields marked with * are required.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {/* Profile Image */}
            <div className="flex flex-col items-center mb-8">
              <div 
                className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200 mb-4 cursor-pointer"
                onClick={handleImageClick}
              >
                {previewImage ? (
                  <Image 
                    src={previewImage}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-100">
                    <FaUser className="text-gray-400 text-4xl" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <FaCamera className="text-white text-2xl" />
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageChange}
              />
              <button 
                type="button" 
                className="text-blue-600 text-sm"
                onClick={handleImageClick}
              >
                Upload Profile Photo
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <FaUser className="text-gray-500" /> Basic Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age*
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.age ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="Your age"
                    />
                    {errors.age && (
                      <p className="mt-1 text-sm text-red-600">{errors.age}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">
                      Languages (comma separated)
                    </label>
                    <input
                      type="text"
                      id="languages"
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="English, Spanish, French"
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <FaEnvelope className="text-gray-500" /> Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="+1 234 567 8900"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Travel Details */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <FaPlane className="text-gray-500" /> Travel Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                    From (Origin)*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      className={`w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.from ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="City, Country"
                    />
                  </div>
                  {errors.from && (
                    <p className="mt-1 text-sm text-red-600">{errors.from}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                    To (Destination)*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="to"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      className={`w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.to ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="City, Country"
                    />
                  </div>
                  {errors.to && (
                    <p className="mt-1 text-sm text-red-600">{errors.to}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Departure Date*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className={`w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.departureDate ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                  {errors.departureDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.departureDate}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Return Date (optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-gray-500" /> Additional Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio / About Me
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell others about yourself and your travel preferences..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredAirline" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Airline (optional)
                    </label>
                    <input
                      type="text"
                      id="preferredAirline"
                      name="preferredAirline"
                      value={formData.preferredAirline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Emirates, Qatar Airways"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Flight Number (optional)
                    </label>
                    <input
                      type="text"
                      id="flightNumber"
                      name="flightNumber"
                      value={formData.flightNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. EK551"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="accommodationNeeds" className="block text-sm font-medium text-gray-700 mb-1">
                    Accommodation Needs (optional)
                  </label>
                  <textarea
                    id="accommodationNeeds"
                    name="accommodationNeeds"
                    value={formData.accommodationNeeds}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any specific needs regarding accommodation?"
                  />
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information (optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any other details you'd like to share about your trip..."
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Creating...' : (
                  <>
                    <FaPlus size={14} /> Create Listing
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 