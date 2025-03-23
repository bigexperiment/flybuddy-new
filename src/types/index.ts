export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
};

export type TravelMate = {
  id: string;
  userId: string;
  role: 'Traveler' | 'Companion';
  travelDate: string;
  fromLocation: string;
  toLocation: string;
  airline: string;
  contactInfo: string;
  createdAt: string;
};

export type TravelMateFormData = {
  name: string;
  age: number;
  role: 'Traveler' | 'Companion';
  travelDate: string; 
  fromLocation: string;
  toLocation: string;
  airline: string;
  contactInfo: string;
};

export type DateRangeFilter = {
  startDate: string;
  endDate: string;
};

export type LocationFilter = {
  from?: string;
  to?: string;
}; 