import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const SkyBuddySimple = () => {
  const [passengers, setPassengers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    type: "",
    date: "",
    fromCity: "",
    toCity: "",
    phone: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPassengers();
  }, []);

  const fetchPassengers = async () => {
    try {
      const response = await fetch(`${API_URL}/passengers`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPassengers(data);
    } catch (error) {
      console.error("Error fetching passengers:", error);
      setError("Failed to load passengers. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/passengers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPassengers([...passengers, { ...formData, id: data.id }]);
      setFormData({
        name: "",
        age: "",
        type: "",
        date: "",
        fromCity: "",
        toCity: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error adding passenger:", error);
      setError("Failed to add passenger. Please try again.");
    }
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Sky Buddy
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Add My Trip
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center space-x-4 mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="needFriend"
                checked={formData.type === "needFriend"}
                onChange={handleInputChange}
                className="form-radio text-blue-600"
                required
              />
              <span className="ml-2 text-gray-700">Looking for a friend</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="beFriend"
                checked={formData.type === "beFriend"}
                onChange={handleInputChange}
                className="form-radio text-green-600"
                required
              />
              <span className="ml-2 text-gray-700">Willing to be a friend</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (e.g., +977-98XXXXXXXX)"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="fromCity"
              placeholder="Departure City"
              value={formData.fromCity}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="toCity"
              placeholder="Arrival City"
              value={formData.toCity}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add My Trip
          </button>
        </form>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Passengers Looking for a Friend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {passengers
              .filter((p) => p.type === "needFriend")
              .map((passenger) => (
                <div
                  key={passenger.id}
                  className="bg-blue-100 p-4 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <p className="font-bold text-lg">
                      {passenger.name}, Age: {passenger.age}
                    </p>
                    <p>Date: {passenger.date}</p>
                    <p>From: {passenger.fromCity}</p>
                    <p>To: {passenger.toCity}</p>
                  </div>
                  <button
                    onClick={() => handleCall(passenger.phone)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Contact
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Passengers Willing to be a Friend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {passengers
              .filter((p) => p.type === "beFriend")
              .map((passenger) => (
                <div
                  key={passenger.id}
                  className="bg-green-100 p-4 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <p className="font-bold text-lg">
                      {passenger.name}, Age: {passenger.age}
                    </p>
                    <p>Date: {passenger.date}</p>
                    <p>From: {passenger.fromCity}</p>
                    <p>To: {passenger.toCity}</p>
                  </div>
                  <button
                    onClick={() => handleCall(passenger.phone)}
                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Contact
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkyBuddySimple;
