import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhone, FaEnvelope, FaPlaneDeparture, FaPlaneArrival, FaComment } from 'react-icons/fa';
import { notFound } from 'next/navigation';

type TravelMateDetails = {
  id: string;
  name: string;
  age: number;
  gender: string;
  languages: string[];
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  profileImage: string;
  email: string;
  phone: string;
  bio: string;
  additionalInfo: string;
  preferredAirline?: string;
  flightNumber?: string;
  accommodationNeeds?: string;
};

// In a real app, this would come from a database or API
const getTravelMateById = (id: string): TravelMateDetails | undefined => {
  const travelMates: TravelMateDetails[] = [
    {
      id: '1',
      name: 'Dharma Gurung',
      age: 72,
      gender: 'Male',
      languages: ['Nepali', 'Basic English'],
      from: 'Kathmandu, Nepal',
      to: 'New York, USA',
      departureDate: '2023-12-15',
      profileImage: 'https://randomuser.me/api/portraits/men/85.jpg',
      email: 'dharma.gurung@example.com',
      phone: '+977 9841234567',
      bio: 'Retired teacher traveling to visit my son and grandchildren in New York. I have difficulty with English and would appreciate assistance with navigation and translation.',
      additionalInfo: 'I have mild arthritis and may need help with carrying luggage. I also have medication that needs to be taken at specific times.',
      preferredAirline: 'Qatar Airways',
      flightNumber: 'QR657',
      accommodationNeeds: 'None - my son will pick me up at the airport'
    },
    {
      id: '2',
      name: 'Sarita Thapa',
      age: 65,
      gender: 'Female',
      languages: ['Nepali', 'Hindi'],
      from: 'Pokhara, Nepal',
      to: 'London, UK',
      departureDate: '2023-11-28',
      returnDate: '2024-02-10',
      profileImage: 'https://randomuser.me/api/portraits/women/62.jpg',
      email: 'sarita.thapa@example.com',
      phone: '+977 9807654321',
      bio: 'I am traveling to London to attend my granddaughter\'s wedding. This will be my first international trip, and I am nervous about the journey.',
      additionalInfo: 'I am diabetic and need to take insulin regularly. I would appreciate if someone could help me with airport procedures and translation.',
      preferredAirline: 'Turkish Airlines',
      flightNumber: 'TK1059'
    }
  ];

  return travelMates.find(mate => mate.id === id);
};

export default function TravelMateDetailsPage({ params }: { params: { id: string } }) {
  const travelMate = getTravelMateById(params.id);

  if (!travelMate) {
    notFound();
  }

  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/travel-mates" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FaArrowLeft className="mr-2" /> Back to all travel mates
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">{travelMate.name}</h1>
            <p className="mt-2 flex items-center">
              <FaPlaneDeparture className="mr-2" />
              {travelMate.from} to {travelMate.to}
            </p>
          </div>

          {/* Profile Info */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column with image */}
              <div className="md:w-1/3">
                <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={travelMate.profileImage}
                    alt={travelMate.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-blue-600" />
                      {travelMate.email}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <FaPhone className="mr-2 text-blue-600" />
                      {travelMate.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column with details */}
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">Travel Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500 text-sm">Traveling From</span>
                      <p className="flex items-center font-medium">
                        <FaMapMarkerAlt className="mr-2 text-blue-600" />
                        {travelMate.from}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500 text-sm">Traveling To</span>
                      <p className="flex items-center font-medium">
                        <FaMapMarkerAlt className="mr-2 text-blue-600" />
                        {travelMate.to}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500 text-sm">Departure Date</span>
                      <p className="flex items-center font-medium">
                        <FaCalendarAlt className="mr-2 text-blue-600" />
                        {formatDate(travelMate.departureDate)}
                      </p>
                    </div>
                    {travelMate.returnDate && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-500 text-sm">Return Date</span>
                        <p className="flex items-center font-medium">
                          <FaCalendarAlt className="mr-2 text-blue-600" />
                          {formatDate(travelMate.returnDate)}
                        </p>
                      </div>
                    )}
                    {travelMate.preferredAirline && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-500 text-sm">Preferred Airline</span>
                        <p className="flex items-center font-medium">
                          <FaPlaneDeparture className="mr-2 text-blue-600" />
                          {travelMate.preferredAirline}
                        </p>
                      </div>
                    )}
                    {travelMate.flightNumber && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-500 text-sm">Flight Number</span>
                        <p className="flex items-center font-medium">
                          <FaPlaneArrival className="mr-2 text-blue-600" />
                          {travelMate.flightNumber}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500 text-sm">Age</span>
                      <p className="font-medium">{travelMate.age} years</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500 text-sm">Gender</span>
                      <p className="font-medium">{travelMate.gender}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-500 text-sm">Languages</span>
                      <p className="font-medium">{travelMate.languages.join(', ')}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">About</h3>
                    <p className="text-gray-700">{travelMate.bio}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Additional Information</h3>
                    <p className="text-gray-700">{travelMate.additionalInfo}</p>
                    {travelMate.accommodationNeeds && (
                      <div className="mt-3">
                        <h4 className="font-medium text-gray-800">Accommodation Needs:</h4>
                        <p className="text-gray-700">{travelMate.accommodationNeeds}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact buttons */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${travelMate.email}`} 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FaEnvelope /> Email {travelMate.name}
              </a>
              <a 
                href={`tel:${travelMate.phone}`} 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <FaPhone /> Call {travelMate.name}
              </a>
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                <FaComment /> Contact SkyMates
              </Link>
            </div>
          </div>
        </div>

        {/* Similar travel mates */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Travel Mates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image 
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Ramesh Shrestha"
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ramesh Shrestha</h3>
                    <p className="text-gray-600 text-sm">Kathmandu to New York</p>
                    <p className="text-gray-500 text-xs">Departing: {formatDate('2023-12-16')}</p>
                  </div>
                </div>
                <Link 
                  href="/travel-mates/3" 
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm flex items-center justify-end"
                >
                  View Details <FaArrowLeft className="ml-1 rotate-180" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image 
                      src="https://randomuser.me/api/portraits/women/45.jpg"
                      alt="Anita Tamang"
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Anita Tamang</h3>
                    <p className="text-gray-600 text-sm">Pokhara to London</p>
                    <p className="text-gray-500 text-xs">Departing: {formatDate('2023-11-30')}</p>
                  </div>
                </div>
                <Link 
                  href="/travel-mates/4" 
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm flex items-center justify-end"
                >
                  View Details <FaArrowLeft className="ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 