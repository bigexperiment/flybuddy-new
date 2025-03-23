'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Blog post type definition
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage: string;
  category: 'travel-tips' | 'success-stories' | 'announcements' | 'community';
  date: string;
  imageSrc: string;
  slug: string;
  relatedPosts?: number[];
};

export default function BlogPostPage() {
  const params = useParams();
  const { slug } = params;
  
  // Sample blog posts data (in a real app, you would fetch this from an API)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Tips for Helping Elderly Travelers Navigate International Airports",
      excerpt: "International travel can be overwhelming, especially for elderly travelers. Here are practical tips for helping elderly travelers navigate complex airport procedures and ensure a smooth journey.",
      content: `
        <p>International travel can be a daunting experience for anyone, but it can be particularly challenging for elderly travelers who may face mobility issues, language barriers, or confusion with complex airport procedures. If you're accompanying an elderly family member or acting as a travel companion through SkyMates, here are ten practical tips to help make the journey smoother and more comfortable.</p>

        <h2>1. Arrive Early – Very Early</h2>
        <p>For international flights with elderly travelers, plan to arrive at least 3 hours before departure. This extra time accounts for slower walking pace, potential need for rest breaks, and allows for a less stressful check-in experience. Rushing creates anxiety and increases the risk of forgetting important items.</p>

        <h2>2. Request Special Assistance in Advance</h2>
        <p>Most airlines offer complementary wheelchair service and special assistance for elderly travelers. Book this service when you purchase tickets, and confirm 24-48 hours before your flight. This service often includes priority boarding and assistance navigating through security and to the gate.</p>

        <h2>3. Pack Essential Medications in Carry-on Luggage</h2>
        <p>Make sure all necessary medications are packed in carry-on bags, never in checked luggage. Keep medications in their original containers with prescription labels. Bring a letter from the doctor explaining the medications, especially for injections or liquid medications that might need special clearance at security.</p>

        <h2>4. Create a Simple Airport Navigation Card</h2>
        <p>For travelers who might get separated or confused, create a small card (in both English and their native language) with: flight information, gate numbers, emergency contact information, and a brief note explaining they may need assistance. This can be invaluable if they need to ask for help.</p>

        <h2>5. Dress for Comfort and Practicality</h2>
        <p>Recommend loose, comfortable clothing in layers to adjust to changing temperatures. Shoes should be easy to remove for security and comfortable for walking. Avoid items that might trigger additional security screening, like large metal jewelry or belts with large buckles.</p>

        <h2>6. Stay Hydrated and Plan for Food</h2>
        <p>Airports can be dehydrating environments. Bring an empty water bottle to fill after security. Pack easily digestible snacks like nuts, dried fruits, or crackers. Be aware of dietary restrictions and how they might impact meal choices at the airport.</p>

        <h2>7. Navigate Security with Patience</h2>
        <p>Security can be the most stressful part of the airport experience. Explain the process step by step before reaching the checkpoint. Request a private screening if necessary for travelers with medical devices or mobility aids. Stay patient and speak calmly throughout the process.</p>

        <h2>8. Find Quiet Areas for Waiting</h2>
        <p>Airport terminals can be overwhelmingly busy and noisy. Many airports have quiet areas, prayer rooms, or less crowded gates where elderly travelers can rest. Some international airports also have special lounges for elderly or passengers needing assistance, even without business class tickets.</p>

        <h2>9. Board Strategically</h2>
        <p>Take advantage of priority boarding for elderly passengers. However, if the flight is long, sometimes it's better to board later (while still ensuring overhead bin space) to minimize time spent sitting on the aircraft. Make this decision based on the individual's comfort level and mobility.</p>

        <h2>10. Communicate with Flight Attendants</h2>
        <p>Once aboard, discreetly inform flight attendants if your elderly companion has any special needs or concerns. Flight attendants can provide extra attention, help with meals, or assist with mobility during the flight.</p>

        <h2>Conclusion</h2>
        <p>With proper planning and these helpful strategies, international airport navigation can become much less stressful for elderly travelers. Remember that the goal is not just to get from point A to point B, but to ensure the journey itself is comfortable, dignified, and as enjoyable as possible. By serving as a knowledgeable companion and advocate, you can make a tremendous difference in the travel experience of an elderly person.</p>
      `,
      author: "Aarav Sharma",
      authorBio: "Aarav is a frequent traveler and volunteer who has helped dozens of elderly Nepali travelers navigate international airports. He works as a travel consultant specializing in accessible travel.",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      category: "travel-tips",
      date: "January 15, 2023",
      imageSrc: "/images/blog/airport-assistance.jpg",
      slug: "tips-elderly-travelers-airports",
      relatedPosts: [4, 7, 9]
    },
    {
      id: 2,
      title: "How Kumari Helped Her 78-Year-Old Grandfather Travel to Australia",
      excerpt: "A heartwarming story of how a college student helped her grandfather travel from Kathmandu to Sydney, using SkyMates to find a companion for the portions of the journey she couldn't accompany him on.",
      content: `
        <p>When Kumari Thapa's grandfather expressed his wish to attend her university graduation in Sydney, Australia, she was both excited and concerned. At 78, Dil Bahadur Thapa had never traveled outside Nepal, didn't speak English, and had some mobility issues that made the prospect of a 16+ hour journey daunting.</p>

        <p>"My grandfather raised me after my parents moved to Australia for work when I was young," explains Kumari, now a 22-year-old nursing student at the University of Sydney. "Having him at my graduation meant everything to me, but I couldn't fly back to Nepal to accompany him the entire way."</p>

        <h2>The Challenge</h2>
        <p>The journey from Kathmandu to Sydney would involve multiple flights, layovers in unfamiliar airports, and navigating complex immigration procedures. While Kumari could arrange to meet her grandfather during his layover in Singapore, there was still the initial leg from Kathmandu to Singapore that concerned her.</p>

        <p>"My grandfather is quite independent and stubborn," Kumari laughs. "He insisted he could travel alone, but I knew that the international airport experience would be overwhelming for him. That's when a friend suggested I look into SkyMates."</p>

        <h2>Finding a SkyMate</h2>
        <p>Through the SkyMates platform, Kumari posted the details of her grandfather's journey, specifically looking for someone traveling from Kathmandu to Singapore on the same flight. Within three days, she connected with Anish, a 30-year-old Nepali professional returning to his job in Singapore.</p>

        <p>"I was already planning to fly home that weekend, so adjusting my return flight to match with Kumari's grandfather was easy," explains Anish. "As someone who travels this route regularly, I knew I could help him navigate the Kathmandu airport, assist with check-in, and make sure he was comfortable during the flight."</p>

        <h2>Preparation Makes Perfect</h2>
        <p>Kumari created a detailed information packet for both her grandfather and Anish, including:</p>
        <ul>
          <li>A step-by-step itinerary with times, gate numbers, and seat assignments</li>
          <li>Copies of all travel documents</li>
          <li>A list of medications and when they should be taken</li>
          <li>Contact information for family members at each destination</li>
          <li>A simple English phrase card for emergencies</li>
        </ul>

        <p>"We also arranged a video call so my grandfather could meet Anish before the journey," says Kumari. "This helped establish trust and made my grandfather more comfortable with the arrangement."</p>

        <h2>The Journey</h2>
        <p>On the day of travel, Anish met Dil Bahadur at the Kathmandu airport three hours before departure. He helped with check-in, explained security procedures, and ensured that Dil Bahadur's medication was properly packed in his carry-on luggage.</p>

        <p>"During the flight, I translated the flight attendant's instructions, helped him select his meal, and made sure he stayed hydrated," Anish recalls. "We actually had a wonderful time conversing in Nepali. He told me stories about traditional farming in his village, and I shared my experiences of working abroad."</p>

        <p>Upon arrival in Singapore, Anish helped Dil Bahadur navigate to the correct terminal where Kumari was waiting. The handover went smoothly, and Kumari was able to accompany her grandfather for the remainder of the journey to Sydney.</p>

        <h2>A Successful Graduation and Return Journey</h2>
        <p>Dil Bahadur attended Kumari's graduation ceremony in Sydney with the rest of her family. "Seeing my grandfather in the audience, watching me receive my nursing degree, was one of the most emotional moments of my life," Kumari shares. "The fact that SkyMates helped make this possible means so much to our family."</p>

        <p>For the return journey, Kumari used SkyMates again, this time finding a Nepali medical student returning to Kathmandu who could assist her grandfather from Singapore after Kumari accompanied him on the first leg of the journey.</p>

        <h2>The Ripple Effect</h2>
        <p>"After this experience, my grandfather has become something of an advocate for SkyMates in his community," Kumari laughs. "He's encouraged two of his friends to use the service for their own international journeys to visit family."</p>

        <p>Anish, too, has become a regular travel companion on the platform, having helped three more elderly travelers since his journey with Dil Bahadur.</p>

        <p>"What I love about this service is that it leverages the existing travel patterns of our community," he reflects. "I was already making that journey anyway, and being able to help an elderly person along the way creates a beautiful connection between generations."</p>

        <p>Stories like Kumari's demonstrate how SkyMates is fulfilling its mission of ensuring that no elder has to travel alone, creating connections within the Nepali diaspora that span both geography and generations.</p>
      `,
      author: "Priya Thapa",
      authorBio: "Priya is a journalist who specializes in writing about the Nepali diaspora and cross-cultural experiences. She has written extensively about how technology is helping bridge communities across borders.",
      authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
      category: "success-stories",
      date: "February 3, 2023",
      imageSrc: "/images/blog/family-reunion.jpg",
      slug: "kumari-grandfather-australia-journey",
      relatedPosts: [5, 8, 3]
    },
  ];
  
  // Find the current blog post based on the slug
  const currentPost = blogPosts.find(post => post.slug === slug);
  
  // Get related posts if they exist
  const relatedPosts = currentPost?.relatedPosts
    ? blogPosts.filter(post => currentPost.relatedPosts?.includes(post.id))
    : [];
  
  // Function to get category badge color
  const getCategoryColorClass = (category: string) => {
    switch(category) {
      case 'travel-tips': return 'bg-blue-100 text-blue-800';
      case 'success-stories': return 'bg-green-100 text-green-800';
      case 'announcements': return 'bg-purple-100 text-purple-800';
      case 'community': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Function to get category name for display
  const getCategoryDisplayName = (category: string) => {
    switch(category) {
      case 'travel-tips': return 'Travel Tips';
      case 'success-stories': return 'Success Stories';
      case 'announcements': return 'Announcements';
      case 'community': return 'Community';
      default: return category;
    }
  };
  
  // If post not found, show error
  if (!currentPost) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or may have been removed.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
          </div>
          
          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="relative h-64 sm:h-96 w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Featured Image: {currentPost.imageSrc}</span>
              </div>
              {/* Uncomment when images are available
              <Image 
                src={currentPost.imageSrc} 
                alt={currentPost.title} 
                fill
                className="object-cover"
              />
              */}
            </div>
            
            <div className="p-6 sm:p-8">
              {/* Category and Date */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs px-2 py-1 rounded ${getCategoryColorClass(currentPost.category)}`}>
                  {getCategoryDisplayName(currentPost.category)}
                </span>
                <span className="flex items-center text-gray-500 text-sm">
                  <FaCalendarAlt className="mr-1" /> {currentPost.date}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentPost.title}
              </h1>
              
              {/* Author Info */}
              <div className="flex items-center mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={currentPost.authorImage} 
                    alt={currentPost.author} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">{currentPost.author}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
              
              {/* Social Sharing */}
              <div className="border-t border-gray-100 mt-8 pt-6">
                <p className="text-gray-600 mb-2">Share this article:</p>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaFacebook size={20} />
                  </button>
                  <button className="text-blue-400 hover:text-blue-600">
                    <FaTwitter size={20} />
                  </button>
                  <button className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </article>
          
          {/* Author Bio */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About the Author</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image 
                  src={currentPost.authorImage} 
                  alt={currentPost.author} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{currentPost.author}</h3>
                <p className="text-gray-600">{currentPost.authorBio}</p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    <div className="relative h-40 w-full">
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Image: {post.imageSrc}</span>
                      </div>
                      {/* Uncomment when images are available
                      <Image 
                        src={post.imageSrc} 
                        alt={post.title} 
                        fill
                        className="object-cover"
                      />
                      */}
                    </div>
                    <div className="p-4 flex-grow">
                      <span className={`text-xs px-2 py-1 rounded ${getCategoryColorClass(post.category)}`}>
                        {getCategoryDisplayName(post.category)}
                      </span>
                      <h3 className="text-lg font-semibold mt-2 mb-2">
                        <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-blue-600">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enjoyed this article?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive more travel tips, success stories, and community updates.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 