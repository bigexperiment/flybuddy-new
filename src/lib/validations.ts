import { z } from 'zod';

export const travelMateFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  age: z
    .number({ required_error: 'Age is required' })
    .min(18, { message: 'You must be at least 18 years old' })
    .max(120, { message: 'Age must be less than 120' }),
  role: z.enum(['Traveler', 'Companion'], {
    required_error: 'Please select a role',
  }),
  travelDate: z
    .string()
    .min(1, { message: 'Travel date is required' }),
  fromLocation: z
    .string()
    .min(2, { message: 'From location must be at least 2 characters long' })
    .max(50, { message: 'From location must be less than 50 characters' }),
  toLocation: z
    .string()
    .min(2, { message: 'To location must be at least 2 characters long' })
    .max(50, { message: 'To location must be less than 50 characters' }),
  airline: z
    .string()
    .min(2, { message: 'Airline must be at least 2 characters long' })
    .max(50, { message: 'Airline must be less than 50 characters' }),
  contactInfo: z
    .string()
    .min(5, { message: 'Contact info must be at least 5 characters long' })
    .max(100, { message: 'Contact info must be less than 100 characters' }),
});

export const dateRangeFilterSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

export const locationFilterSchema = z.object({
  from: z.string().optional(),
  to: z.string().optional(),
}); 