"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlane, FaTimes, FaUser } from 'react-icons/fa';
import { useAuth, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoaded, userId } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaPlane className="text-blue-600 text-2xl" />
            <Link href="/" className="text-xl font-bold text-blue-600">
              SkyMates.co
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/travel-mates" className="text-gray-600 hover:text-blue-600 font-medium">
              Find Mates
            </Link>
            <Link href="/add" className="text-gray-600 hover:text-blue-600 font-medium">
              Add Travel Mate
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 font-medium">
              Testimonials
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 font-medium">
              FAQs
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact
            </Link>
            
            <SignedIn>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <Link 
                href="/login" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
              >
                Login
              </Link>
            </SignedOut>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4">
            <div className="flex flex-col gap-4 text-center">
              <Link 
                href="/" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/travel-mates" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Mates
              </Link>
              <Link 
                href="/add" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Add Travel Mate
              </Link>
              <Link 
                href="/testimonials" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/blog" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/faqs" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <SignedIn>
                <Link 
                  href="/dashboard" 
                  className="px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <div className="flex justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              
              <SignedOut>
                <Link 
                  href="/login" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 