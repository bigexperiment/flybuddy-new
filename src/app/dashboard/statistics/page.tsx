'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaChartBar, 
  FaPlane, 
  FaUsers, 
  FaEye, 
  FaCalendarAlt,
  FaGlobe
} from 'react-icons/fa';

// Mock data - in a real app, this would come from an API
const getStatisticsData = () => {
  return {
    totalListings: 3,
    activeListings: 1,
    pendingListings: 1,
    expiredListings: 1,
    totalViews: 41,
    totalContacts: 4,
    popularDestinations: [
      { name: 'New York, USA', count: 1 },
      { name: 'London, UK', count: 1 },
      { name: 'Sydney, Australia', count: 1 }
    ],
    monthlyStats: [
      { month: 'Jan', views: 0, contacts: 0 },
      { month: 'Feb', views: 0, contacts: 0 },
      { month: 'Mar', views: 0, contacts: 0 },
      { month: 'Apr', views: 0, contacts: 0 },
      { month: 'May', views: 0, contacts: 0 },
      { month: 'Jun', views: 0, contacts: 0 },
      { month: 'Jul', views: 0, contacts: 0 },
      { month: 'Aug', views: 0, contacts: 0 },
      { month: 'Sep', views: 4, contacts: 0 },
      { month: 'Oct', views: 12, contacts: 1 },
      { month: 'Nov', views: 17, contacts: 2 },
      { month: 'Dec', views: 8, contacts: 1 }
    ],
    recentActivities: [
      { 
        type: 'view', 
        listingName: 'My Grandmother', 
        date: '2023-11-21T14:23:00', 
        details: 'Someone viewed your listing' 
      },
      { 
        type: 'contact', 
        listingName: 'My Grandmother', 
        date: '2023-11-20T09:45:00', 
        details: 'Rajesh Sharma contacted you' 
      },
      { 
        type: 'view', 
        listingName: 'My Father', 
        date: '2023-11-18T11:30:00', 
        details: 'Someone viewed your listing' 
      },
      { 
        type: 'system', 
        listingName: 'My Father', 
        date: '2023-11-15T16:20:00', 
        details: 'Listing is about to expire' 
      },
      { 
        type: 'view', 
        listingName: 'Myself as Travel Mate', 
        date: '2023-11-10T08:15:00', 
        details: 'Someone viewed your listing' 
      }
    ]
  };
};

