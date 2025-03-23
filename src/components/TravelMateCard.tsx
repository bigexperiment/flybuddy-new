import React from 'react';
import { format } from 'date-fns';
import { TravelMate } from '../types';
import Button from './ui/Button';

interface TravelMateCardProps {
  travelMate: TravelMate;
  onContact: (travelMate: TravelMate) => void;
}

const TravelMateCard: React.FC<TravelMateCardProps> = ({ travelMate, onContact }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`p-4 ${travelMate.role === 'Traveler' ? 'bg-blue-50' : 'bg-green-50'}`}>
        <div className="flex justify-between items-center mb-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            travelMate.role === 'Traveler' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {travelMate.role}
          </span>
          <span className="text-gray-500 text-sm">
            {format(new Date(travelMate.travelDate), 'MMM dd, yyyy')}
          </span>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            {travelMate.fromLocation} to {travelMate.toLocation}
          </h3>
          <p className="text-gray-600">{travelMate.airline}</p>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500">Contact:</p>
            <p className="text-sm font-medium">{travelMate.contactInfo}</p>
          </div>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => onContact(travelMate)}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelMateCard; 