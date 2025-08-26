"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

const DemoFeature = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    demoType: 'full-platform',
    preferredDate: '',
    preferredTime: '',
    attendees: '1-2',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We\'ll contact you within 24 hours to confirm your demo appointment.');
  };

  const demoFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-time Analytics",
      description: "See live transaction data, revenue insights, and customer behavior patterns in action."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security Features",
      description: "Experience our fraud detection, PCI compliance, and encryption capabilities firsthand."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Integration Demo",
      description: "Watch how easily our APIs integrate with your existing systems and platforms."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M4 12h.01M8 12h.01M16 12h.01M20 12h.01M4 4h.01M8 4h.01M16 4h.01M20 4h.01M4 20h.01M8 20h.01M16 20h.01M20 20h.01" />
        </svg>
      ),
      title: "QR Payments",
      description: "See our QR payment system in action with instant transaction processing."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Invoice Generation",
      description: "Experience our automated invoice creation and payment tracking system."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Mobile App",
      description: "Explore our mobile application for merchants and customers on the go."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Schedule Demo
          </div>
          <h1 className="text-5xl font-bold mb-6">
            See ShortlyPay in <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Action</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience our powerful payment gateway firsthand. Book a personalized demo and discover 
            how ShortlyPay can transform your business operations and boost your revenue.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Demo Form */}
            <div className="mb-12 lg:mb-0">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Schedule Your Demo</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll contact you within 24 hours to confirm your demo appointment.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@yourcompany.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Inc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select 
                      id="businessType" 
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="ecommerce">eCommerce</option>
                      <option value="retail">Retail</option>
                      <option value="services">Professional Services</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="nonprofit">Non-Profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 mb-2">
                        Demo Type *
                      </label>
                      <select 
                        id="demoType" 
                        name="demoType"
                        value={formData.demoType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="full-platform">Full Platform Demo</option>
                        <option value="payment-processing">Payment Processing</option>
                        <option value="security-features">Security Features</option>
                        <option value="integration">Integration Demo</option>
                        <option value="custom">Custom Demo</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Attendees
                      </label>
                      <select 
                        id="attendees" 
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="1-2">1-2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="10+">10+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input 
                        type="date" 
                        id="preferredDate" 
                        name="preferredDate" 
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select 
                        id="preferredTime" 
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us about your specific needs, questions, or any particular features you'd like to see..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Schedule Demo
                  </Button>
                </form>
              </div>
            </div>

            {/* Demo Features & Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">What You'll See in the Demo</h2>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {demoFeatures.map((feature, index) => (
                  <DemoFeature key={index} {...feature} />
                ))}
              </div>

              {/* Demo Benefits */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Demo Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Personalized Experience</h4>
                      <p className="text-gray-600 text-sm">Tailored demo based on your business needs and industry</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Live Q&A Session</h4>
                      <p className="text-gray-600 text-sm">Get answers to your specific questions in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Technical Deep Dive</h4>
                      <p className="text-gray-600 text-sm">Explore integration options and technical requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pricing Discussion</h4>
                      <p className="text-gray-600 text-sm">Get detailed pricing information and plan recommendations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">demo@shortlypay.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-700">Live chat available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
