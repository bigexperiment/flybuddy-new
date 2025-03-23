import Link from "next/link";
import { FaPlane, FaUserFriends, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <FaPlane className="text-blue-600 text-5xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SkyMates: Connecting Nepali Elderly Travelers with Compassionate Companions ✈️
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ensuring no elder travels alone. Find a travel companion who speaks your language and understands your culture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/add" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Add New Travel Mate
            </Link>
            <Link href="/travel-mates" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Find Travel Mates
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 rounded-xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create a profile with your travel details and specify whether you need a companion or can offer help.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Match</h3>
              <p className="text-gray-600">
                Browse available travelers and companions based on travel dates and routes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 w-12 h-12 rounded-full mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Contact your potential travel mate, coordinate details, and enjoy a stress-free journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyMates?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Cultural Connection</h3>
                <p className="text-gray-600">
                  Travel with someone who speaks your language and understands your customs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
                <p className="text-gray-600">
                  Family members can rest easy knowing their loved ones aren't traveling alone.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                <p className="text-gray-600">
                  Our service is built on the spirit of community help and cultural solidarity.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
                <p className="text-gray-600">
                  No fees, commissions, or hidden costs. SkyMates is a free community service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SkyMates */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              SkyMates was born from a personal experience that many Nepali families share. 
              We recognized the challenges elderly travelers face when navigating international 
              flights and created a community-based solution.
            </p>
            <p className="text-gray-600 mb-6">
              Our platform connects those who need assistance with compassionate travel 
              companions who share the same language and cultural background.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Learn more about our mission
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg">
              <blockquote className="italic text-gray-700 mb-4">
                "SkyMates helped my mother travel from Kathmandu to Boston with a kind student 
                who was going to the same city. The peace of mind it gave our family was priceless."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  RS
                </div>
                <div className="ml-3">
                  <p className="font-medium">Ramesh Shrestha</p>
                  <p className="text-sm text-gray-500">Boston, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white rounded-xl p-8 text-center my-16">
        <h2 className="text-3xl font-bold mb-4">Ready to find your SkyMate?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join our community today and make travel more comfortable for yourself or help an elder in need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/add" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Add New Travel Mate
          </Link>
          <Link href="/travel-mates" className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors">
            Find Travel Mates
          </Link>
        </div>
      </section>
    </div>
  );
}
