'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaQuoteLeft, FaStar } from 'react-icons/fa';

// Testimonial type definition
type Testimonial = {
  id: number;
  name: string;
  location: string;
  role: 'companion' | 'traveler' | 'family';
  stars: number;
  text: string;
  imageSrc: string;
  route?: string;
  date: string;
};

export default function TestimonialsPage() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState<'all' | 'companion' | 'traveler' | 'family'>('all');
  
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ramesh Shrestha",
      location: "Boston, USA",
      role: "family",
      stars: 5,
      text: "SkyMates helped my mother travel from Kathmandu to Boston with a kind student who was going to the same city. The peace of mind it gave our family was priceless. My mother, who doesn't speak English, was able to navigate the complex international journey with help from her companion. We are incredibly grateful for this service.",
      imageSrc: "https://randomuser.me/api/portraits/men/22.jpg",
      route: "Kathmandu to Boston",
      date: "January 2023"
    },
    {
      id: 2,
      name: "Sunita Thapa",
      location: "Sydney, Australia",
      role: "traveler",
      stars: 5,
      text: "At 72, traveling alone from Kathmandu to Sydney was daunting. Through SkyMates, I found a young woman who was returning to university in Australia. She helped me with airport navigation, translations, and even carried my bags. The journey was smooth and stress-free thanks to her help.",
      imageSrc: "https://randomuser.me/api/portraits/women/76.jpg",
      route: "Kathmandu to Sydney",
      date: "March 2023"
    },
    {
      id: 3,
      name: "Anish Gurung",
      location: "New York, USA",
      role: "companion",
      stars: 5,
      text: "I was traveling back to New York after visiting family in Nepal and decided to help an elderly gentleman going to visit his children. The experience was rewarding - I learned so much from his stories, and it felt good knowing I helped make his journey comfortable. Will definitely do this again!",
      imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
      route: "Kathmandu to New York",
      date: "February 2023"
    },
    {
      id: 4,
      name: "Puja Sharma",
      location: "Toronto, Canada",
      role: "family",
      stars: 4,
      text: "My grandfather needed to travel to Toronto for a family wedding. At 80, he was nervous about the long journey. Thanks to SkyMates, we found a medical student traveling the same route who was able to assist him. The entire process was seamless, and the companion was respectful and helpful.",
      imageSrc: "https://randomuser.me/api/portraits/women/45.jpg",
      route: "Kathmandu to Toronto",
      date: "May 2023"
    },
    {
      id: 5,
      name: "Dipak Tamang",
      location: "London, UK",
      role: "traveler",
      stars: 5,
      text: "After a health scare, my children insisted I shouldn't travel alone from Nepal to the UK. SkyMates connected me with a young professional who made the journey comfortable and safe. The service is a blessing for our community.",
      imageSrc: "https://randomuser.me/api/portraits/men/67.jpg",
      route: "Kathmandu to London",
      date: "April 2023"
    },
    {
      id: 6,
      name: "Nisha Rai",
      location: "Vancouver, Canada",
      role: "companion",
      stars: 5,
      text: "I helped an elderly couple travel from Kathmandu to Vancouver. Being able to assist them with translation, navigation, and just providing company during the long flights was incredibly fulfilling. The gratitude from their family upon arrival was heartwarming.",
      imageSrc: "https://randomuser.me/api/portraits/women/33.jpg",
      route: "Kathmandu to Vancouver",
      date: "June 2023"
    },
    {
      id: 7,
      name: "Bishnu Maharjan",
      location: "Dallas, USA",
      role: "traveler",
      stars: 4,
      text: "Finding a travel companion through SkyMates made my journey so much easier. My companion helped with translation during layovers and made sure I didn't miss my connecting flights. A wonderful service for our community.",
      imageSrc: "https://randomuser.me/api/portraits/men/78.jpg",
      route: "Kathmandu to Dallas",
      date: "July 2023"
    },
    {
      id: 8,
      name: "Laxmi Adhikari",
      location: "Melbourne, Australia",
      role: "family",
      stars: 5,
      text: "My mother was hesitant to travel alone to attend my graduation in Australia. SkyMates connected her with a nursing student traveling the same route. The companionship made her comfortable, and I was relieved knowing she had assistance throughout the journey.",
      imageSrc: "https://randomuser.me/api/portraits/women/65.jpg",
      route: "Kathmandu to Melbourne",
      date: "August 2023"
    },
  ];

  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.role === activeFilter);

  // Function to render star rating
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < count ? "text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  // Function to get role badge
  const getRoleBadge = (role: 'companion' | 'traveler' | 'family') => {
    switch(role) {
      case 'companion':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Travel Companion</span>;
      case 'traveler':
        return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Traveler</span>;
      case 'family':
        return <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Family Member</span>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="SkyMates Logo" 
                width={150} 
                height={50} 
                className="mx-auto mb-6"
              />
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Testimonials
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from our community of travelers and companions
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Stories
            </button>
            <button 
              onClick={() => setActiveFilter('traveler')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'traveler' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Travelers
            </button>
            <button 
              onClick={() => setActiveFilter('companion')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'companion' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Companions
            </button>
            <button 
              onClick={() => setActiveFilter('family')}
              className={`px-4 py-2 rounded-full ${
                activeFilter === 'family' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Family Members
            </button>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={testimonial.imageSrc} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.stars)}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    {getRoleBadge(testimonial.role)}
                    {testimonial.route && (
                      <span className="ml-2 text-gray-500 text-sm">
                        {testimonial.route} • {testimonial.date}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-gray-200 text-2xl absolute top-0 left-0" />
                    <p className="text-gray-600 pl-8 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Share your story CTA */}
          <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have you had a positive experience with SkyMates? We'd love to hear about it!
              Share your story to inspire others and help grow our community.
            </p>
            <Link 
              href="/contact?subject=My%20SkyMates%20Story" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Your Testimonial
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft className="mr-2" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 