import axios from 'axios';
import { TravelMate, User, TravelMateFormData, DateRangeFilter, LocationFilter } from '../types';

const API_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User API functions
export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (userData: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
  const response = await api.post('/users', {
    ...userData,
    createdAt: new Date().toISOString(),
  });
  return response.data;
};

// TravelMate API functions
export const getTravelMates = async (
  dateFilter?: DateRangeFilter,
  locationFilter?: LocationFilter
): Promise<TravelMate[]> => {
  let url = '/travel-mates';
  const params = new URLSearchParams();

  if (dateFilter) {
    // Filter on the client side since json-server doesn't support date range queries well
  }

  if (locationFilter) {
    if (locationFilter.from) {
      params.append('fromLocation', locationFilter.from);
    }
    if (locationFilter.to) {
      params.append('toLocation', locationFilter.to);
    }
  }

  const response = await api.get(url + (params.toString() ? `?${params.toString()}` : ''));
  
  let results = response.data;
  
  // Apply date filter on client side if provided
  if (dateFilter && dateFilter.startDate && dateFilter.endDate) {
    const startDate = new Date(dateFilter.startDate);
    const endDate = new Date(dateFilter.endDate);
    
    results = results.filter((mate: TravelMate) => {
      const travelDate = new Date(mate.travelDate);
      return travelDate >= startDate && travelDate <= endDate;
    });
  }
  
  return results;
};

export const getTravelMateById = async (id: string): Promise<TravelMate> => {
  const response = await api.get(`/travel-mates/${id}`);
  return response.data;
};

export const createTravelMate = async (
  travelMateData: TravelMateFormData
): Promise<TravelMate> => {
  // First create or find user
  let user: User;
  const existingUsers = await api.get('/users', {
    params: { email: travelMateData.contactInfo }
  });
  
  if (existingUsers.data.length > 0) {
    user = existingUsers.data[0];
  } else {
    user = await createUser({
      name: travelMateData.name,
      email: travelMateData.contactInfo,
      age: travelMateData.age,
    });
  }
  
  // Create travel mate entry
  const response = await api.post('/travel-mates', {
    userId: user.id,
    role: travelMateData.role,
    travelDate: travelMateData.travelDate,
    fromLocation: travelMateData.fromLocation,
    toLocation: travelMateData.toLocation,
    airline: travelMateData.airline,
    contactInfo: maskContactInfo(travelMateData.contactInfo),
    createdAt: new Date().toISOString(),
  });
  
  return response.data;
};

// Helper function to mask contact info for privacy
const maskContactInfo = (contact: string): string => {
  // Simple masking: show first 3 chars + *** + domain for email
  if (contact.includes('@')) {
    const [username, domain] = contact.split('@');
    return `${username.substring(0, 3)}***@${domain}`;
  }
  
  // For phone, show first 3 digits + *** + last 2
  if (/^\d+$/.test(contact)) {
    return `${contact.substring(0, 3)}***${contact.substring(contact.length - 2)}`;
  }
  
  // Default masking
  return `${contact.substring(0, 3)}***`;
};

export default api; 