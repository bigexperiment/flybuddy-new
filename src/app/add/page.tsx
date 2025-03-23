'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { createTravelMate } from '@/services/api';
import { travelMateFormSchema } from '@/lib/validations';
import TravelMateForm from '@/components/TravelMateForm';

type FormData = z.infer<typeof travelMateFormSchema>;

export default function AddTravelMatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await createTravelMate(data);
      setSuccess(true);
      
      // Redirect to the travel mates page after a short delay
      setTimeout(() => {
        router.push('/travel-mates');
      }, 3000);
      
    } catch (err) {
      console.error('Error creating travel mate:', err);
      setError('Failed to add travel mate. Please try again later.');
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add Travel Mate</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">Travel Mate Added Successfully!</h3>
          <p className="mb-1">Your travel mate listing has been created.</p>
          <p>Redirecting to travel mates page...</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <TravelMateForm 
            onSubmit={handleSubmit}
            isLoading={isSubmitting}
          />
        </div>
      )}
    </div>
  );
} 