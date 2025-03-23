'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { FaArrowLeft, FaSave, FaTrash, FaExclamationTriangle } from 'react-icons/fa';

type TravelMate = {
  id: string;
  name: string;
  age: number;
  gender: string;
  languages: string[];
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  profileImage: string;
  email: string;
  phone: string;
  bio: string;
  additionalInfo: string;
  preferredAirline?: string;
  flightNumber?: string;
  accommodationNeeds?: string;
};

// In a real app, this would come from an API call
const getTravelMateById = (id: string): TravelMate | undefined => {
  const travelMates: TravelMate[] = [
    {
      id: '1',
      name: 'My Grandmother',
      age: 72,
      gender: 'Female',
      languages: ['Nepali', 'Basic English'],
      from: 'Kathmandu, Nepal',
      to: 'New York, USA',
      departureDate: '2023-12-15',
      profileImage: 'https://randomuser.me/api/portraits/women/65.jpg',
      email: 'contact@example.com',
      phone: '+977 9841234567',
      bio: 'My grandmother is traveling to visit family in New York. She has difficulty with English and would appreciate assistance with navigation and translation.',
      additionalInfo: 'She has mild arthritis and may need help with carrying luggage. She also has medication that needs to be taken at specific times.',
      preferredAirline: 'Qatar Airways',
      flightNumber: 'QR657',
      accommodationNeeds: 'None - family will pick her up at the airport'
    },
    {
      id: '2',
      name: 'My Father',
      age: 65,
      gender: 'Male',
      languages: ['Nepali', 'Hindi'],
      from: 'Pokhara, Nepal',
      to: 'London, UK',
      departureDate: '2023-11-28',
      returnDate: '2024-02-10',
      profileImage: 'https://randomuser.me/api/portraits/men/72.jpg',
      email: 'contact@example.com',
      phone: '+977 9807654321',
      bio: 'My father is traveling to London for medical treatment. This will be his first international trip, and he is nervous about the journey.',
      additionalInfo: 'He is diabetic and needs to take insulin regularly. He would appreciate if someone could help him with airport procedures and translation.',
      preferredAirline: 'Turkish Airlines',
      flightNumber: 'TK1059'
    },
    {
      id: '3',
      name: 'Myself as Travel Mate',
      age: 35,
      gender: 'Male',
      languages: ['Nepali', 'English', 'Hindi'],
      from: 'Kathmandu, Nepal',
      to: 'Sydney, Australia',
      departureDate: '2024-01-10',
      returnDate: '2024-01-25',
      profileImage: 'https://randomuser.me/api/portraits/men/22.jpg',
      email: 'binod.adhikari@example.com',
      phone: '+977 9841234567',
      bio: 'I am a frequent traveler between Nepal and Australia. I am offering to help elderly Nepali travelers who need assistance during the journey.',
      additionalInfo: 'I am fluent in Nepali, English, and Hindi. I have helped several elderly travelers in the past and understand their needs.',
      preferredAirline: 'Singapore Airlines',
      flightNumber: 'SQ321'
    }
  ];

  return travelMates.find(mate => mate.id === id);
};

