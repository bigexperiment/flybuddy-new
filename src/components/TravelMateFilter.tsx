import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from './ui/Input';
import Button from './ui/Button';
import { dateRangeFilterSchema, locationFilterSchema } from '../lib/validations';

// Combine both filter schemas
const filterSchema = z.object({
  ...dateRangeFilterSchema.shape,
  ...locationFilterSchema.shape,
});

type FilterFormData = z.infer<typeof filterSchema>;

interface TravelMateFilterProps {
  onFilter: (dateFilter: { startDate: string; endDate: string }, locationFilter: { from?: string; to?: string }) => void;
  onReset: () => void;
}

const TravelMateFilter: React.FC<TravelMateFilterProps> = ({ onFilter, onReset }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      startDate: '',
      endDate: '',
      from: '',
      to: '',
    },
  });

  const onSubmit = (data: FilterFormData) => {
    const dateFilter = {
      startDate: data.startDate || '',
      endDate: data.endDate || '',
    };
    
    const locationFilter = {
      from: data.from,
      to: data.to,
    };
    
    onFilter(dateFilter, locationFilter);
  };

  const handleReset = () => {
    reset();
    onReset();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter Travel Mates</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            label="Start Date"
            type="date"
            error={errors.startDate?.message}
            {...register('startDate')}
          />
          
          <Input
            label="End Date"
            type="date"
            error={errors.endDate?.message}
            {...register('endDate')}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            label="From Location"
            placeholder="e.g. Kathmandu"
            error={errors.from?.message}
            {...register('from')}
          />
          
          <Input
            label="To Location"
            placeholder="e.g. New York"
            error={errors.to?.message}
            {...register('to')}
          />
        </div>
        
        <div className="flex space-x-2">
          <Button type="submit" variant="primary">
            Apply Filters
          </Button>
          
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TravelMateFilter; 