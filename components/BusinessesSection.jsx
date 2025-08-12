import React from 'react';
import Image from 'next/image';

const BusinessesSection = () => {
  const logos = [
    { name: 'bKash', src: '/bkash.svg' }, // Placeholder, replace with actual SVG
    { name: 'Nagad', src: '/nagad.svg' }, // Placeholder, replace with actual SVG
    { name: 'Visa', src: '/visa.svg' },   // Placeholder, replace with actual SVG
    { name: 'Mastercard', src: '/mastercard.svg' }, // Placeholder, replace with actual SVG
    { name: 'American Express', src: '/amex.svg' }, // Placeholder, replace with actual SVG
    { name: 'PayPal', src: '/paypal.svg' }, // Placeholder, replace with actual SVG
    { name: 'Stripe', src: '/stripe.svg' }, // Placeholder, replace with actual SVG
    { name: 'Google Pay', src: '/googlepay.svg' }, // Placeholder, replace with actual SVG
    { name: 'Apple Pay', src: '/applepay.svg' }, // Placeholder, replace with actual SVG
    { name: 'Discover', src: '/discover.svg' }, // Placeholder, replace with actual SVG
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
              {logos.map((logo) => (
                <div key={logo.name} className="col-span-1 flex justify-center py-4 px-2 bg-gray-50 rounded-lg shadow-sm">
                  <Image
                    className="h-12 w-auto object-contain"
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={48}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:text-left mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-purple-800 sm:text-4xl">
              Businesses using ShortyPay
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join a growing community of businesses that rely on our secure and efficient payment gateway.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <svg className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Supercharge your business with ShortyPay
                </h3>
                <p className="mt-2 text-base text-gray-600">Streamline your payment processes, reduce operational costs, and enhance customer satisfaction with our robust and intuitive platform.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <svg className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Major Payment Method Coverage
                </h3>
                <p className="mt-2 text-base text-gray-600">Accept payments from a wide array of methods including credit/debit cards, mobile wallets, and local bank transfers, ensuring you never miss a sale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessesSection;