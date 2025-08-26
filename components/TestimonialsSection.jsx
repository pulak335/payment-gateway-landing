"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      "ShortlyPay has revolutionized our online transactions. The seamless integration and robust security features have significantly boosted our customer satisfaction and sales.",
    name: "John Doe",
    company: "Ecostore",
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    quote:
      "We've seen a remarkable improvement in payment processing efficiency since switching to ShortlyPay. Their platform is incredibly user-friendly and reliable.",
    name: "Jane Smith",
    company: "TechGadgets",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    quote:
      "ShortlyPay's analytics tools provide invaluable insights into our sales trends, helping us make data-driven decisions that drive growth.",
    name: "Emily White",
    company: "FashionForward",
    icon: (
      <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
];

const stats = [
  {
    value: "2,000+",
    label: "Merchants",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Payment Methods",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    value: "99.99%",
    label: "Uptime",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // 4000 milliseconds = 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">High growth companies love ShortlyPay</h2>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              {testimonials[currentIndex].icon}
            </div>
            <blockquote className="text-xl italic text-gray-700 text-center mb-6 leading-relaxed">
              &quot;{testimonials[currentIndex].quote}&quot;
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].company}</p>
            </div>
          </div>
          
          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;