export default function EditTravelMatePage() {
  const params = useParams();
  const router = useRouter();
  const travelMateId = params.id as string;
  
  const [travelMate, setTravelMate] = useState<TravelMate | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    // In a real app, fetch from API
    const mate = getTravelMateById(travelMateId);
    
    if (mate) {
      setTravelMate(mate);
      setFormData({
        name: mate.name,
        age: mate.age,
        gender: mate.gender,
        languages: mate.languages.join(', '),
        from: mate.from,
        to: mate.to,
        departureDate: mate.departureDate,
        returnDate: mate.returnDate || '',
        email: mate.email,
        phone: mate.phone,
        bio: mate.bio,
        additionalInfo: mate.additionalInfo,
        preferredAirline: mate.preferredAirline || '',
        flightNumber: mate.flightNumber || '',
        accommodationNeeds: mate.accommodationNeeds || ''
      });
    }
    
    setLoading(false);
  }, [travelMateId]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev: Record<string, string>) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.age || formData.age < 1) newErrors.age = 'Valid age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.from) newErrors.from = 'Origin is required';
    if (!formData.to) newErrors.to = 'Destination is required';
    if (!formData.departureDate) newErrors.departureDate = 'Departure date is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.bio) newErrors.bio = 'Brief description is required';
    
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
        element.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      // await updateTravelMate(travelMateId, formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccessMessage('Travel mate details updated successfully!');
      
      // Redirect after showing success message
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Failed to update travel mate', error);
      setErrors({
        submit: 'Failed to update travel mate. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this travel mate listing? This action cannot be undone.')) {
      setIsSubmitting(true);
      
      try {
        // In a real app, this would be an API call
        // await deleteTravelMate(travelMateId);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        router.push('/dashboard');
      } catch (error) {
        console.error('Failed to delete travel mate', error);
        setErrors({
          submit: 'Failed to delete travel mate. Please try again.'
        });
        setIsSubmitting(false);
      }
    }
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">Loading travel mate details...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!travelMate) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Travel Mate Not Found</h1>
          <p className="text-gray-600 mb-6">The travel mate listing you are trying to edit does not exist or has been deleted.</p>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
        </div>
        
        {/* Form container */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold">Edit Travel Mate</h1>
            <p className="mt-2 text-blue-100">
              Update the details for your travel mate listing
            </p>
          </div>
          
          {successMessage && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 m-6">
              <div className="flex items-center">
                <div className="text-green-500">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">{successMessage}</p>
                </div>
              </div>
            </div>
          )}
          
          {errors.submit && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6">
              <div className="flex items-center">
                <div className="text-red-500">
                  <FaExclamationTriangle />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{errors.submit}</p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., My Grandmother"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    min="1"
                    max="120"
                  />
                  {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                </div>
                
                <div>
                  <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">
                    Languages *
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={formData.languages || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.languages ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., Nepali, Basic English"
                  />
                  {errors.languages && <p className="mt-1 text-sm text-red-600">{errors.languages}</p>}
                  <p className="mt-1 text-sm text-gray-500">Separate languages with commas</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold border-b pb-2 mt-8">Travel Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                    From *
                  </label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    value={formData.from || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.from ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., Kathmandu, Nepal"
                  />
                  {errors.from && <p className="mt-1 text-sm text-red-600">{errors.from}</p>}
                </div>
                
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                    To *
                  </label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    value={formData.to || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.to ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., New York, USA"
                  />
                  {errors.to && <p className="mt-1 text-sm text-red-600">{errors.to}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.departureDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.departureDate && <p className="mt-1 text-sm text-red-600">{errors.departureDate}</p>}
                </div>
                
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Return Date (if applicable)
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredAirline" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Airline
                  </label>
                  <input
                    type="text"
                    id="preferredAirline"
                    name="preferredAirline"
                    value={formData.preferredAirline || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Qatar Airways"
                  />
                </div>
                
                <div>
                  <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Flight Number
                  </label>
                  <input
                    type="text"
                    id="flightNumber"
                    name="flightNumber"
                    value={formData.flightNumber || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., QR657"
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-semibold border-b pb-2 mt-8">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., contact@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., +977 9841234567"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold border-b pb-2 mt-8">Additional Information</h2>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Description *
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  value={formData.bio || ''}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.bio ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Briefly describe the traveler and their needs..."
                />
                {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio}</p>}
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Include any medical conditions, special requirements, or other relevant details..."
                />
              </div>
              
              <div>
                <label htmlFor="accommodationNeeds" className="block text-sm font-medium text-gray-700 mb-1">
                  Accommodation Needs
                </label>
                <textarea
                  id="accommodationNeeds"
                  name="accommodationNeeds"
                  rows={2}
                  value={formData.accommodationNeeds || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special accommodation needs or arrangements..."
                />
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-between gap-4">
              <button
                type="button"
                onClick={handleDelete}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                <FaTrash size={14} /> Delete Listing
              </button>
              
              <div className="flex gap-4">
                <Link 
                  href="/dashboard"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Link>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : (
                    <>
                      <FaSave size={14} /> Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 