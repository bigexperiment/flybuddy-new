import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last Updated: May 20, 2023
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          SkyMates ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website at SkyMates.co (the "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p>
          We collect several types of information from and about users of our Service, including:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Personal information such as name, email address, and phone number when you register for an account.</li>
          <li>Travel details including dates, destinations, and specific travel needs when you post a travel request or offer assistance.</li>
          <li>Information about your internet connection, the equipment you use to access our Service, and usage details.</li>
          <li>Communications between users when using our messaging system.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>
          We use information that we collect about you or that you provide to us:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>To present our Service and its contents to you.</li>
          <li>To connect travelers with appropriate travel mates based on travel details and preferences.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To notify you about changes to our Service or any products or services we offer.</li>
          <li>To improve our Service and user experience.</li>
          <li>For any other purpose with your consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
        <p>
          We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>To other users of the Service in order to facilitate connections between travelers and travel mates.</li>
          <li>To contractors, service providers, and other third parties we use to support our business.</li>
          <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
          <li>To enforce or apply our terms of service and other agreements.</li>
          <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of SkyMates, our users, or others.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Service. Any transmission of personal information is at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Access and receive a copy of your personal data.</li>
          <li>Rectify inaccurate personal data.</li>
          <li>Request the deletion of your personal data.</li>
          <li>Restrict the processing of your personal data.</li>
          <li>Object to the processing of your personal data.</li>
          <li>Request the transfer of your personal data to another party.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at skymatesco@gmail.com.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
        <p>
          Our Service is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information on our Service. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to Our Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will post the new privacy policy on this page and notify you through a notice on the main page of our Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Information</h2>
        <p>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at <a href="mailto:skymatesco@gmail.com" className="text-blue-600 hover:underline">skymatesco@gmail.com</a>.
        </p>
      </div>
      
      <div className="mt-10 border-t pt-6">
        <Link href="/contact" className="text-blue-600 hover:underline">
          Have questions about our Privacy Policy? Contact us
        </Link>
      </div>
    </div>
  );
} 