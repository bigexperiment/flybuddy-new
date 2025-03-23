import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last Updated: May 20, 2023
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to SkyMates ("we," "our," or "us"). By accessing or using our website at SkyMates.co (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Service Description</h2>
        <p>
          SkyMates is a platform designed to connect Nepali travelers with companions who can assist them during their journeys. We do not employ these travel mates directly, nor do we take responsibility for their actions. We simply provide a platform for users to connect with each other.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
        <p>
          You agree not to use the Service:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>In any way that violates any applicable local, state, national, or international law or regulation.</li>
          <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
          <li>To submit false or misleading information.</li>
          <li>To upload or transmit viruses or any other type of malicious code.</li>
          <li>To interfere with or circumvent the security features of the Service.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Content</h2>
        <p>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
        </p>
        <p>
          By posting Content on or through the Service, you represent and warrant that: the Content is yours and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Safety and Verification</h2>
        <p>
          While we strive to maintain a safe platform, we cannot guarantee the identity or intentions of all users. We strongly recommend that users take appropriate precautions when arranging to meet with travel mates, including:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Meeting in public places for initial meetings.</li>
          <li>Informing family or friends about your arrangements.</li>
          <li>Verifying the identity of travel mates where possible.</li>
          <li>Trusting your instincts and declining arrangements that make you uncomfortable.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
        <p>
          In no event shall SkyMates, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:skymatesco@gmail.com" className="text-blue-600 hover:underline">skymatesco@gmail.com</a>.
        </p>
      </div>
      
      <div className="mt-10 border-t pt-6">
        <Link href="/contact" className="text-blue-600 hover:underline">
          Have questions about our Terms? Contact us
        </Link>
      </div>
    </div>
  );
} 