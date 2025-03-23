'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

// Blog post type definition
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  category: 'travel-tips' | 'success-stories' | 'announcements' | 'community';
  date: string;
  imageSrc: string;
  slug: string;
};

export default function BlogPage() {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Tips for Helping Elderly Travelers Navigate International Airports",
      excerpt: "International travel can be overwhelming, especially for elderly travelers. Here are practical tips for helping elderly travelers navigate complex airport procedures and ensure a smooth journey.",
      author: "Aarav Sharma",
      category: "travel-tips",
      date: "January 15, 2023",
      imageSrc: "/images/blog/airport-assistance.jpg",
      slug: "tips-elderly-travelers-airports"
    },
    {
      id: 2,
      title: "How Kumari Helped Her 78-Year-Old Grandfather Travel to Australia",
      excerpt: "A heartwarming story of how a college student helped her grandfather travel from Kathmandu to Sydney, using SkyMates to find a companion for the portions of the journey she couldn't accompany him on.",
      author: "Priya Thapa",
      category: "success-stories",
      date: "February 3, 2023",
      imageSrc: "/images/blog/family-reunion.jpg",
      slug: "kumari-grandfather-australia-journey"
    },
    {
      id: 3,
      title: "SkyMates Celebrates 200 Successful Travel Pairings",
      excerpt: "We're thrilled to announce that SkyMates has successfully matched 200 travel companions since our launch. Learn about our journey and the impact we've made in the Nepali community.",
      author: "Raj Sharma",
      category: "announcements",
      date: "March 21, 2023",
      imageSrc: "/images/blog/celebration.jpg",
      slug: "skymates-200-travel-pairings"
    },
    {
      id: 4,
      title: "Essential Documents and Preparations for International Travel",
      excerpt: "A comprehensive checklist of documents and preparations needed for international travel, specifically tailored for Nepali travelers heading to Western countries.",
      author: "Anish Gurung",
      category: "travel-tips",
      date: "April 10, 2023",
      imageSrc: "/images/blog/travel-documents.jpg",
      slug: "essential-documents-international-travel"
    },
    {
      id: 5,
      title: "From Strangers to Friends: When Travel Companions Form Lasting Bonds",
      excerpt: "Stories from our community about the unexpected friendships that have formed through travel companionship, bridging generations and creating lasting connections.",
      author: "Sunita Rai",
      category: "community",
      date: "May 5, 2023",
      imageSrc: "/images/blog/friendship.jpg",
      slug: "strangers-to-friends-travel-companions"
    },
    {
      id: 6,
      title: "New Feature: In-App Messaging Launched",
      excerpt: "We're excited to announce the launch of our new in-app messaging feature, making it easier than ever to communicate with potential travel companions before and during your journey.",
      author: "Anil Gurung",
      category: "announcements",
      date: "June 18, 2023",
      imageSrc: "/images/blog/messaging-app.jpg",
      slug: "new-feature-in-app-messaging"
    },
    {
      id: 7,
      title: "Navigating Language Barriers: Communication Tips for International Travel",
      excerpt: "Practical advice for handling language barriers during international travel, including useful phrases, translation apps, and non-verbal communication strategies.",
      author: "Deepak Tamang",
      category: "travel-tips",
      date: "July 7, 2023",
      imageSrc: "/images/blog/language-barriers.jpg",
      slug: "navigating-language-barriers-travel"
    },
    {
      id: 8,
      title: "Community Spotlight: Meet Our Most Active Travel Companions",
      excerpt: "Highlighting members of our community who have gone above and beyond to help fellow travelers, with inspiring stories and personal interviews.",
      author: "Maya Shrestha",
      category: "community",
      date: "August 22, 2023",
      imageSrc: "/images/blog/community-spotlight.jpg",
      slug: "community-spotlight-active-companions"
    },
    {
      id: 9,
      title: "Supporting Elderly Parents Through Long-Haul Flights: A Guide for Families",
      excerpt: "A comprehensive guide for families to prepare their elderly parents for long international flights, including pre-travel health checks and in-flight comfort tips.",
      author: "Nirmala Adhikari",
      category: "travel-tips",
      date: "September 14, 2023",
      imageSrc: "/images/blog/elderly-flight-support.jpg",
      slug: "supporting-elderly-parents-flights"
    }
  ];

  // Filter blog posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'all' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Function to get category name for display
  const getCategoryDisplayName = (category: string) => {
    switch(category) {
      case 'travel-tips': return 'Travel Tips';
      case 'success-stories': return 'Success Stories';
      case 'announcements': return 'Announcements';
      case 'community': return 'Community';
      default: return category;
    }
  };

  // Function to get category badge color
  const getCategoryColorClass = (category: string) => {
    switch(category) {
      case 'travel-tips': return 'bg-blue-100 text-blue-800';
      case 'success-stories': return 'bg-green-100 text-green-800';
      case 'announcements': return 'bg-purple-100 text-purple-800';
      case 'community': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
              SkyMates Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stories, tips, and updates from our travel community
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Topics
            </button>
            <button 
              onClick={() => setActiveCategory('travel-tips')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'travel-tips' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Travel Tips
            </button>
            <button 
              onClick={() => setActiveCategory('success-stories')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'success-stories' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Success Stories
            </button>
            <button 
              onClick={() => setActiveCategory('announcements')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'announcements' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Announcements
            </button>
            <button 
              onClick={() => setActiveCategory('community')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'community' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Community
            </button>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Image: {post.imageSrc}</span>
                    </div>
                    {/* Uncomment when images are available
                    <Image 
                      src={post.imageSrc} 
                      alt={post.title} 
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  <div className="p-5 flex-grow">
                    <div className="flex items-center mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${getCategoryColorClass(post.category)}`}>
                        {getCategoryDisplayName(post.category)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-xs mt-auto">
                      <FaUser className="mr-1" /> 
                      <span className="mr-3">{post.author}</span>
                      <FaCalendarAlt className="mr-1" /> 
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No blog posts found matching your criteria.
              </p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest travel tips, success stories, and community updates.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
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