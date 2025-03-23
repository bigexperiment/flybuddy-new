'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaReply, FaTrash, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { useParams } from 'next/navigation';

// In a real app, this would come from an API call
const getMessage = (id: string) => {
  const messages = [
    {
      id: '1',
      sender: 'Rajesh Sharma',
      subject: 'Travel Assistance for Your Grandmother',
      message: `Hello,

I am interested in being a travel companion for your grandmother on her journey from Kathmandu to New York on December 15.

I'm a 35-year-old medical professional who frequently travels between Nepal and the US for work. I'm fluent in both Nepali and English and have experience assisting elderly travelers.

I'll be on the same Qatar Airways flight (QR657) as I'm returning to New York where I work at Mount Sinai Hospital. I'd be happy to help your grandmother throughout the journey, from check-in at Tribhuvan International Airport to arrival at JFK.

Please let me know if you'd like to discuss this further. We could arrange a video call with you and your grandmother to get acquainted before the journey.

Best regards,
Rajesh Sharma
+977 9841234567`,
      date: '2023-11-10T14:23:00',
      read: false,
      profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
      email: 'rajesh.sharma@example.com',
      phone: '+977 9841234567'
    },
    {
      id: '2',
      sender: 'Anita Gurung',
      subject: 'Traveling to London - Can Help Your Father',
      message: `Dear Binod,

I will be traveling on the same flight to London and would be happy to assist your father during our journey. I've been living in London for the past 5 years and travel back to Nepal twice a year to visit family.

I noticed that your father is traveling on Turkish Airlines flight TK1059 on November 28, which is the same flight I'll be taking. I'd be glad to help him with the check-in process, during the flight, and with immigration upon arrival in London.

As someone who has made this journey many times, I understand how challenging it can be for elderly travelers, especially with language barriers and the complexity of connecting flights.

Please let me know if you're interested in my assistance, and we can exchange more details.

Kind regards,
Anita Gurung`,
      date: '2023-11-08T09:45:00',
      read: true,
      profilePic: 'https://randomuser.me/api/portraits/women/45.jpg',
      email: 'anita.gurung@example.com',
      phone: '+44 7700 900123'
    },
    {
      id: '3',
      sender: 'SkyMates Support',
      subject: 'Important Update About Your Listing',
      message: `Dear Binod Adhikari,

Thank you for using SkyMates! We noticed you have a listing that is about to expire in 3 days. Your listing for "My Father" traveling from Pokhara to London on November 28 will no longer be visible to potential travel mates after this period.

If the journey has been completed, no action is needed. However, if you still need assistance, please update the listing or contact our support team.

We hope SkyMates has been helpful for your travel needs. If you have any questions or need assistance, please don't hesitate to contact us.

Best regards,
The SkyMates Team
skymatesco@gmail.com
+1 714-485-9360`,
      date: '2023-11-05T11:30:00',
      read: true,
      profilePic: '/logo.png',
      email: 'support@skymates.co',
      phone: '+1 714-485-9360'
    }
  ];

  return messages.find(m => m.id === id);
};

export default function MessageDetailPage() {
  const params = useParams();
  const messageId = params.id as string;
  
  const message = getMessage(messageId);
  
  if (!message) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Message Not Found</h1>
          <p className="text-gray-600 mb-6">The message you are looking for does not exist or has been deleted.</p>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            href="/dashboard?tab=messages" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Back to Messages
          </Link>
        </div>
        
        {/* Message container */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Message header */}
          <div className="bg-gray-50 p-6 border-b">
            <h1 className="text-2xl font-bold mb-4">{message.subject}</h1>
            
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
                <h2 className="font-semibold">{message.sender}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt size={12} /> {formatDate(message.date)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Message body */}
          <div className="p-6">
            <div className="prose max-w-none">
              {message.message.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph.split('\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      {j < paragraph.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          </div>
          
          {/* Contact info */}
          <div className="p-6 bg-blue-50 border-t border-blue-100">
            <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 rounded-full p-2">
                  <FaUser className="text-blue-600" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Email</span>
                  <a 
                    href={`mailto:${message.email}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {message.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 rounded-full p-2">
                  <FaUser className="text-blue-600" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Phone</span>
                  <a 
                    href={`tel:${message.phone}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {message.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="p-6 border-t">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <button 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <FaTrash size={14} /> Delete Message
                </button>
              </div>
              <div>
                <a 
                  href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FaReply size={14} /> Reply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 