import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Refund Policy</h1>
          <p className="text-xl opacity-90">
            Understanding our refund and cancellation policies for your peace of mind.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Last Updated</h2>
              <p className="text-gray-600">This Refund Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At ShortlyPay, we strive to provide exceptional payment gateway services to our customers. This Refund Policy outlines the terms and conditions under which refunds may be issued for our services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in transparency and fairness, and this policy ensures that both our customers and our business are protected. Please read this policy carefully to understand your rights and our obligations.
            </p>
          </div>

          {/* General Refund Policy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">General Refund Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our refund policy is designed to be fair and transparent. We understand that circumstances may arise where a refund is necessary, and we will evaluate each request on a case-by-case basis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Please note that all refund requests must be submitted within the specified timeframes and meet the criteria outlined in this policy.
            </p>
          </div>

          {/* Setup and Integration Fees */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Setup and Integration Fees</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">One-Time Setup Fees</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our setup and integration fees are generally non-refundable as they cover the costs associated with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Account setup and verification</li>
              <li>Technical integration and testing</li>
              <li>Documentation and training materials</li>
              <li>Initial configuration and customization</li>
              <li>Support during the onboarding process</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Partial Refunds</h3>
            <p className="text-gray-600 leading-relaxed">
              In exceptional circumstances, we may consider partial refunds of setup fees if services are terminated within 30 days of activation and no significant work has been completed.
            </p>
          </div>

          {/* Transaction Processing Fees */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction Processing Fees</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Standard Processing Fees</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Transaction processing fees are charged for each successful payment processed through our system. These fees are non-refundable as they cover:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Payment network costs and interchange fees</li>
              <li>Fraud detection and prevention services</li>
              <li>Transaction monitoring and reporting</li>
              <li>Infrastructure and operational costs</li>
              <li>Regulatory compliance requirements</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Failed Transactions</h3>
            <p className="text-gray-600 leading-relaxed">
              In cases where transactions fail due to technical issues on our end, we will not charge processing fees. However, if the failure is due to customer-side issues (insufficient funds, declined cards, etc.), standard fees may apply.
            </p>
          </div>

          {/* Subscription and Recurring Fees */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Subscription and Recurring Fees</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Monthly/Annual Subscriptions</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For services with recurring subscription fees, the following refund policies apply:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Pro-rated refunds for unused portions of the billing period</li>
              <li>Refunds processed within 5-10 business days</li>
              <li>No refunds for partial months of service</li>
              <li>Cancellation effective at the end of the current billing period</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Early Termination</h3>
            <p className="text-gray-600 leading-relaxed">
              If you terminate your subscription early, you may be eligible for a pro-rated refund of any prepaid fees for the unused portion of your billing period.
            </p>
          </div>

          {/* Refund Eligibility Criteria */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Refund Eligibility Criteria</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To be eligible for a refund, your request must meet the following criteria:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Submitted within the specified timeframe</li>
              <li>Supported by valid documentation and evidence</li>
              <li>Not related to fraudulent or abusive behavior</li>
              <li>Compliant with our terms of service</li>
              <li>Not related to force majeure events</li>
            </ul>
          </div>

          {/* Refund Request Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Refund Request Process</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">How to Request a Refund</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
              <li>Contact our customer support team via email or phone</li>
              <li>Provide your account details and transaction information</li>
              <li>Explain the reason for your refund request</li>
              <li>Submit any supporting documentation</li>
              <li>Wait for our review and response</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Required Information</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your refund request should include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Account number or customer ID</li>
              <li>Transaction ID or reference number</li>
              <li>Date of the transaction or service</li>
              <li>Amount requested for refund</li>
              <li>Detailed reason for the refund request</li>
              <li>Supporting documentation (if applicable)</li>
            </ul>
          </div>

          {/* Refund Processing Timeline */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Refund Processing Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Review Period</h3>
                <p className="text-gray-600">3-5 business days for initial review</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Approval Process</h3>
                <p className="text-gray-600">1-2 business days after approval</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Processing Time</h3>
                <p className="text-gray-600">5-10 business days for processing</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Bank Settlement</h3>
                <p className="text-gray-600">3-5 business days for bank processing</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-center">
              <strong>Total Timeline: 12-22 business days</strong>
            </p>
          </div>

          {/* Exceptions and Special Cases */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Exceptions and Special Cases</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Service Outages</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If our services experience significant downtime or outages that prevent you from conducting business, we may offer credits or refunds on a case-by-case basis.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Force Majeure Events</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Refunds may not be available for service interruptions caused by events beyond our control, such as natural disasters, government actions, or third-party service failures.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Regulatory Changes</h3>
            <p className="text-gray-600 leading-relaxed">
              Changes in regulations or compliance requirements may affect our ability to provide certain services, and refunds will be handled according to the specific circumstances.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dispute Resolution</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you disagree with our refund decision, you may:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Request a review by our management team</li>
              <li>Provide additional documentation or evidence</li>
              <li>Escalate the matter through our formal dispute process</li>
              <li>Seek mediation or arbitration if required by law</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We are committed to resolving disputes fairly and promptly, and we will work with you to find a mutually acceptable solution.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">Email: refunds@shortlypay.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">Phone: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">Address: 123 Business Street, Suite 100, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with a Refund?</h3>
            <p className="text-purple-100 mb-6">
              Our customer support team is here to assist you with any refund-related questions or requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
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
