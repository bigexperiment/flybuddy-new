'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaArrowLeft, 
  FaCog, 
  FaBell, 
  FaShieldAlt, 
  FaEnvelope, 
  FaMobileAlt,
  FaTrash,
  FaSave
} from 'react-icons/fa';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'notifications' | 'privacy' | 'account'>('notifications');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Notifications settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNewMessage: true,
    emailListingExpiring: true,
    emailListingViewed: false,
    emailMarketing: false,
    smsNewMessage: false,
    smsListingExpiring: true,
    smsUrgentUpdates: false
  });
  
  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    showContactInfo: true,
    showFullName: false,
    allowSearchEngines: true,
    allowContactByPhone: true,
    allowContactByEmail: true
  });
  
  // Account settings
  const [accountSettings, setAccountSettings] = useState({
    deleteConfirmation: '',
    accountDeleteReason: ''
  });
  
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPrivacySettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAccountSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveNotifications = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setSuccessMessage('Notification settings saved successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Failed to save notification settings:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSavePrivacy = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setSuccessMessage('Privacy settings saved successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Failed to save privacy settings:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (accountSettings.deleteConfirmation !== 'DELETE') {
      alert('Please type DELETE to confirm account deletion');
      return;
    }
    
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real app, this would redirect to a logout or goodbye page
        window.location.href = '/';
      } catch (error) {
        console.error('Failed to delete account:', error);
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
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
            <FaCog className="text-blue-600" /> Account Settings
          </h1>
        </div>
        
        {/* Success message */}
        {successMessage && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">{successMessage}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-gray-800">Settings</h2>
              </div>
              <div className="p-2">
                <button 
                  onClick={() => setActiveTab('notifications')} 
                  className={`w-full text-left py-2 px-3 rounded-md flex items-center gap-3 ${
                    activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaBell className={activeTab === 'notifications' ? 'text-blue-600' : 'text-gray-500'} />
                  Notifications
                </button>
                
                <button 
                  onClick={() => setActiveTab('privacy')} 
                  className={`w-full text-left py-2 px-3 rounded-md flex items-center gap-3 ${
                    activeTab === 'privacy' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaShieldAlt className={activeTab === 'privacy' ? 'text-blue-600' : 'text-gray-500'} />
                  Privacy
                </button>
                
                <button 
                  onClick={() => setActiveTab('account')} 
                  className={`w-full text-left py-2 px-3 rounded-md flex items-center gap-3 ${
                    activeTab === 'account' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaTrash className={activeTab === 'account' ? 'text-red-600' : 'text-gray-500'} />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:w-3/4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div>
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <FaBell className="text-blue-600" /> Notification Settings
                    </h2>
                    <p className="mt-1 text-gray-500">
                      Manage how and when you receive notifications from SkyMates
                    </p>
                  </div>
                  
                  <form onSubmit={handleSaveNotifications} className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                          <FaEnvelope className="text-gray-500" /> Email Notifications
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="emailNewMessage" className="font-medium text-gray-700">
                                New messages
                              </label>
                              <p className="text-sm text-gray-500">
                                Get notified when someone sends you a message
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="emailNewMessage"
                                name="emailNewMessage"
                                checked={notificationSettings.emailNewMessage}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="emailListingExpiring" className="font-medium text-gray-700">
                                Listing expiration
                              </label>
                              <p className="text-sm text-gray-500">
                                Get notified when your travel mate listing is about to expire
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="emailListingExpiring"
                                name="emailListingExpiring"
                                checked={notificationSettings.emailListingExpiring}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="emailListingViewed" className="font-medium text-gray-700">
                                Listing views
                              </label>
                              <p className="text-sm text-gray-500">
                                Get notified when someone views your travel mate listing
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="emailListingViewed"
                                name="emailListingViewed"
                                checked={notificationSettings.emailListingViewed}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="emailMarketing" className="font-medium text-gray-700">
                                Marketing emails
                              </label>
                              <p className="text-sm text-gray-500">
                                Receive updates and news about SkyMates
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="emailMarketing"
                                name="emailMarketing"
                                checked={notificationSettings.emailMarketing}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                          <FaMobileAlt className="text-gray-500" /> SMS Notifications
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="smsNewMessage" className="font-medium text-gray-700">
                                New messages
                              </label>
                              <p className="text-sm text-gray-500">
                                Get SMS when someone sends you a message
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="smsNewMessage"
                                name="smsNewMessage"
                                checked={notificationSettings.smsNewMessage}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="smsListingExpiring" className="font-medium text-gray-700">
                                Listing expiration
                              </label>
                              <p className="text-sm text-gray-500">
                                Get SMS when your travel mate listing is about to expire
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="smsListingExpiring"
                                name="smsListingExpiring"
                                checked={notificationSettings.smsListingExpiring}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="smsUrgentUpdates" className="font-medium text-gray-700">
                                Urgent updates
                              </label>
                              <p className="text-sm text-gray-500">
                                Get SMS for urgent updates about your account
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="smsUrgentUpdates"
                                name="smsUrgentUpdates"
                                checked={notificationSettings.smsUrgentUpdates}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? 'Saving...' : (
                            <>
                              <FaSave size={14} /> Save Changes
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <div>
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <FaShieldAlt className="text-blue-600" /> Privacy Settings
                    </h2>
                    <p className="mt-1 text-gray-500">
                      Manage your privacy and contact preferences
                    </p>
                  </div>
                  
                  <form onSubmit={handleSavePrivacy} className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Profile Visibility</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="showContactInfo" className="font-medium text-gray-700">
                                Show contact information
                              </label>
                              <p className="text-sm text-gray-500">
                                Allow others to see your contact information
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="showContactInfo"
                                name="showContactInfo"
                                checked={privacySettings.showContactInfo}
                                onChange={handlePrivacyChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="showFullName" className="font-medium text-gray-700">
                                Show full name
                              </label>
                              <p className="text-sm text-gray-500">
                                Show your full name instead of first name only
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="showFullName"
                                name="showFullName"
                                checked={privacySettings.showFullName}
                                onChange={handlePrivacyChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="allowSearchEngines" className="font-medium text-gray-700">
                                Allow search engines
                              </label>
                              <p className="text-sm text-gray-500">
                                Allow search engines to index your profile
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="allowSearchEngines"
                                name="allowSearchEngines"
                                checked={privacySettings.allowSearchEngines}
                                onChange={handlePrivacyChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium mb-4">Contact Preferences</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="allowContactByPhone" className="font-medium text-gray-700">
                                Allow contact by phone
                              </label>
                              <p className="text-sm text-gray-500">
                                Allow others to contact you by phone
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="allowContactByPhone"
                                name="allowContactByPhone"
                                checked={privacySettings.allowContactByPhone}
                                onChange={handlePrivacyChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="allowContactByEmail" className="font-medium text-gray-700">
                                Allow contact by email
                              </label>
                              <p className="text-sm text-gray-500">
                                Allow others to contact you by email
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="allowContactByEmail"
                                name="allowContactByEmail"
                                checked={privacySettings.allowContactByEmail}
                                onChange={handlePrivacyChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? 'Saving...' : (
                            <>
                              <FaSave size={14} /> Save Changes
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Account Delete Settings */}
              {activeTab === 'account' && (
                <div>
                  <div className="p-6 border-b bg-red-50">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-red-700">
                      <FaTrash className="text-red-600" /> Delete Account
                    </h2>
                    <p className="mt-1 text-red-600">
                      Warning: This action is permanent and cannot be undone. All your data will be permanently deleted.
                    </p>
                  </div>
                  
                  <form onSubmit={handleDeleteAccount} className="p-6">
                    <div className="space-y-6">
                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Before you delete your account</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>All your travel mate listings will be permanently deleted</li>
                                <li>All your messages will be deleted</li>
                                <li>You will no longer have access to your account or data</li>
                                <li>This action cannot be reversed</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="accountDeleteReason" className="block text-sm font-medium text-gray-700 mb-1">
                          Why are you deleting your account? (Optional)
                        </label>
                        <select
                          id="accountDeleteReason"
                          name="accountDeleteReason"
                          value={accountSettings.accountDeleteReason}
                          onChange={handleAccountChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">Select a reason</option>
                          <option value="not-useful">I don't find SkyMates useful</option>
                          <option value="no-longer-needed">I no longer need a travel mate</option>
                          <option value="safety-concerns">I have safety concerns</option>
                          <option value="creating-new-account">I'm creating a new account</option>
                          <option value="other">Other reason</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="deleteConfirmation" className="block text-sm font-medium text-gray-700 mb-1">
                          To confirm, type "DELETE" in the box below
                        </label>
                        <input
                          type="text"
                          id="deleteConfirmation"
                          name="deleteConfirmation"
                          value={accountSettings.deleteConfirmation}
                          onChange={handleAccountChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Type DELETE to confirm"
                        />
                      </div>
                      
                      <div className="pt-6 flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting || accountSettings.deleteConfirmation !== 'DELETE'}
                          className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? 'Processing...' : (
                            <>
                              <FaTrash size={14} /> Delete My Account
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 