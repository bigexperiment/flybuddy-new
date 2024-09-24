

import React, { useState, useEffect, useRef } from "react";
import {
  PlaneTakeoff,
  UserPlus,
  PhoneCall,
  Calendar,
  MapPin,
  User,
  Info,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignUp,
  useUser,
  useAuth,
  useClerk,
} from "@clerk/clerk-react";
import InputMask from 'react-input-mask';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import { Helmet } from "react-helmet";
import { parseISO, isWithinInterval } from 'date-fns';

// for testing
// const API_URL = "http://localhost:3000/api";
// comments
// for production

const API_URL = "https://server-chi-blush.vercel.app/api";

const SkyMatesSimple = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const { openSignIn, signOut } = useClerk();
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
    airlines: "",
    comments: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [dateFilter, setDateFilter] = useState({ start: "", end: "" });
  const formRef = useRef(null);

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
      alert("Failed to load passengers. Please try again later.");
      // Set passengers to an empty array instead of using setError
      setPassengers([]);
    }
  };

  const handleInputChange = (e, value = null) => {
    let name, inputValue;
    
    if (e && e.target) {
      // Regular input change
      ({ name, value: inputValue } = e.target);
    } else if (typeof e === 'string' && value !== null) {
      // Phone input mask
      name = e;
      inputValue = value;
    } else {
      console.error('Invalid input in handleInputChange');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'age' ? (inputValue === '' ? '' : Number(inputValue)) : inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      const dataToSend = {
        name: formData.name,
        age: parseInt(formData.age),
        type: formData.type,
        date: formData.date,
        fromCity: formData.fromCity,
        toCity: formData.toCity,
        phone: formData.phone,
        email: user.primaryEmailAddress.emailAddress, // Add this line
        airlines: formData.airlines,
        comments: formData.comments
      };
      console.log("Submitting form data:", dataToSend);
      const response = await fetch(`${API_URL}/passengers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataToSend),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server response:", errorData);
        throw new Error(errorData.details || "Failed to add passenger");
      }
      const newPassenger = await response.json();
      console.log("New passenger added:", newPassenger);

      // Fetch the updated list of passengers
      await fetchPassengers();

      setFormData({
        type: "",
        name: "",
        age: "",
        date: "",
        fromCity: "",
        toCity: "",
        phone: "",
        airlines: "",
        comments: "",
      });
      // Add a success message
      alert("Passenger added successfully!");
    } catch (error) {
      console.error("Error adding passenger:", error);
      setError(`Failed to add passenger: ${error.message}`);
      // Display the error to the user
      alert(`Error: ${error.message}`);
    }
  };

  const handleContact = () => {
    setShowContactPopup(true);
  };

  const handleAddPassengerClick = () => {
    if (!user) {
      setSignInReason("add");
      setShowSignIn(true);
    } else {
      // Scroll to the form
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      // Pre-select "Willing to be a friend"
      setFormData(prevData => ({
        ...prevData,
        type: "beFriend"
      }));
    }
  };

  const formatName = (fullName) => {
    if (!user) {
      const names = fullName.split(' ');
      if (names.length > 1) {
        return names[0] + ' ' + '*'.repeat(names.slice(1).join(' ').length);
      }
      return fullName; // Return the full name if it's just one word
    }
    return fullName;
  };

  const handleSignIn = () => {
    if (!user) {
      openSignIn();
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  const filterPassengersByDateRange = (passenger) => {
    if (!dateFilter.start && !dateFilter.end) return true;
    const passengerDate = parseISO(passenger.date);
    const startDate = dateFilter.start ? parseISO(dateFilter.start) : null;
    const endDate = dateFilter.end ? parseISO(dateFilter.end) : null;

    if (startDate && endDate) {
      return isWithinInterval(passengerDate, { start: startDate, end: endDate });
    } else if (startDate) {
      return passengerDate >= startDate;
    } else if (endDate) {
      return passengerDate <= endDate;
    }
    return true;
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (window.location.pathname === '/contact') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <header className="bg-gradient-to-r from-indigo-400 to-purple-400 text-white py-4 px-6 shadow-md">
          <h1 className="text-3xl font-bold flex items-center">
            <PlaneTakeoff className="mr-2" />
            SkyMates.co - Contact Us
          </h1>
        </header>
        <main className="flex-grow container mx-auto py-8 px-4">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Information</h2>
            <p className="mb-2"><strong>Email:</strong> skymatesco@gmail.com</p>
            <p><strong>Phone:</strong> +1 714-485-9360</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-bold flex items-center hover:text-blue-200 transition duration-300">
            <PlaneTakeoff className="mr-2" />
            SkyMates.co
          </a>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="/contact" label="Contact" onClick={handleContact} />
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <button
                onClick={() => setShowSignIn(true)}
                className="bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition duration-300"
              >
                Sign In
              </button>
            </SignedOut>
          </nav>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-indigo-700 rounded-md shadow-lg py-2 px-4">
            <nav className="flex flex-col space-y-2">
              <NavLink href="/" label="Home" mobile />
              <NavLink href="#about" label="About" mobile />
              <NavLink href="/contact" label="Contact" onClick={handleContact} mobile />
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition duration-300 w-full text-center"
                >
                  Sign In
                </button>
              </SignedOut>
            </nav>
          </div>
        )}
      </header>

      {/* First Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skymates: Connecting Nepali Elderly Travelers with Compassionate Companions ✈️</h1>
          <p className="text-xl mb-6">
            Ensuring no elder travels alone. We connect elderly Nepali travelers with caring companions who share their language and culture.
          </p>
          <p className="text-lg">
            Make long-distance journeys comfortable and enjoyable for our beloved elders!
          </p>
        </div>
      </div>

      {/* Second Hero Section */}
      <div className="bg-green-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Earn $100 While Making a Difference</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Become a Skymates Companion on Your Next Flight</h3>
          <p className="text-lg mb-8">
            Are you flying soon? Join Skymates and turn your journey into an opportunity to help an elderly Nepali traveler. Share your flight details, and we'll connect you with someone who could use your assistance and company.
          </p>
          <ul className="text-left inline-block mb-8">
            <li className="flex items-center mb-2">
              <CheckCircle className="mr-2 text-white" size={24} />
              <span>Support Your Community: Offer a helping hand to those who need it most.</span>
            </li>
            <li className="flex items-center mb-2">
              <CheckCircle className="mr-2 text-white" size={24} />
              <span>Earn $100 Per Trip: Receive appreciation for your kindness with transparent compensation.</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 text-white" size={24} />
              <span>Simple and Rewarding: List your flight, get matched, and make a meaningful impact.</span>
            </li>
          </ul>
          <button
            onClick={handleAddPassengerClick}
            className="bg-white text-green-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-50 transition duration-300"
          >
            Sign Up to Be a Companion
          </button>
        </div>
      </div>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Add Passenger Panel */}
          <div ref={formRef} className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6">
              <SignedIn>
                <h2 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
                  <UserPlus className="mr-2" />
                  Add New Travel Mate
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex justify-center space-x-6 mb-4">
                    {["needFriend", "beFriend"].map((type) => (
                      <label key={type} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={formData.type === type}
                          onChange={handleInputChange}
                          className="form-radio text-indigo-600 focus:ring-indigo-500"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: User, name: "name", placeholder: "Full Name", type: "text" },
                      { icon: Info, name: "age", placeholder: "Age", type: "number" },
                      { icon: Calendar, name: "date", placeholder: "Date", type: "date" },
                      { icon: MapPin, name: "fromCity", placeholder: "Departure City", type: "text" },
                      { icon: MapPin, name: "toCity", placeholder: "Arrival City", type: "text" },
                      { icon: PlaneTakeoff, name: "airlines", placeholder: "Airlines", type: "text" },
                    ].map((field) => (
                      <div key={field.name} className="flex items-center">
                        <field.icon className="text-gray-400 mr-2" size={20} />
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    ))}
                    <div className="flex items-center">
                      <PhoneCall className="text-gray-400 mr-2" size={20} />
                      <InputMask
                        mask="(999) 999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      >
                        {(inputProps) => (
                          <input
                            {...inputProps}
                            type="tel"
                            placeholder="(123) 456-7890"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                        )}
                      </InputMask>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="text-gray-400 mr-2 self-start mt-2" size={20} />
                    <div className="w-full">
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Comments/Notes (Optional)</label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows="3"
                        value={formData.comments}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                        placeholder="Any additional comments or notes"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center"
                  >
                    <UserPlus className="mr-2" size={20} />
                    Add Passenger
                  </button>
                </form>
              </SignedIn>
              <SignedOut>
                <button
                  onClick={handleAddPassengerClick}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center"
                >
                  <UserPlus className="mr-2" size={20} />
                  Add New Travel Mate
                </button>
              </SignedOut>
            </div>
          </div>

          {/* Passenger Lists */}
          <div className="space-y-12">
            <DateFilter dateFilter={dateFilter} setDateFilter={setDateFilter} />
            {(dateFilter.start || dateFilter.end) && (
              <div className="mb-4 p-2 bg-indigo-100 text-indigo-800 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="mb-2 sm:mb-0">
                  Showing results for: 
                  {dateFilter.start && dateFilter.end
                    ? `${dateFilter.start} to ${dateFilter.end}`
                    : dateFilter.start
                    ? `From ${dateFilter.start}`
                    : `Until ${dateFilter.end}`}
                </span>
                <button
                  onClick={() => setDateFilter({ start: "", end: "" })}
                  className="text-indigo-600 hover:text-indigo-800 self-start sm:self-auto"
                >
                  Clear filter
                </button>
              </div>
            )}
            {["beFriend", "needFriend"].map((groupType) => (
              <div
                key={groupType}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
                    {groupType === "beFriend" ? (
                      <UserPlus className="mr-2" />
                    ) : (
                      <User className="mr-2" />
                    )}
                    {groupType === "beFriend"
                      ? "Ready to Be a Travel Mate"
                      : "Looking for a Travel Mate"}
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {passengers
                      .filter((passenger) => passenger.type === groupType)
                      .filter(filterPassengersByDateRange)
                      .length > 0 ? (
                      passengers
                        .filter((passenger) => passenger.type === groupType)
                        .filter(filterPassengersByDateRange)
                        .map((passenger) => (
                          <div
                            key={passenger.id}
                            className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                          >
                            <div className="p-4">
                              <p className="font-bold text-lg text-gray-800 mb-2 flex items-center">
                                <User className="mr-2" size={18} />
                                {formatName(passenger.name || "N/A")}
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
                              <p className="text-gray-600 flex items-center">
                                <PlaneTakeoff className="mr-2" size={16} />
                                Airlines: {passenger.airlines || "N/A"}
                              </p>
                              <button
                                onClick={handleContact}
                                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center w-full"
                              >
                                <PhoneCall className="mr-2" size={16} />
                                Contact
                              </button>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="col-span-full text-gray-500 text-center py-4">
                        {dateFilter.start || dateFilter.end
                          ? `No passengers available for the selected date range in this category.`
                          : "No passengers available in this category."}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sign In Modal */}
        {showSignIn && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
                Sign In to SkyMates.co
              </h2>
              <p className="mb-4 text-gray-600">
                {signInReason === "contact"
                  ? "Please sign in to contact other travel mates."
                  : "Please sign in to add a new travel mate."}
              </p>
              <SignIn />
              <button
                onClick={() => {
                  setShowSignIn(false);
                  setSignInReason("");
                }}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showContactPopup && (
          <ContactPopup onClose={() => setShowContactPopup(false)} />
        )}

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem 
                question="What is Skymates, and how does it work?" 
                answer="Skymates is a platform that connects elderly Nepali travelers with compassionate companions who are traveling on the same flight. Our mission is to ensure that elders never have to travel alone. If you're seeking a friend for your journey, you can list your travel details on our website under 'Looking for a Friend,' and we will find a suitable companion for you. The total cost is $110, which includes a $10 service fee and $100 paid directly to the companion as a token of appreciation."
              />
              <FAQItem 
                question="How do I request a companion or list myself as 'looking for a friend'?" 
                answer="Simply click on the 'Find a Friend for My Journey' button on our website. You'll provide your flight details, any specific needs, and complete the payment. We will then match you with a verified companion who is traveling on the same flight and connect you before the trip."
              />
              <FAQItem 
                question="Who are the companions, and how are they selected?" 
                answer="Our companions are trusted members of the Nepali community who are already planning to travel. They sign up on our platform to offer assistance and companionship to elderly travelers. We conduct thorough verification checks to ensure they share the same language and cultural understanding, making your journey comfortable and safe."
              />
              <FAQItem 
                question="How does Skymates ensure the safety and security of elderly travelers?" 
                answer="Safety is our top priority. We verify the identities of all companions and provide you with their profiles for review and approval before confirming the match. Open communication before the trip helps build trust, and we collect feedback after each journey to maintain high standards."
              />
              <FAQItem 
                question="What are the costs involved in using Skymates?" 
                answer="The total cost is $110, which includes: $100 paid directly to the companion as a token of appreciation, and $10 service fee to support the operation of the platform and customer support. There are no hidden fees or additional charges."
              />
              <FAQItem 
                question="Can I communicate with the companion before the trip?" 
                answer="Yes, absolutely. Once we have matched you with a companion, we'll provide their contact information. We encourage you or your family members to reach out, introduce yourselves, and coordinate meeting details at the airport. This helps ensure both parties are comfortable and prepared for the journey."
              />
              <FAQItem 
                question="What are the responsibilities of the companion during the trip?" 
                answer="The companion assists the elderly traveler with: Pre-Flight: Helping with check-in, baggage handling, and navigating security procedures. During Flight: Assisting with boarding, finding seats, and attending to any in-flight needs. Post-Flight: Guiding through disembarking, baggage claim, and connecting with onward transportation. Their presence provides comfort, assistance, and peace of mind throughout the journey."
              />
              <FAQItem 
                question="How do companions receive their $100 payment?" 
                answer="After the successful completion of the trip, we process the companion's $100 payment within 24 hours. Companions can choose their preferred method of payment during sign-up, such as direct deposit or electronic transfer."
              />
              <FAQItem 
                question="How does Skymates protect my privacy and personal information?" 
                answer="We take your privacy seriously. Personal information is securely stored and only shared with the matched companion for the purpose of facilitating your journey. We use encryption and strict data protection measures to safeguard your data. Please review our Privacy Policy for complete details."
              />
              <FAQItem 
                question="Is there any support available during the trip in case of issues?" 
                answer="Yes, our customer support team is available to assist with any concerns before, during, or after the trip. You can reach us via phone or email, and we recommend saving our contact information for easy access in case you need assistance during your journey."
              />
              <FAQItem 
                question="How can I become a companion, and what are the requirements?" 
                answer="If you're traveling soon and wish to help an elder, you can sign up to become a Skymates companion. Click on the 'Sign Up to Be a Companion' button on our website. Requirements include: Language Proficiency: Ability to communicate effectively in Nepali. Verification: Complete our verification process to ensure safety. Willingness to Assist: A compassionate attitude towards helping elderly travelers. As a companion, you'll receive $100 as appreciation for your assistance after the trip."
              />
              <FAQItem 
                question="Have more questions or need assistance?" 
                answer="We're here to help! If you have any additional questions or need assistance, please contact our support team at: Email: skymatesco@gmail.com, Phone: (714) 485-9360. We are dedicated to making your travel experience safe, comfortable, and enjoyable."
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold flex items-center mb-4 text-blue-600">
                <PlaneTakeoff className="mr-2" />
                Skymates
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Connecting Nepali elderly travelers with compassionate companions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-4 text-lg text-blue-600">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg text-blue-600">Contact Us</h4>
              <a href="mailto:skymatesco@gmail.com" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center mb-2">
                <Mail className="mr-2" size={16} />
                skymatesco@gmail.com
              </a>
              <a href="tel:+17144859360" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center mb-4">
                <Phone className="mr-2" size={16} />
                +1 714-485-9360
              </a>
              {user ? (
                <div className="text-sm text-gray-600">
                  <span className="mr-2">Hello, {user.firstName || user.username}</span>
                  <button
                    onClick={handleSignOut}
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-sm text-gray-600 text-center">
              &copy; {new Date().getFullYear()} Skymates.co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const DateFilter = ({ dateFilter, setDateFilter }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Filter by Date Range
    </label>
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
      <div className="flex-1 mb-2 sm:mb-0">
        <label htmlFor="startDate" className="block text-xs text-gray-500 mb-1">Start Date</label>
        <div className="flex items-center">
          <Calendar className="text-gray-400 mr-2" size={20} />
          <input
            type="date"
            id="startDate"
            value={dateFilter.start}
            onChange={(e) => setDateFilter(prev => ({ ...prev, start: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex-1">
        <label htmlFor="endDate" className="block text-xs text-gray-500 mb-1">End Date</label>
        <div className="flex items-center">
          <Calendar className="text-gray-400 mr-2" size={20} />
          <input
            type="date"
            id="endDate"
            value={dateFilter.end}
            onChange={(e) => setDateFilter(prev => ({ ...prev, end: e.target.value }))}
            min={dateFilter.start}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
    {(dateFilter.start || dateFilter.end) && (
      <button
        onClick={() => setDateFilter({ start: "", end: "" })}
        className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm"
      >
        Clear filter
      </button>
    )}
  </div>
);

const ContactPopup = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Us</h2>
      <p className="mb-4 text-gray-600">
        Please contact us to get connected to this passenger.
      </p>
      <p className="mb-2 flex items-center">
        <Mail className="mr-2" size={16} />
        <a href="mailto:skymatesco@gmail.com" className="text-indigo-600 hover:underline">
          skymatesco@gmail.com
        </a>
      </p>
      <p className="mb-4 flex items-center">
        <Phone className="mr-2" size={16} />
        <a href="tel:+17144859360" className="text-indigo-600 hover:underline">
          +1 714-485-9360
        </a>
      </p>
      <button
        onClick={onClose}
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      >
        Close
      </button>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-blue-600">{question}</h3>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
      </button>
      {isOpen && (
        <p className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

// New NavLink component for cleaner code
const NavLink = ({ href, label, onClick, mobile }) => (
  <a
    href={href}
    className={`hover:text-blue-200 transition duration-300 ${mobile ? 'block py-2' : ''}`}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    }}
  >
    {label}
  </a>
);

export default SkyMatesSimple;

