'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="SkyMates Logo" 
                width={150} 
                height={50} 
                className="mx-auto"
              />
            </Link>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                <span className="text-sm text-gray-500">Last updated: November 25, 2023</span>
              </div>
              
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600">
                  At SkyMates, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you use our website and services.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Information We Collect</h2>
                
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900">Personal Information</h3>
                <p className="text-gray-600">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Register for an account</li>
                  <li>Create or modify your profile</li>
                  <li>Post travel mate listings</li>
                  <li>Contact other users through our platform</li>
                  <li>Contact our customer support</li>
                  <li>Participate in promotions, surveys, or contests</li>
                </ul>
                <p className="text-gray-600">
                  This information may include your name, email address, phone number, profile picture, travel details, 
                  and other information you choose to provide.
                </p>
                
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900">Automatically Collected Information</h3>
                <p className="text-gray-600">
                  When you access our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Device information (browser type, IP address, device type)</li>
                  <li>Log information (access times, pages viewed)</li>
                  <li>Location information (with your consent)</li>
                  <li>Cookie data for analytics and functionality</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">How We Use Your Information</h2>
                <p className="text-gray-600">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Improving user experience</li>
                  <li>Facilitating matches between travelers and travel companions</li>
                  <li>Communicating with you about your account or transactions</li>
                  <li>Sending promotional emails and updates (you can opt out)</li>
                  <li>Monitoring and analyzing usage and trends</li>
                  <li>Protecting against unauthorized access and activity</li>
                  <li>Complying with legal obligations</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Sharing Your Information</h2>
                <p className="text-gray-600">
                  We may share information in the following situations:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li><strong>With Users:</strong> When you create a travel mate listing, certain information (name, travel details, etc.) will be visible to other users.</li>
                  <li><strong>With Service Providers:</strong> We may share information with third-party vendors who provide services on our behalf.</li>
                  <li><strong>For Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of all or part of our assets.</li>
                  <li><strong>With Your Consent:</strong> We may disclose information for any purpose with your consent.</li>
                  <li><strong>For Legal Purposes:</strong> We may disclose information to comply with applicable laws or respond to legal process.</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information from unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure,
                  so we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Your Privacy Rights</h2>
                <p className="text-gray-600">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict or object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p className="text-gray-600">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Children's Privacy</h2>
                <p className="text-gray-600">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you become aware that a child has provided us with personal information, 
                  please contact us so we can take steps to remove such information.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
                  Policy periodically for any changes.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="list-none pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li><strong>Email:</strong> privacy@skymates.com</li>
                  <li><strong>Address:</strong> 123 SkyMates Avenue, Kathmandu, Nepal</li>
                  <li><strong>Phone:</strong> +977 1 4123456</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
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