import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center my-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Subscribe Our Newsletter</h2>
      <p className="text-xl text-gray-600 mb-8">Stay updated with our latest news, features, and special offers.</p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;