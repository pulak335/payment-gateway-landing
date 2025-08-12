"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      "ShortlyPay has revolutionized our online transactions. The seamless integration and robust security features have significantly boosted our customer satisfaction and sales.",
    name: "John Doe",
    company: "Ecostore",
    logo: "/logo-ecostore.svg",
  },
  {
    quote:
      "We've seen a remarkable improvement in payment processing efficiency since switching to ShortlyPay. Their platform is incredibly user-friendly and reliable.",
    name: "Jane Smith",
    company: "TechGadgets",
    logo: "/logo-techgadgets.svg",
  },
  {
    quote:
      "ShortlyPay's analytics tools provide invaluable insights into our sales trends, helping us make data-driven decisions that drive growth.",
    name: "Emily White",
    company: "FashionForward",
    logo: "/logo-fashionforward.svg",
  },
];

const stats = [
  {
    value: "2,000+",
    label: "Merchants",
  },
  {
    value: "15+",
    label: "Payment Methods",
  },
  {
    value: "99.99%",
    label: "Uptime",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 3000); // 3000 milliseconds = 3 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">High growth companies love ShortlyPay</h2>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-16">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${(currentIndex / testimonials.length) * 100}%)`,
            }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={index} className="w-1/2 flex-shrink-0 p-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <p className="text-lg italic text-gray-700 mb-4">\"{testimonial.quote}\"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;