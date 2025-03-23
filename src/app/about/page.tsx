'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaUsers, FaGlobe, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              About SkyMates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connecting travelers with companions who care
            </p>
          </div>
          
          {/* Our Story */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600">
                  SkyMates was born from a personal experience that many Nepali families share. In 2019, 
                  our founder's elderly grandmother needed to travel from Kathmandu to New York to visit 
                  her family. Unable to travel alone due to language barriers and mobility issues, she 
                  needed assistance, but family members couldn't take time off to accompany her on the long journey.
                </p>
                <p className="text-gray-600 mt-4">
                  After searching online forums and community groups, the family found a young Nepali 
                  student who was traveling on the same route and was willing to help. This informal 
                  arrangement worked beautifully – the grandmother received the assistance she needed, 
                  and the student had a meaningful experience while helping someone from their culture.
                </p>
                <p className="text-gray-600 mt-4">
                  This experience highlighted a gap: there was no dedicated platform to connect travelers 
                  who need assistance with willing companions traveling the same route. SkyMates was 
                  founded to fill this gap, initially focusing on the Nepali community where language and 
                  cultural barriers can make international travel particularly challenging for older adults.
                </p>
                <p className="text-gray-600 mt-4">
                  Since our launch in 2021, we've helped hundreds of travelers find companions for their 
                  journeys, creating a community of helpers that spans the globe. What started as a 
                  solution for one family has grown into a platform that serves Nepali travelers worldwide, 
                  with plans to expand to other communities facing similar challenges.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To create a trusted community that connects travelers who need assistance with 
                  compassionate companions, making international travel accessible, safe, and 
                  stress-free for everyone, regardless of age, language barriers, or physical limitations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a world where no one has to miss out on visiting loved ones or 
                  exploring new places due to travel anxiety or assistance needs. We aim to 
                  build bridges between generations and cultures, creating meaningful connections 
                  through travel companionship.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaUsers className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Community</h3>
                    <p className="mt-2 text-gray-600">
                      We believe in the power of community to solve challenges. Our platform 
                      harnesses the goodwill and shared cultural connections that naturally 
                      exist within communities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaHandsHelping className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Compassion</h3>
                    <p className="mt-2 text-gray-600">
                      At the heart of every travel assistance arrangement is compassion - 
                      the desire to help others navigate challenges that we understand 
                      through shared cultural experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaShieldAlt className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Trust & Safety</h3>
                    <p className="mt-2 text-gray-600">
                      We prioritize creating a secure environment where families can 
                      confidently arrange travel assistance, with verification processes 
                      that protect all users.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaGlobe className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Accessibility</h3>
                    <p className="mt-2 text-gray-600">
                      We believe travel should be accessible to everyone. Through technology 
                      and human connection, we break down barriers that prevent people from 
                      experiencing the joy of reuniting with loved ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-600 mb-8">
                SkyMates is led by a passionate team with deep connections to Nepal and personal 
                experiences with the challenges of international travel for family members.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mx-auto w-32 h-32 relative mb-4">
                    <Image 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Founder" 
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Raj Sharma</h3>
                  <p className="text-blue-600">Founder & CEO</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Former project manager with a passion for solving community challenges through technology.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-32 h-32 relative mb-4">
                    <Image 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Co-Founder" 
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Meera Patel</h3>
                  <p className="text-blue-600">Co-Founder & COO</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Background in healthcare administration with expertise in creating safe service environments.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-32 h-32 relative mb-4">
                    <Image 
                      src="https://randomuser.me/api/portraits/men/45.jpg" 
                      alt="CTO" 
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Anil Gurung</h3>
                  <p className="text-blue-600">CTO</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Software engineer with over 10 years of experience building community-focused applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Join Us */}
          <div className="bg-blue-50 rounded-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're looking for travel assistance or willing to help others on your journey, 
              SkyMates welcomes you to our community of travelers who care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Sign Up Today
              </Link>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
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