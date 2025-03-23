'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const [countdown, setCountdown] = useState(3);
  const { signOut } = useClerk();
  const router = useRouter();
  
  useEffect(() => {
    // Perform logout with Clerk
    const performLogout = async () => {
      try {
        // Call Clerk's signOut method
        await signOut();
        
        // Start countdown for redirection
        const timer = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              // Redirect to home page
              router.push('/');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        return () => clearInterval(timer);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };
    
    performLogout();
  }, [signOut, router]);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="SkyMates Logo" 
              width={120} 
              height={40} 
              className="mx-auto"
            />
          </Link>
          <div className="mt-6 flex justify-center">
            <FaCheckCircle className="text-green-500 text-5xl" />
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            You've been logged out
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Thank you for using SkyMates. You have been successfully logged out.
          </p>
          <p className="mt-4 text-center text-sm text-gray-500">
            Redirecting to homepage in {countdown} seconds...
          </p>
          <div className="mt-6">
            <Link 
              href="/" 
              className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 