'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsOfServicePage() {
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
                <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
                <span className="text-sm text-gray-500">Last updated: November 25, 2023</span>
              </div>
              
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600">
                  Welcome to SkyMates. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read these Terms of Service carefully before using our platform.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing or using the SkyMates platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. Description of Services</h2>
                <p className="text-gray-600">
                  SkyMates is a platform designed to connect travelers who need assistance with companions who are traveling on similar routes. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Creating and browsing travel mate listings</li>
                  <li>Messaging between users to arrange travel assistance</li>
                  <li>User profiles and verification services</li>
                  <li>Reviews and testimonials</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. User Accounts</h2>
                <p className="text-gray-600">
                  To use certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="text-gray-600 mt-2">
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. User Content</h2>
                <p className="text-gray-600">
                  By submitting content to SkyMates, including but not limited to travel mate listings, profile information, messages, and reviews, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and display such content in connection with providing our services.
                </p>
                <p className="text-gray-600 mt-2">
                  You agree not to post content that:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Is false, misleading, or deceptive</li>
                  <li>Is defamatory, obscene, or offensive</li>
                  <li>Infringes on the rights of others</li>
                  <li>Promotes illegal activities</li>
                  <li>Contains malware or phishing content</li>
                  <li>Violates any applicable laws or regulations</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">5. Rules of Conduct</h2>
                <p className="text-gray-600">
                  When using SkyMates, you agree to:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Provide accurate information in your profile and listings</li>
                  <li>Respect the privacy and rights of other users</li>
                  <li>Use the messaging system appropriately and respectfully</li>
                  <li>Not use our platform for any illegal or unauthorized purpose</li>
                  <li>Not create multiple accounts for deceptive or malicious purposes</li>
                  <li>Not attempt to access data not intended for you</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">6. Safety Guidelines</h2>
                <p className="text-gray-600">
                  While SkyMates strives to create a safe platform, we cannot guarantee the conduct of users. For your safety, we recommend:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li>Verifying the identity of travel companions before meeting</li>
                  <li>Meeting in public places for initial discussions</li>
                  <li>Informing friends or family about your travel plans</li>
                  <li>Trusting your instincts and reporting any suspicious behavior</li>
                  <li>Reviewing our safety guidelines before arranging travel assistance</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">7. Fees and Payments</h2>
                <p className="text-gray-600">
                  Basic use of SkyMates is free. Premium features may require payment according to our current pricing structure. All fees are non-refundable unless otherwise stated.
                </p>
                <p className="text-gray-600 mt-2">
                  We reserve the right to modify our fees at any time. Changes to fees will be posted on our website and will take effect immediately for new users, and 30 days after notification for existing users.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">8. Intellectual Property</h2>
                <p className="text-gray-600">
                  The SkyMates name, logo, website, and all content and software associated with our services are protected by copyright, trademark, and other intellectual property laws. You may not use, copy, modify, or distribute any of our intellectual property without our explicit permission.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">9. Disclaimer of Warranties</h2>
                <p className="text-gray-600">
                  SkyMates is provided "as is" without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any content or communications on our platform. We do not verify the identity or background of all users and cannot guarantee their trustworthiness.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">10. Limitation of Liability</h2>
                <p className="text-gray-600">
                  In no event shall SkyMates, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                </p>
                <p className="text-gray-600 mt-2">
                  Our liability is limited to the maximum extent permitted by law. In jurisdictions that do not allow the exclusion or limitation of liability for consequential or incidental damages, our liability is limited to the greatest extent permitted by law.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">11. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless SkyMates and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses (including reasonable attorney's fees) arising from your use of our services, your content, or your violation of these Terms of Service.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">12. Termination</h2>
                <p className="text-gray-600">
                  We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">13. Modifications to Terms</h2>
                <p className="text-gray-600">
                  We may modify these Terms of Service at any time. We will notify users of significant changes through our website or by email. Your continued use of SkyMates after such modifications constitutes your acceptance of the revised terms.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">14. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in Kathmandu, Nepal for the resolution of any disputes.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">15. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="list-none pl-6 mt-2 mb-4 text-gray-600 space-y-2">
                  <li><strong>Email:</strong> terms@skymates.com</li>
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