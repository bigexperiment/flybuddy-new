'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaUser, 
  FaPlane, 
  FaCalendarAlt, 
  FaPencilAlt, 
  FaTrash, 
  FaEye, 
  FaPlus, 
  FaSignOutAlt,
  FaCog,
  FaBell,
  FaChartBar,
  FaListUl,
  FaEnvelope,
  FaPhoneAlt,
  FaClock
} from 'react-icons/fa';

type TravelMate = {
  id: string;
  name: string;
  from: string;
  to: string;
  departureDate: string;
  status: 'active' | 'expired' | 'pending';
  viewCount: number;
  contactCount: number;
};

type Message = {
  id: string;
  sender: string;
  preview: string;
  date: string;
  read: boolean;
  profilePic: string;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'listings' | 'messages' | 'profile'>('listings');
  
  // Sample data - in a real app, this would come from an API
  const myListings: TravelMate[] = [
    {
      id: '1',
      name: 'My Grandmother',
      from: 'Kathmandu, Nepal',
      to: 'New York, USA',
      departureDate: '2023-12-15',
      status: 'active',
      viewCount: 24,
      contactCount: 3
    },
    {
      id: '2',
      name: 'My Father',
      from: 'Pokhara, Nepal',
      to: 'London, UK',
      departureDate: '2023-11-28',
      status: 'expired',
      viewCount: 12,
      contactCount: 1
    },
    {
      id: '3',
      name: 'Myself as Travel Mate',
      from: 'Kathmandu, Nepal',
      to: 'Sydney, Australia',
      departureDate: '2024-01-10',
      status: 'pending',
      viewCount: 5,
      contactCount: 0
    }
  ];

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Rajesh Sharma',
      preview: 'Hello, I am interested in being a travel companion for your grandmother...',
      date: '2023-11-10',
      read: false,
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: '2',
      sender: 'Anita Gurung',
      preview: 'I will be traveling on the same flight to London and would be happy to...',
      date: '2023-11-08',
      read: true,
      profilePic: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: '3',
      sender: 'SkyMates Support',
      preview: 'Thank you for using SkyMates! We noticed you have a listing that is about to...',
      date: '2023-11-05',
      read: true,
      profilePic: '/logo.png'
    }
  ];

  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Status badge component
  const StatusBadge = ({ status }: { status: TravelMate['status'] }) => {
    const badgeClasses = {
      active: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClasses[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-gray-800">Dashboard</h2>
            </div>
            <div className="p-2">
              <button 
                onClick={() => setActiveTab('listings')} 
                className={`w-full text-left py-2 px-4 rounded-md flex items-center gap-3 ${
                  activeTab === 'listings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaListUl className={activeTab === 'listings' ? 'text-blue-600' : 'text-gray-500'} />
                My Listings
              </button>
              
              <button 
                onClick={() => setActiveTab('messages')} 
                className={`w-full text-left py-2 px-4 rounded-md flex items-center gap-3 ${
                  activeTab === 'messages' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaEnvelope className={activeTab === 'messages' ? 'text-blue-600' : 'text-gray-500'} />
                Messages 
                {messages.filter(m => !m.read).length > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {messages.filter(m => !m.read).length}
                  </span>
                )}
              </button>
              
              <Link 
                href="/dashboard/profile" 
                className="w-full text-left py-2 px-4 rounded-md flex items-center gap-3 text-gray-700 hover:bg-gray-50"
              >
                <FaUser className="text-gray-500" />
                Profile Settings
              </Link>
              
              <Link 
                href="/dashboard/statistics" 
                className="w-full text-left py-2 px-4 rounded-md flex items-center gap-3 text-gray-700 hover:bg-gray-50"
              >
                <FaChartBar className="text-gray-500" />
                Statistics
              </Link>
              
              <Link 
                href="/dashboard/notifications" 
                className="w-full text-left py-2 px-4 rounded-md flex items-center gap-3 text-gray-700 hover:bg-gray-50"
              >
                <FaBell className="text-gray-500" />
                Notifications
                {messages.filter(m => !m.read).length > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    2
                  </span>
                )}
              </Link>
              
              <Link 
                href="/dashboard/settings" 
                className="w-full text-left py-2 px-4 rounded-md flex items-center gap-3 text-gray-700 hover:bg-gray-50"
              >
                <FaCog className="text-gray-500" />
                Settings
              </Link>
              
              <div className="border-t my-2 pt-2">
                <Link 
                  href="/logout" 
                  className="w-full text-left py-2 px-4 rounded-md flex items-center gap-3 text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt className="text-red-500" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 shadow-md rounded-lg p-6">
            <h3 className="font-semibold mb-2 text-blue-800">Need Help?</h3>
            <p className="text-sm text-blue-700 mb-4">
              Our support team is always available to assist you with any questions.
            </p>
            <Link 
              href="/contact" 
              className="text-blue-600 text-sm hover:underline flex items-center gap-2"
            >
              Contact Support <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-3/4">
          {/* Listings Tab */}
          {activeTab === 'listings' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">My Travel Mate Listings</h2>
                
                <Link 
                  href="/dashboard/create" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaPlus size={14} /> Add New Listing
                </Link>
              </div>
              
              {myListings.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <FaPlane className="text-gray-300 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Listings Yet</h3>
                  <p className="text-gray-600 mb-6">
                    You haven't added any travel mate listings yet. Add your first one to get started.
                  </p>
                  <Link 
                    href="/add" 
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    <FaPlus size={14} /> Add Travel Mate
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{listing.name}</h3>
                            <p className="text-gray-600 flex items-center">
                              <FaPlane className="mr-2 text-blue-600" size={14} />
                              {listing.from} to {listing.to}
                            </p>
                          </div>
                          <StatusBadge status={listing.status} />
                        </div>
                        
                        <div className="flex flex-wrap gap-y-4 justify-between">
                          <div className="flex items-center space-x-6">
                            <div>
                              <span className="block text-gray-500 text-sm">Departure</span>
                              <span className="flex items-center text-gray-700">
                                <FaCalendarAlt className="mr-1 text-blue-600" size={14} />
                                {formatDate(listing.departureDate)}
                              </span>
                            </div>
                            <div>
                              <span className="block text-gray-500 text-sm">Views</span>
                              <span className="flex items-center text-gray-700">
                                <FaEye className="mr-1 text-blue-600" size={14} />
                                {listing.viewCount}
                              </span>
                            </div>
                            <div>
                              <span className="block text-gray-500 text-sm">Contacts</span>
                              <span className="flex items-center text-gray-700">
                                <FaUser className="mr-1 text-blue-600" size={14} />
                                {listing.contactCount}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Link 
                              href={`/travel-mates/${listing.id}`}
                              className="p-2 text-blue-600 rounded hover:bg-blue-50"
                              title="View"
                            >
                              <FaEye />
                            </Link>
                            <Link 
                              href={`/dashboard/edit/${listing.id}`}
                              className="p-2 text-yellow-600 rounded hover:bg-yellow-50"
                              title="Edit"
                            >
                              <FaPencilAlt />
                            </Link>
                            <button 
                              className="p-2 text-red-600 rounded hover:bg-red-50"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Messages</h1>
              
              {messages.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <FaBell className="text-gray-300 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Messages Yet</h3>
                  <p className="text-gray-600">
                    You don't have any messages yet. Messages from interested travel mates will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${
                        message.read ? 'border-gray-200' : 'border-blue-500'
                      }`}
                    >
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image 
                              src={message.profilePic}
                              alt={message.sender}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between mb-1">
                              <h3 className="font-semibold">{message.sender}</h3>
                              <span className="text-gray-500 text-sm">{formatDate(message.date)}</span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {message.preview}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Link 
                            href={`/dashboard/messages/${message.id}`}
                            className="text-blue-600 text-sm hover:underline flex items-center"
                          >
                            Read Full Message <span className="ml-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                        <Image 
                          src="https://randomuser.me/api/portraits/men/22.jpg"
                          alt="User Profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700">
                        <FaPencilAlt size={14} />
                      </button>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Binod Adhikari</h2>
                      <p className="text-gray-600">binod.adhikari@example.com</p>
                      <p className="text-gray-500 text-sm mt-1">Member since October 2023</p>
                    </div>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          defaultValue="Binod"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          defaultValue="Adhikari"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue="binod.adhikari@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        defaultValue="+977 9841234567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio (visible to others)
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        rows={4}
                        defaultValue="I'm a frequent traveler between Nepal and the US. I'm happy to help elderly travelers who need assistance during international flights."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="emailNotifications"
                            name="emailNotifications"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="emailNotifications" className="ml-3 text-gray-700">
                            Email notifications for new messages
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="smsNotifications"
                            name="smsNotifications"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="smsNotifications" className="ml-3 text-gray-700">
                            SMS notifications for urgent updates
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 