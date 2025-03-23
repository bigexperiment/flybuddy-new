'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp, FaSearch, FaArrowLeft } from 'react-icons/fa';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'account' | 'booking' | 'safety' | 'payment';
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  
  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What is SkyMates?',
      answer: 'SkyMates is a platform that connects travelers who need assistance during their journey with fellow travelers or companions who are flying on the same route. Our service is particularly designed to help elderly Nepali travelers connect with companions who speak their language and understand their culture.',
      category: 'general'
    },
    {
      id: 2,
      question: 'How does SkyMates work?',
      answer: 'SkyMates works in three simple steps: 1) Create a listing for yourself or a loved one who needs travel assistance, detailing your travel plans and specific needs. 2) Browse potential travel companions who are flying on similar routes, or wait for interested helpers to contact you. 3) Connect and arrange details through our secure messaging system, and travel with peace of mind.',
      category: 'general'
    },
    {
      id: 3,
      question: 'Is SkyMates free to use?',
      answer: 'Basic listings and searches on SkyMates are free. We offer premium features for verified members who need additional support or priority matching services. These premium features include enhanced visibility for your listings, priority support, and advanced filtering options.',
      category: 'payment'
    },
    {
      id: 4,
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Login" button in the top right corner of our homepage, then select "Sign Up". You\'ll need to provide your email address and create a password. We also recommend completing your profile with additional information to help build trust with potential travel companions.',
      category: 'account'
    },
    {
      id: 5,
      question: 'How do you ensure safety and trust?',
      answer: 'We implement several measures to promote safety and trust: 1) User verification through ID and contact information. 2) Review and rating system for past travel companions. 3) Secure messaging system within our platform. 4) Guidelines for safe meetings and arrangements. 5) Customer support team to handle any concerns or disputes. However, we always recommend using your best judgment and following our safety guidelines when arranging travel assistance.',
      category: 'safety'
    },
    {
      id: 6,
      question: 'Can I find travel companions for my elderly parents or grandparents?',
      answer: 'Absolutely! Many of our users find travel companions for elderly family members who need assistance during international flights. You can create a listing on behalf of your family member, specifying their needs, language preferences, and travel details. You\'ll be able to communicate with potential companions through our platform before making arrangements.',
      category: 'booking'
    },
    {
      id: 7,
      question: 'What information should I include in my listing?',
      answer: 'For the most effective listing, include: 1) Travel details (origin, destination, dates, airlines if known). 2) Specific assistance needed (language translation, mobility assistance, etc.). 3) A brief description of the traveler (age, languages spoken). 4) Any relevant medical information that a companion should be aware of. 5) Preferences for a travel companion (gender, age, language skills).',
      category: 'booking'
    },
    {
      id: 8,
      question: 'How far in advance should I post my travel needs?',
      answer: 'We recommend posting your travel needs at least 2-4 weeks before your departure date to have the best chance of finding a suitable travel companion. However, last-minute matches are sometimes possible, especially on popular routes.',
      category: 'booking'
    },
    {
      id: 9,
      question: 'How do I pay for premium features?',
      answer: 'Premium features can be purchased through our secure payment system. We accept major credit cards and PayPal. You can upgrade your account from your dashboard by clicking on "Upgrade to Premium" and following the payment instructions.',
      category: 'payment'
    },
    {
      id: 10,
      question: 'What should I do if I have a problem with a travel companion?',
      answer: 'If you encounter any issues with a travel companion, please contact our support team immediately through the "Help" section in your dashboard or by emailing support@skymates.com. We take all reports seriously and will investigate the matter to help resolve any concerns.',
      category: 'safety'
    },
    {
      id: 11,
      question: 'Can I cancel my listing or arrangement?',
      answer: 'Yes, you can cancel your listing at any time from your dashboard. If you\'ve already made arrangements with a travel companion, we encourage you to communicate with them directly through our messaging system to let them know about the cancellation. For premium listings, our cancellation policy is outlined in the terms of service.',
      category: 'booking'
    },
    {
      id: 12,
      question: 'Is my personal information secure?',
      answer: 'We take data security seriously and implement industry-standard measures to protect your personal information. Your contact details are only shared with another user when you explicitly agree to connect with them. For more details, please review our Privacy Policy.',
      category: 'safety'
    },
    {
      id: 13,
      question: 'How do I delete my account?',
      answer: 'You can delete your account by going to your account settings in the dashboard, scrolling to the bottom and selecting "Delete Account". Please note that this action is permanent and will remove all your data from our system. If you have any active listings or arrangements, you should address these before deleting your account.',
      category: 'account'
    },
    {
      id: 14,
      question: 'Is there a mobile app for SkyMates?',
      answer: 'Currently, SkyMates is available as a web application optimized for both desktop and mobile browsers. We are developing native mobile apps for iOS and Android, which will be available in the near future. We\'ll announce the launch of our mobile apps on our website and through email newsletters.',
      category: 'general'
    },
    {
      id: 15,
      question: 'Can I use SkyMates for international flights?',
      answer: 'Yes, SkyMates is specifically designed to help with international flights, particularly for connecting elderly Nepali travelers with companions who understand their language and culture. Our service is available for flights between any international destinations, though the availability of companions may vary by route.',
      category: 'general'
    }
  ];
  
  const toggleFaq = (id: number) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'account', name: 'Account' },
    { id: 'booking', name: 'Booking' },
    { id: 'safety', name: 'Safety' },
    { id: 'payment', name: 'Payment' }
  ];
  
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about SkyMates and how our platform can help connect travelers with companions.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-10">
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category.id
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-600">No questions found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {filteredFaqs.map((faq) => (
                  <li key={faq.id} className="px-4 py-6 sm:p-6">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-start text-left"
                    >
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <span className="ml-6 flex-shrink-0">
                        {openFaqs.includes(faq.id) ? (
                          <FaChevronUp className="h-5 w-5 text-blue-500" />
                        ) : (
                          <FaChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </span>
                    </button>
                    {openFaqs.includes(faq.id) && (
                      <div className="mt-4 text-base text-gray-600 prose max-w-none">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Still Have Questions */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
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