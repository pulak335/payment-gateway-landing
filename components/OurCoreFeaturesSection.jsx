import React from 'react';

const getFeatureIcon = (title) => {
  switch (title) {
    case 'Instant Payment Processing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'Multi-Currency Support':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 12l-2 2m0 0l-2-2m2 2V4M8 20h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'Fraud Detection & Prevention':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.125 5.227 2.938 7.078A11.999 11.999 0 0012 22c2.912 0 5.618-1.125 7.618-3.04A12.001 12.001 0 0022 12c0-2.757-1.125-5.227-2.938-7.078z" />
        </svg>
      );
    case 'Customizable Payment Pages':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'Recurring Billing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'Detailed Analytics & Reporting':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    case 'API Integration':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'PCI DSS Compliance':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.125 5.227 2.938 7.078A11.999 11.999 0 0012 22c2.912 0 5.618-1.125 7.618-3.04A12.001 12.001 0 0022 12c0-2.757-1.125-5.227-2.938-7.078z" />
        </svg>
      );
    case '24/7 Customer Support':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4m-4-8a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'Mobile Payment Solutions':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'Tokenization':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l2 2 4-4" />
        </svg>
      );
    case 'Chargeback Management':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'Invoice Generation':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'Payment Links':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101m-1.721 6.853L7.944 11.459m-2.24 2.24l2.24-2.24" />
        </svg>
      );
    case 'QR Code Payments':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M4 12h.01M8 12h.01M16 12h.01M20 12h.01M4 4h.01M8 4h.01M16 4h.01M20 4h.01M4 20h.01M8 20h.01M16 20h.01M20 20h.01" />
        </svg>
      );
    case 'Virtual Terminal':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v5m3 0h.01M12 12h.01M15 12h.01M12 15h.01M15 15h.01M12 18h.01M15 18h.01M12 21h.01M15 21h.01M12 24h.01M15 24h.01" />
        </svg>
      );
    case 'Developer Friendly':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'Global Payouts':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case 'Real-time Notifications':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      );
    case 'Scalable Infrastructure':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
  }
};


const features = [
  {
    title: 'Instant Payment Processing',
    description: 'Process payments in real-time, ensuring quick and efficient transactions for your customers.',
  },
  {
    title: 'Multi-Currency Support',
    description: 'Accept payments in various currencies, expanding your global reach and customer base.',
  },
  {
    title: 'Fraud Detection & Prevention',
    description: 'Advanced algorithms to detect and prevent fraudulent transactions, securing your business.',
  },
  {
    title: 'Customizable Payment Pages',
    description: 'Design and brand your payment pages to match your business aesthetics and enhance user experience.',
  },
  {
    title: 'Recurring Billing',
    description: 'Automate subscription and recurring payments, simplifying billing cycles for your services.',
  },
  {
    title: 'Detailed Analytics & Reporting',
    description: 'Gain insights into your sales and customer behavior with comprehensive reports and analytics.',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly integrate with your existing systems using our robust and well-documented APIs.',
  },
  {
    title: 'PCI DSS Compliance',
    description: 'Ensure the highest level of security with our PCI DSS compliant payment gateway.',
  },
  {
    title: '24/7 Customer Support',
    description: 'Get round-the-clock support from our dedicated team to resolve any issues promptly.',
  },
  {
    title: 'Mobile Payment Solutions',
    description: 'Offer convenient payment options for customers on the go with our mobile-friendly solutions.',
  },
  {
    title: 'Tokenization',
    description: 'Securely store customer card details with tokenization, reducing your PCI scope.',
  },
  {
    title: 'Chargeback Management',
    description: 'Tools and support to help you manage and dispute chargebacks effectively.',
  },
  {
    title: 'Invoice Generation',
    description: 'Generate professional invoices automatically and send them to your customers.',
  },
  {
    title: 'Payment Links',
    description: 'Create and share payment links for quick and easy collection of payments.',
  },
  {
    title: 'QR Code Payments',
    description: 'Enable touchless payments with QR codes for in-person transactions.',
  },
  {
    title: 'Virtual Terminal',
    description: 'Process payments manually over the phone or mail with our secure virtual terminal.',
  },
  {
    title: 'Developer Friendly',
    description: 'Easy-to-use SDKs and comprehensive documentation for developers.',
  },
  {
    title: 'Global Payouts',
    description: 'Facilitate payouts to vendors and partners across the globe.',
  },
  {
    title: 'Real-time Notifications',
    description: 'Receive instant alerts for all transactions and account activities.',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Our platform scales with your business, handling any volume of transactions.',
  },
];

const OurCoreFeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-purple-100 group">
              <div className="mb-4 text-purple-600 group-hover:text-purple-800">
                {getFeatureIcon(feature.title)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-purple-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreFeaturesSection;