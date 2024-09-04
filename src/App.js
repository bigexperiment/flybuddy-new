import React, { useState, useEffect } from "react";
import {
  PlaneTakeoff,
  UserPlus,
  PhoneCall,
  Calendar,
  MapPin,
  User,
  Info,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignUp,
  useUser,
  useAuth,
} from "@clerk/clerk-react";
// for testing
// const API_URL = "http://localhost:3000/api";

// for production

const API_URL =
  "https://server-chi-blush.vercel.app/api/";

const SkyBuddySimple = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [passengers, setPassengers] = useState([]);
  const [error, setError] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [signInReason, setSignInReason] = useState("");
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    age: "",
    date: "",
    fromCity: "",
    toCity: "",
    phone: "",
  });

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
      const token = await getToken();
      const response = await fetch(`${API_URL}/passengers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newPassenger = {
        ...formData,
        id: Date.now(),
      };
      setPassengers((prevPassengers) => [...prevPassengers, newPassenger]);
      setFormData({
        type: "",
        name: "",
        age: "",
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

  const handleContact = (phone) => {
    if (user) {
      // Implement your contact logic here
      alert(`Contacting passenger at ${phone}`);
    } else {
      setSignInReason("contact");
      setShowSignIn(true);
    }
  };

  const handleAddPassengerClick = () => {
    if (!user) {
      setSignInReason("add");
      setShowSignIn(true);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-teal-600 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center">
            <PlaneTakeoff className="mr-2" />
            Sky Buddy
          </h1>
          <nav className="flex items-center">
            <ul className="flex space-x-4 mr-4">
              <li>
                <a href="#" className="hover:text-teal-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200">
                  Contact
                </a>
              </li>
            </ul>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <button
                onClick={() => setShowSignIn(true)}
                className=" ok bg-white text-teal-600 py-2 px-4 rounded-md hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300"
              >
                Sign In
              </button>
            </SignedOut>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Add Passenger Panel */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6">
              <SignedIn>
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 flex items-center">
                  <UserPlus className="mr-2" />
                  Add New Passenger
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-center space-x-6 mb-6">
                    {["needFriend", "beFriend"].map((type) => (
                      <label key={type} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={formData.type === type}
                          onChange={handleInputChange}
                          className="form-radio text-teal-600 focus:ring-teal-500"
                          required
                        />
                        <span className="ml-2 text-gray-700">
                          {type === "needFriend"
                            ? "Looking for a friend"
                            : "Willing to be a friend"}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex items-center">
                      <User className="text-gray-400 mr-2" size={20} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex items-center">
                      <Info className="text-gray-400 mr-2" size={20} />
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex items-center">
                      <Calendar className="text-gray-400 mr-2" size={20} />
                      <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-gray-400 mr-2" size={20} />
                      <input
                        type="text"
                        name="fromCity"
                        placeholder="Departure City"
                        value={formData.fromCity}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-gray-400 mr-2" size={20} />
                      <input
                        type="text"
                        name="toCity"
                        placeholder="Arrival City"
                        value={formData.toCity}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex items-center">
                      <PhoneCall className="text-gray-400 mr-2" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center"
                  >
                    <UserPlus className="mr-2" size={20} />
                    Add Passenger
                  </button>
                </form>
              </SignedIn>
              <SignedOut>
                <button
                  onClick={handleAddPassengerClick}
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center"
                >
                  <UserPlus className="a mr-2" size={20} />
                  Add New Passenger
                </button>
              </SignedOut>
            </div>
          </div>

          {/* Passenger Lists */}
          <div className="space-y-12">
            {["beFriend", "needFriend"].map((groupType) => (
              <div
                key={groupType}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-teal-700 flex items-center">
                    {groupType === "beFriend" ? (
                      <UserPlus className="mr-2" />
                    ) : (
                      <User className="mr-2" />
                    )}
                    {groupType === "beFriend"
                      ? "Willing to be a Friend"
                      : "Looking for a Friend"}
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {passengers
                      .filter((passenger) => passenger.type === groupType)
                      .map((passenger) => (
                        <div
                          key={passenger.id}
                          className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                          <div className="p-4">
                            <p className="font-bold text-lg text-gray-800 mb-2 flex items-center">
                              <User className="mr-2" size={18} />
                              {passenger.name || "N/A"}
                              {passenger.age ? `, ${passenger.age}` : ""}
                            </p>
                            <p className="text-gray-600 flex items-center">
                              <Calendar className="mr-2" size={16} />
                              Date: {passenger.date || "N/A"}
                            </p>
                            <p className="text-gray-600 flex items-center">
                              <MapPin className="mr-2" size={16} />
                              From: {passenger.fromCity || "N/A"}
                            </p>
                            <p className="text-gray-600 flex items-center">
                              <MapPin className="mr-2" size={16} />
                              To: {passenger.toCity || "N/A"}
                            </p>
                            <button
                              onClick={() => handleContact(passenger.phone)}
                              className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center w-full"
                            >
                              <PhoneCall className="mr-2" size={16} />
                              Contact
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  {passengers.filter(
                    (passenger) => passenger.type === groupType
                  ).length === 0 && (
                    <div className="text-gray-500 text-center">
                      No passengers found in this category.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sign In Modal */}
        {showSignIn && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-6 text-teal-700">
                Sign In to Sky Buddy
              </h2>
              <p className="mb-4 text-gray-600">
                {signInReason === "contact"
                  ? "Please sign in to contact other passengers."
                  : "Please sign in to add a new passenger."}
              </p>
              <SignIn />
              <button
                onClick={() => {
                  setShowSignIn(false);
                  setSignInReason("");
                }}
                className="mt-4 text-teal-600 hover:text-teal-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold flex items-center justify-center">
              <PlaneTakeoff className="mr-2" />
              Sky Buddy
            </h3>
            <p className="mt-2 text-sm">
              Connecting travelers, one flight at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkyBuddySimple;
