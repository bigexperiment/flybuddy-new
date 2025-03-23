import React from 'react';
import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-3xl">
      <div className="bg-white rounded-lg shadow-md p-10">
        <h1 className="text-6xl font-bold text-blue-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        
        <div className="mb-8">
          <p className="text-gray-600 text-lg mb-2">
            Oops! We couldn't find the page you were looking for.
          </p>
          <p className="text-gray-500">
            The page may have been moved, deleted, or perhaps you mistyped the URL.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FaHome className="text-lg" />
            Return Home
          </Link>
          
          <Link 
            href="/travel-mates" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            <FaSearch className="text-lg" />
            Find Travel Mates
          </Link>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>
            Need assistance? Visit our{' '}
            <Link href="/faq" className="text-blue-600 hover:underline">
              FAQ
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
} 