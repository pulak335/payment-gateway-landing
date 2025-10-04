import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            We are committed to protecting your privacy and ensuring the security of your personal and financial information.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Last Updated</h2>
              <p className="text-gray-600">This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ShortlyPay (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) values your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our payment gateway solutions, including our wallet systems in Bangladeshi Taka (BDT) and United States Dollar (USD).
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our services, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Information We Collect</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may collect the following types of information:
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">a) Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Full Name</li>
              <li>Date of Birth</li>
              <li>National ID / Passport Information</li>
              <li>Mobile Number & Email Address</li>
              <li>Residential & Billing Address</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">b) Financial Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Bank Account Details</li>
              <li>Debit/Credit Card Details</li>
              <li>Mobile Financial Services (MFS) Account (bKash, Nagad, Rocket, etc.)</li>
              <li>Transaction History (local & international)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">c) Technical Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Device Information (IP address, browser type, OS, device ID)</li>
              <li>Geo-location data (if enabled)</li>
              <li>Login & authentication records</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">Compliance Data</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>KYC (Know Your Customer) records</li>
              <li>AML/CFT (Anti-Money Laundering / Counter-Terrorist Financing) checks</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use your data to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide payment gateway and wallet services.</li>
              <li>Process transactions in BDT (local) and USD (international).</li>
              <li>Verify identity and prevent fraud.</li>
              <li>Comply with Bangladesh Bank, BFIU, and international financial regulations.</li>
              <li>Improve user experience and develop new features.</li>
              <li>Send security alerts, transaction updates, and customer support messages.</li>
              <li>Conduct risk analysis and ensure compliance with AML/CFT & GDPR.</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sharing of Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Regulators: Bangladesh Bank, BFIU, or other regulatory authorities (if required by law).</li>
              <li>Financial Partners: Banks, card networks (Visa, Mastercard), and MFS providers.</li>
              <li>International Partners: For USD wallet transactions, cross-border settlement partners.</li>
              <li>Service Providers: Cloud hosting, KYC/AML providers, fraud detection tools.</li>
              <li>Law Enforcement: If required under applicable laws.</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Retention</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Local (BDT transactions): Stored in compliance with Bangladesh Bank & BFIU guidelines (minimum 5 years).</li>
              <li>International (USD transactions): Stored as per GDPR and PCI-DSS requirements.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We retain data only as long as necessary for compliance, legal, and business purposes.
            </p>
          </div>

          {/* Security Measures */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Security Measures</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We apply industry-standard security practices including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>PCI-DSS Compliance for card transactions.</li>
              <li>Data Encryption (AES-256, SSL/TLS).</li>
              <li>Two-Factor Authentication (2FA).</li>
              <li>Fraud & Risk Monitoring Systems.</li>
              <li>Secure Cloud Hosting (ISO 27001 certified servers).</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depending on jurisdiction, you may:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access your personal data.</li>
              <li>Request corrections or updates.</li>
              <li>Request deletion (subject to regulatory requirements).</li>
              <li>Withdraw consent for marketing communication.</li>
              <li>File a complaint with the Bangladesh authorities or GDPR regulators.</li>
            </ul>
          </div>

          {/* Cross-Border Data Transfers */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cross-Border Data Transfers</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Data for USD wallets may be processed outside Bangladesh in secure international servers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We ensure transfers comply with GDPR standard contractual clauses and global financial data regulations.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for individuals under 18 years old.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Changes to this Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. Users will be notified of significant changes via email or app notification.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For questions or concerns about this Privacy Policy:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="text-gray-700 font-semibold">ShortlyPay</p>
              <p className="text-gray-700">Registered Address: [Insert Address]</p>
              <p className="text-gray-700">Email: [Insert Contact Email]</p>
              <p className="text-gray-700">Phone: [Insert Support Number]</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Have Questions About Privacy?</h3>
            <p className="text-purple-100 mb-6">
              Our team is here to help you understand how we protect your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Contact Us
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
