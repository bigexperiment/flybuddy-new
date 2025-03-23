import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';
import { travelMateFormSchema } from '../lib/validations';

type TravelMateFormValues = z.infer<typeof travelMateFormSchema>;

interface TravelMateFormProps {
  onSubmit: (data: TravelMateFormValues) => void;
  isLoading?: boolean;
}

const TravelMateForm: React.FC<TravelMateFormProps> = ({ 
  onSubmit, 
  isLoading = false 
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TravelMateFormValues>({
    resolver: zodResolver(travelMateFormSchema),
    defaultValues: {
      name: '',
      age: undefined,
      role: undefined,
      travelDate: '',
      fromLocation: '',
      toLocation: '',
      airline: '',
      contactInfo: '',
    },
  });

  const roleOptions = [
    { value: 'Traveler', label: 'I need a companion (Traveler)' },
    { value: 'Companion', label: 'I can assist someone (Companion)' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold mb-6">Add New Travel Mate</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name?.message}
            {...register('name')}
          />
          
          <Input
            label="Age"
            type="number"
            placeholder="Enter your age"
            error={errors.age?.message}
            {...register('age', { valueAsNumber: true })}
          />
        </div>
        
        <Select
          label="Your Role"
          options={roleOptions}
          error={errors.role?.message}
          {...register('role')}
        />
        
        <Input
          label="Travel Date"
          type="date"
          error={errors.travelDate?.message}
          {...register('travelDate')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="From Location"
            placeholder="e.g. Kathmandu"
            error={errors.fromLocation?.message}
            {...register('fromLocation')}
          />
          
          <Input
            label="To Location"
            placeholder="e.g. New York"
            error={errors.toLocation?.message}
            {...register('toLocation')}
          />
        </div>
        
        <Input
          label="Airline"
          placeholder="e.g. Qatar Airways"
          error={errors.airline?.message}
          {...register('airline')}
        />
        
        <Input
          label="Contact Info"
          placeholder="Email or phone number"
          error={errors.contactInfo?.message}
          {...register('contactInfo')}
        />
        
        <Button 
          type="submit" 
          fullWidth 
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Add Travel Mate'}
        </Button>
      </form>
    </div>
  );
};

export default TravelMateForm; 