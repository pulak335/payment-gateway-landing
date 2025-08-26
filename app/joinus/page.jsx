"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

const FormStep = ({ step, currentStep, title, description, children }) => (
  <div className={`transition-all duration-500 ${currentStep === step ? 'block opacity-100' : 'hidden opacity-0'}`}>
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-2xl font-bold mb-4">
        {step}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
    {children}
  </div>
);

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
    <div 
      className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
    ></div>
  </div>
);

export default function JoinUsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Join ShortlyPay
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Start Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Payment Journey</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that trust ShortlyPay for their payment solutions. 
            Get started in minutes with our simple onboarding process.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Progress</h2>
              <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
            </div>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            
            {/* Step Indicators */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step <= currentStep 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? '✓' : step}
                  </div>
                  <div className={`text-xs mt-2 text-center ${
                    step <= currentStep ? 'text-purple-600 font-medium' : 'text-gray-500'
                  }`}>
                    {step === 1 && 'Business Info'}
                    {step === 2 && 'Contact Details'}
                    {step === 3 && 'Technical Info'}
                    {step === 4 && 'Plan Selection'}
                    {step === 5 && 'Documents'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Business Information */}
              <FormStep 
                step={1} 
                currentStep={currentStep}
                title="Business Information"
                description="Tell us about your business and what you're looking to achieve"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="registeredName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Registered Name *
                      </label>
                      <input 
                        type="text" 
                        id="registeredName" 
                        name="registeredName" 
                        placeholder="Your Company LLC"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">Legal business name as registered</p>
                    </div>
                    <div>
                      <label htmlFor="tradingName" className="block text-sm font-medium text-gray-700 mb-2">
                        Trading Name / DBA *
                      </label>
                      <input 
                        type="text" 
                        id="tradingName" 
                        name="tradingName" 
                        placeholder="yourdomain.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">Brand name or website domain</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Business *
                      </label>
                      <select 
                        id="businessType" 
                        name="businessType"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select business type</option>
                        <option value="ecommerce">eCommerce</option>
                        <option value="fcommerce">Facebook Commerce</option>
                        <option value="it">Information Technology</option>
                        <option value="education">Education</option>
                        <option value="charity">Charity / Donation</option>
                        <option value="service">Service Platform</option>
                        <option value="gaming">Gaming</option>
                        <option value="membership">Membership System</option>
                        <option value="events">Event Tickets</option>
                        <option value="consultancy">Consultancy Service</option>
                        <option value="health">Health Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="legalIdentity" className="block text-sm font-medium text-gray-700 mb-2">
                        Legal Identity *
                      </label>
                      <select 
                        id="legalIdentity" 
                        name="legalIdentity"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select legal structure</option>
                        <option value="sole">Sole Proprietor</option>
                        <option value="partnership">Partnership</option>
                        <option value="private">Private Limited</option>
                        <option value="public">Public Limited</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="government">Government Agency</option>
                        <option value="education">Educational Institution</option>
                        <option value="religious">Religious Entity</option>
                        <option value="ngo">NGO</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="mobilePhone" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Phone *
                      </label>
                      <input 
                        type="tel" 
                        id="mobilePhone" 
                        name="mobilePhone" 
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">For transaction notifications</p>
                    </div>
                    <div>
                      <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        id="businessEmail" 
                        name="businessEmail" 
                        placeholder="contact@yourdomain.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you selling? *
                    </label>
                    <input 
                      type="text" 
                      id="productName" 
                      name="productName" 
                      placeholder="Products, Services, Tickets, Donations, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              </FormStep>

              {/* Step 2: Contact Person Details */}
              <FormStep 
                step={2} 
                currentStep={currentStep}
                title="Contact Person Details"
                description="Who should we contact for account and technical matters?"
              >
                <div className="space-y-8">
                  {/* Accounts Contact */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Accounts Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="accountsFullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="accountsFullName" 
                          name="accountsFullName" 
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="accountsDesignation" className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                        <input 
                          type="text" 
                          id="accountsDesignation" 
                          name="accountsDesignation" 
                          placeholder="Manager, Director, etc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="accountsMobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile *</label>
                        <input 
                          type="tel" 
                          id="accountsMobile" 
                          name="accountsMobile" 
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="accountsEmail" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          id="accountsEmail" 
                          name="accountsEmail" 
                          placeholder="john@yourdomain.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Technical Contact */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technical Contact
                    </h3>
                    <div className="flex items-center mb-4">
                      <input 
                        type="checkbox" 
                        id="sameAsAccounts" 
                        name="sameAsAccounts" 
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="sameAsAccounts" className="ml-2 text-sm text-gray-700">
                        Same as Accounts Contact
                      </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="technicalFullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="technicalFullName" 
                          name="technicalFullName" 
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="technicalDesignation" className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                        <input 
                          type="text" 
                          id="technicalDesignation" 
                          name="technicalDesignation" 
                          placeholder="Developer, Engineer, etc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="technicalMobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile *</label>
                        <input 
                          type="tel" 
                          id="technicalMobile" 
                          name="technicalMobile" 
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="technicalEmail" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          id="technicalEmail" 
                          name="technicalEmail" 
                          placeholder="jane@yourdomain.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FormStep>

              {/* Step 3: Technical Information */}
              <FormStep 
                step={3} 
                currentStep={currentStep}
                title="Technical Information"
                description="Help us understand your technical setup for seamless integration"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700 mb-2">Website URL *</label>
                      <input 
                        type="url" 
                        id="websiteURL" 
                        name="websiteURL" 
                        placeholder="https://yourdomain.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">Your live website URL</p>
                    </div>
                    <div>
                      <label htmlFor="hostingIP" className="block text-sm font-medium text-gray-700 mb-2">Hosting Server IP *</label>
                      <input 
                        type="text" 
                        id="hostingIP" 
                        name="hostingIP" 
                        placeholder="192.168.1.1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">Shared/Dedicated/VPS IP address</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="websiteAddress" className="block text-sm font-medium text-gray-700 mb-2">Website/Facebook Page Address *</label>
                    <input 
                      type="url" 
                      id="websiteAddress" 
                      name="websiteAddress" 
                      placeholder="https://yourdomain.com or Facebook Page URL"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                    <p className="mt-2 text-sm text-gray-500">Where you plan to receive payments</p>
                  </div>
                </div>
              </FormStep>

              {/* Step 4: Plan Selection */}
              <FormStep 
                step={4} 
                currentStep={currentStep}
                title="Choose Your Plan"
                description="Select the plan that best fits your business needs"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Education Plan */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
                        <p className="text-sm text-gray-600 mb-4">For Schools, Colleges & Universities</p>
                        <div className="text-3xl font-bold text-purple-600 mb-4">Free</div>
                        <div className="text-sm text-gray-500 mb-4">One-time setup (non-refundable)</div>
                        <ul className="text-sm text-gray-600 space-y-2 text-left">
                          <li>✓ 2.2% transaction fee (Cards)</li>
                          <li>✓ 1.50% transaction fee (Mobile Money)</li>
                          <li>✓ All payment methods included</li>
                          <li>✓ Dedicated support</li>
                        </ul>
                      </div>
                    </div>

                    {/* Growth Plan */}
                    <div className="border-2 border-purple-500 rounded-xl p-6 bg-purple-50 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Growth</h3>
                        <p className="text-sm text-gray-600 mb-4">For Growing Businesses</p>
                        <div className="text-3xl font-bold text-purple-600 mb-4">$50</div>
                        <div className="text-sm text-gray-500 mb-4">One-time setup (non-refundable)</div>
                        <ul className="text-sm text-gray-600 space-y-2 text-left">
                          <li>✓ 2% transaction fee (Cards)</li>
                          <li>✓ 1.90% transaction fee (Mobile Money)</li>
                          <li>✓ All payment methods included</li>
                          <li>✓ Priority support</li>
                        </ul>
                      </div>
                    </div>

                    {/* SME Plan */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">SME</h3>
                        <p className="text-sm text-gray-600 mb-4">For Small & Medium Enterprises</p>
                        <div className="text-3xl font-bold text-purple-600 mb-4">$75</div>
                        <div className="text-sm text-gray-500 mb-4">One-time setup (non-refundable)</div>
                        <ul className="text-sm text-gray-600 space-y-2 text-left">
                          <li>✓ 2% transaction fee (Cards)</li>
                          <li>✓ 1.90% transaction fee (Mobile Money)</li>
                          <li>✓ All payment methods included</li>
                          <li>✓ Premium support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FormStep>

              {/* Step 5: Documents Upload */}
              <FormStep 
                step={5} 
                currentStep={currentStep}
                title="Upload Required Documents"
                description="Please provide the necessary documents to complete your application"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessLogo" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Logo *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input 
                          type="file" 
                          id="businessLogo" 
                          name="businessLogo" 
                          className="hidden"
                          accept="image/*"
                          required
                        />
                        <label htmlFor="businessLogo" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">Upload Logo</span>
                          <span className="mt-1 block text-xs text-gray-500">PNG, JPG, GIF up to 2MB</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tradeLicense" className="block text-sm font-medium text-gray-700 mb-2">
                        Trade License *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input 
                          type="file" 
                          id="tradeLicense" 
                          name="tradeLicense" 
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                        />
                        <label htmlFor="tradeLicense" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">Upload License</span>
                          <span className="mt-1 block text-xs text-gray-500">PDF, JPG, PNG up to 5MB</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="legalDocuments" className="block text-sm font-medium text-gray-700 mb-2">
                        ID Document *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input 
                          type="file" 
                          id="legalDocuments" 
                          name="legalDocuments" 
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                        />
                        <label htmlFor="legalDocuments" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">Upload ID</span>
                          <span className="mt-1 block text-xs text-gray-500">NID, Passport, or Driving License</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tinCertificate" className="block text-sm font-medium text-gray-700 mb-2">
                        TIN Certificate *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input 
                          type="file" 
                          id="tinCertificate" 
                          name="tinCertificate" 
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                        />
                        <label htmlFor="tinCertificate" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">Upload TIN</span>
                          <span className="mt-1 block text-xs text-gray-500">PDF, JPG, PNG up to 5MB</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </FormStep>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-gray-200">
                <Button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
            <p className="text-purple-100 mb-6">
              Our team is here to guide you through the entire process and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}