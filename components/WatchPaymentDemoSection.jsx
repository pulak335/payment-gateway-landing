import React from 'react';

const WatchPaymentDemoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Watch Our Payment Demo
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          See how ShortyPay simplifies your payment process with a quick demo.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for video embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder YouTube video
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchPaymentDemoSection;