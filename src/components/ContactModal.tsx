import React, { useState } from 'react';
import { TravelMate } from '../types';
import Button from './ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  travelMate?: TravelMate;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, travelMate }) => {
  const [message, setMessage] = useState('');

  if (!isOpen || !travelMate) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send an email or notification
    // For this prototype, we'll just show an alert
    alert(`Your message has been sent to the travel mate! They will contact you soon.`);
    setMessage('');
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Contact {travelMate.role}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Trip Details:</p>
          <p className="font-medium">
            {travelMate.fromLocation} to {travelMate.toLocation}
          </p>
          <p className="text-sm text-gray-600">
            {travelMate.airline} - {new Date(travelMate.travelDate).toLocaleDateString()}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Introduce yourself and explain why you'd like to connect..."
              required
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal; 