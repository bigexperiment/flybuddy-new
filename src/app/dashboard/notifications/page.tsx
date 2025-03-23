'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaBell, 
  FaTrash, 
  FaSpinner, 
  FaEye, 
  FaComment, 
  FaUserPlus, 
  FaClock, 
  FaCheck, 
  FaArrowLeft 
} from 'react-icons/fa';

type NotificationType = 'message' | 'system' | 'contact' | 'view';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  date: string;
  read: boolean;
  actionLink?: string;
  relatedUserId?: string;
  relatedUserName?: string;
  relatedUserImage?: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<NotificationType | 'all'>('all');
  const [isMarkingAllRead, setIsMarkingAllRead] = useState(false);
  
  // Simulate fetching notifications from an API
  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockNotifications: Notification[] = [
          {
            id: '1',
            type: 'message',
            title: 'New message received',
            description: 'Rajesh Sharma sent you a message about your travel mate listing.',
            date: '2023-11-22T14:30:00Z',
            read: false,
            actionLink: '/dashboard/messages/1',
            relatedUserId: '101',
            relatedUserName: 'Rajesh Sharma',
            relatedUserImage: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          {
            id: '2',
            type: 'contact',
            title: 'New contact request',
            description: 'Anita Gurung is interested in being a travel companion for your grandmother.',
            date: '2023-11-21T09:15:00Z',
            read: true,
            actionLink: '/dashboard/messages/2',
            relatedUserId: '102',
            relatedUserName: 'Anita Gurung',
            relatedUserImage: 'https://randomuser.me/api/portraits/women/45.jpg'
          },
          {
            id: '3',
            type: 'system',
            title: 'Listing expiring soon',
            description: 'Your travel mate listing for "My Father" will expire in 3 days.',
            date: '2023-11-20T18:45:00Z',
            read: false,
            actionLink: '/dashboard/edit/2'
          },
          {
            id: '4',
            type: 'view',
            title: 'New profile views',
            description: 'Your travel mate listing "My Grandmother" received 5 new views today.',
            date: '2023-11-19T11:20:00Z',
            read: true,
            actionLink: '/dashboard/statistics'
          },
          {
            id: '5',
            type: 'system',
            title: 'Welcome to SkyMates',
            description: 'Thank you for joining SkyMates! Get started by creating your first travel mate listing.',
            date: '2023-11-15T08:00:00Z',
            read: true,
            actionLink: '/dashboard/create'
          }
        ];
        
        setNotifications(mockNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNotifications();
  }, []);
  
  // Filter notifications based on the selected type
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === filter);
  
  // Format date to a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return diffInHours === 0 
        ? 'Just now'
        : `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };
  
  // Mark a notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };
  
  // Mark all notifications as read
  const markAllAsRead = async () => {
    setIsMarkingAllRead(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setNotifications(prev => 
        prev.map(notification => ({ ...notification, read: true }))
      );
    } catch (error) {
      console.error('Error marking all as read:', error);
    } finally {
      setIsMarkingAllRead(false);
    }
  };
  
  // Delete a notification
  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  
  // Get icon based on notification type
  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case 'message':
        return <FaComment className="text-blue-500" />;
      case 'contact':
        return <FaUserPlus className="text-green-500" />;
      case 'system':
        return <FaBell className="text-yellow-500" />;
      case 'view':
        return <FaEye className="text-purple-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link 
            href="/dashboard" 
            className="mr-4 text-gray-600 hover:text-blue-600"
          >
            <FaArrowLeft />
          </Link>
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={markAllAsRead}
            disabled={isMarkingAllRead || notifications.every(n => n.read)}
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isMarkingAllRead ? (
              <>
                <FaSpinner className="animate-spin" />
                Marking all as read...
              </>
            ) : (
              <>
                <FaCheck />
                Mark all as read
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Filters */}
        <div className="border-b px-4 py-3 bg-gray-50">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === 'all' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('message')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === 'message' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Messages
            </button>
            <button
              onClick={() => setFilter('contact')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === 'contact' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contacts
            </button>
            <button
              onClick={() => setFilter('view')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === 'view' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Views
            </button>
            <button
              onClick={() => setFilter('system')}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === 'system' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              System
            </button>
          </div>
        </div>
        
        {/* Notifications List */}
        {isLoading ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <FaSpinner className="text-blue-500 text-3xl animate-spin mb-4" />
            <p className="text-gray-600">Loading notifications...</p>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div className="p-12 text-center">
            <FaBell className="text-gray-300 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No notifications</h3>
            <p className="text-gray-600">
              {filter === 'all' 
                ? "You don't have any notifications yet."
                : `You don't have any ${filter} notifications.`}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`p-4 sm:px-6 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                onClick={() => {
                  if (!notification.read) {
                    markAsRead(notification.id);
                  }
                }}
              >
                <div className="flex items-start">
                  {/* User Image or Icon */}
                  {notification.relatedUserImage ? (
                    <div className="mr-4 flex-shrink-0">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={notification.relatedUserImage}
                          alt={notification.relatedUserName || "User"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mr-4 flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100">
                      {getNotificationIcon(notification.type)}
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaClock className="mr-1 h-3 w-3" />
                        {formatDate(notification.date)}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-2">
                      {notification.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      {notification.actionLink && (
                        <Link
                          href={notification.actionLink}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details
                        </Link>
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(notification.id);
                        }}
                        className="text-gray-500 hover:text-red-600"
                        aria-label="Delete notification"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 