import React from 'react';
import Link from 'next/link';
import { FaPlane, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaPlane className="text-blue-600 text-2xl" />
              <span className="text-xl font-bold text-blue-600">SkyMates.co</span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting elderly Nepali travelers with compassionate companions who share their language and culture.
            </p>
            <div className="mt-4 flex items-center text-gray-600 text-sm">
              <FaHeart className="text-red-500 mr-2" />
              <span>Made with love for the Nepali community</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/travel-mates" className="text-gray-600 hover:text-blue-600 text-sm">
                  Find Mates
                </Link>
              </li>
              <li>
                <Link href="/add" className="text-gray-600 hover:text-blue-600 text-sm">
                  Add Travel Mate
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 text-sm">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="mb-2">
                <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-500" />
                <a href="mailto:skymatesco@gmail.com" className="text-gray-600 hover:text-blue-600 text-sm">
                  skymatesco@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-500" />
                <a href="tel:+17144859360" className="text-gray-600 hover:text-blue-600 text-sm">
                  +1 714-485-9360
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Hours: Monday-Friday, 9AM-5PM (Nepal Time)
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Skymates.co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 