export default function StatisticsPage() {
  const [statsData, setStatsData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'listings' | 'activity'>('overview');
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        const data = getStatisticsData();
        setStatsData(data);
      } catch (error) {
        console.error('Error fetching statistics data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Get activity icon based on type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'view':
        return <FaEye className="text-blue-500" />;
      case 'contact':
        return <FaUsers className="text-green-500" />;
      case 'system':
        return <FaCalendarAlt className="text-yellow-500" />;
      default:
        return <FaPlane className="text-gray-500" />;
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">Loading statistics...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaChartBar className="text-blue-600" /> Analytics & Statistics
          </h1>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'overview' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'listings' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('listings')}
            >
              Listings
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'activity' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('activity')}
            >
              Activity
            </button>
          </div>
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Total Listings</h3>
                  <div className="p-2 bg-blue-100 rounded-md">
                    <FaPlane className="text-blue-600" />
                  </div>
                </div>
                <div className="flex items-end space-x-2">
                  <p className="text-3xl font-bold">{statsData.totalListings}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-xs text-gray-400">listings created</span>
                  </div>
                </div>
                <div className="mt-2 flex space-x-3 text-sm">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-1"></div>
                    <span>{statsData.activeListings} active</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-1"></div>
                    <span>{statsData.pendingListings} pending</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-1"></div>
                    <span>{statsData.expiredListings} expired</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
                  <div className="p-2 bg-green-100 rounded-md">
                    <FaEye className="text-green-600" />
                  </div>
                </div>
                <div className="flex items-end space-x-2">
                  <p className="text-3xl font-bold">{statsData.totalViews}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-xs text-gray-400">listing views</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Last view: {formatDate(statsData.recentActivities[0].date)}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Total Contacts</h3>
                  <div className="p-2 bg-purple-100 rounded-md">
                    <FaUsers className="text-purple-600" />
                  </div>
                </div>
                <div className="flex items-end space-x-2">
                  <p className="text-3xl font-bold">{statsData.totalContacts}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-xs text-gray-400">contact requests</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {statsData.totalContacts > 0 
                      ? `Last contact: ${formatDate(statsData.recentActivities[1].date)}` 
                      : 'No contacts yet'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Top Destination</h3>
                  <div className="p-2 bg-blue-100 rounded-md">
                    <FaGlobe className="text-blue-600" />
                  </div>
                </div>
                <div className="flex flex-col">
                  {statsData.popularDestinations.length > 0 ? (
                    <>
                      <p className="text-xl font-bold">{statsData.popularDestinations[0].name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {statsData.popularDestinations[0].count} listing{statsData.popularDestinations[0].count !== 1 ? 's' : ''}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-500 text-sm">No destinations yet</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Activity Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold mb-6">Year Activity</h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {statsData.monthlyStats.map((month: any, index: number) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full flex flex-col items-center">
                      <div className="relative w-full h-40 flex flex-col justify-end">
                        <div 
                          className="w-full bg-blue-100 rounded-t"
                          style={{ 
                            height: `${Math.max(5, (month.views / statsData.monthlyStats.reduce((max: number, m: any) => Math.max(max, m.views), 0)) * 100)}%` 
                          }}
                        >
                          {month.views > 0 && (
                            <div className="absolute -top-6 w-full text-center text-xs text-blue-600 font-medium">
                              {month.views}
                            </div>
                          )}
                        </div>
                        <div 
                          className="w-full bg-green-400 rounded-t mt-1"
                          style={{ 
                            height: `${Math.max(2, (month.contacts / statsData.monthlyStats.reduce((max: number, m: any) => Math.max(max, m.contacts), 1)) * 40)}%` 
                          }}
                        >
                          {month.contacts > 0 && (
                            <div className="absolute -bottom-6 w-full text-center text-xs text-green-600 font-medium">
                              {month.contacts}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">{month.month}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6 space-x-6">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-blue-100 mr-2"></div>
                  <span className="text-sm text-gray-600">Views</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-400 mr-2"></div>
                  <span className="text-sm text-gray-600">Contacts</span>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button 
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={() => setActiveTab('activity')}
                >
                  View All
                </button>
              </div>
              <div className="divide-y">
                {statsData.recentActivities.slice(0, 3).map((activity: any, index: number) => (
                  <div key={index} className="py-4 flex">
                    <div className="mr-4">
                      <div className="p-2 rounded-full bg-gray-100">
                        {getActivityIcon(activity.type)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{activity.details}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500 mr-3">{activity.listingName}</span>
                        <span className="text-xs text-gray-400">{formatDate(activity.date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold mb-6">Listing Performance</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Listing Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Views
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contacts
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">My Grandmother</div>
                        <div className="text-sm text-gray-500">Kathmandu to New York</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        24
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        12.5%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">My Father</div>
                        <div className="text-sm text-gray-500">Pokhara to London</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Expired
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        12
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        8.3%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Myself as Travel Mate</div>
                        <div className="text-sm text-gray-500">Kathmandu to Sydney</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-6">Popular Destinations</h3>
                <div className="space-y-6">
                  {statsData.popularDestinations.map((destination: any, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1/2">
                        <p className="font-medium">{destination.name}</p>
                        <p className="text-sm text-gray-500">{destination.count} listing{destination.count !== 1 ? 's' : ''}</p>
                      </div>
                      <div className="w-1/2 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ 
                            width: `${(destination.count / statsData.totalListings) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-6">Listing Status</h3>
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-800">{statsData.totalListings}</p>
                      <p className="text-sm text-gray-500">Total Listings</p>
                    </div>
                  </div>
                  {/* This is where a real chart component would go */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex">
                    <div 
                      className="h-full bg-green-500" 
                      style={{ width: `${(statsData.activeListings / statsData.totalListings) * 100}%` }}
                    ></div>
                    <div 
                      className="h-full bg-yellow-500" 
                      style={{ width: `${(statsData.pendingListings / statsData.totalListings) * 100}%` }}
                    ></div>
                    <div 
                      className="h-full bg-red-500" 
                      style={{ width: `${(statsData.expiredListings / statsData.totalListings) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Active ({statsData.activeListings})</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-yellow-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Pending ({statsData.pendingListings})</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-red-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Expired ({statsData.expiredListings})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-6">Activity Log</h3>
            <div className="divide-y">
              {statsData.recentActivities.map((activity: any, index: number) => (
                <div key={index} className="py-4 flex">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-gray-100">
                      {getActivityIcon(activity.type)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{activity.details}</p>
                      <span className="text-xs text-gray-400">{formatDate(activity.date)}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm text-gray-500">{activity.listingName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 