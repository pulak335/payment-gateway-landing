"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section for Features */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Unlock the Full Potential of Your Business
          </h1>
          <p className="text-xl mb-10 opacity-90">
            Discover a suite of powerful features designed to streamline your operations, enhance security, and drive growth.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Comprehensive Features for Every Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Payments</h3>
                  <p className="text-gray-600">Accept payments globally with ease, supporting multiple currencies and payment methods.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                  <p className="text-gray-600">Protect your transactions and customer data with PCI-DSS compliant security measures.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
                  <p className="text-gray-600">Utilize intelligent fraud detection tools to minimize risks and chargebacks.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-2">Reporting & Analytics</h3>
                  <p className="text-gray-600">Gain deep insights into your sales and customer behavior with comprehensive reports.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold mb-2">Developer-Friendly APIs</h3>
                  <p className="text-gray-600">Integrate quickly and customize your payment experience with robust and well-documented APIs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Access dedicated support whenever you need it, ensuring smooth operations around the clock.</p>
                </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of businesses that trust us for their payment solutions. Explore our features and see how we can help you grow.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Contact Sales
          </Button>
        </div>
      </section>

    </div>
  );
}