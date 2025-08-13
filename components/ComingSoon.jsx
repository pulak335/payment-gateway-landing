import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-xl mb-8">We&apos;re working hard to bring you something amazing. Stay tuned</p>
      <div className="relative w-64 h-64">
        {/* You can add an SVG or image here */}
        <svg
          className="w-full h-full text-purple-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ComingSoon;