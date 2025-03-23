'use client';

import React, { useState, useEffect } from 'react';
import { getTravelMates } from '@/services/api';
import { TravelMate, DateRangeFilter, LocationFilter } from '@/types';
import TravelMateCard from '@/components/TravelMateCard';
import TravelMateFilter from '@/components/TravelMateFilter';
import ContactModal from '@/components/ContactModal';

export default function TravelMatesPage() {
  const [travelMates, setTravelMates] = useState<TravelMate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedTravelMate, setSelectedTravelMate] = useState<TravelMate | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const fetchTravelMates = async () => {
      try {
        setLoading(true);
        const data = await getTravelMates();
        setTravelMates(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching travel mates:', err);
        setError('Failed to load travel mates. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchTravelMates();
  }, []);
  
  const handleFilter = async (dateFilter: DateRangeFilter, locationFilter: LocationFilter) => {
    try {
      setLoading(true);
      const filteredData = await getTravelMates(dateFilter, locationFilter);
      setTravelMates(filteredData);
      setError(null);
    } catch (err) {
      console.error('Error filtering travel mates:', err);
      setError('Failed to filter travel mates. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleResetFilter = async () => {
    try {
      setLoading(true);
      const data = await getTravelMates();
      setTravelMates(data);
      setError(null);
    } catch (err) {
      console.error('Error resetting filters:', err);
      setError('Failed to reset filters. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleContactClick = (travelMate: TravelMate) => {
    setSelectedTravelMate(travelMate);
    setIsModalOpen(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Travel Mates</h1>
      
      <TravelMateFilter onFilter={handleFilter} onReset={handleResetFilter} />
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      ) : travelMates.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No travel mates found</h3>
          <p className="text-gray-600">
            Try adjusting your filters or add your own travel mate listing.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelMates.map((travelMate) => (
            <TravelMateCard
              key={travelMate.id}
              travelMate={travelMate}
              onContact={handleContactClick}
            />
          ))}
        </div>
      )}
      
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        travelMate={selectedTravelMate}
      />
    </div>
  );
} 