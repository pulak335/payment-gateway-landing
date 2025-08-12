import React from 'react';

const ReadyForIntegrationSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center my-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for Integration?</h2>
      <p className="text-xl text-gray-600 mb-8">Our robust APIs and comprehensive documentation make integration a breeze. We support a wide range of technologies:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <img src="/wordpress.svg" alt="WordPress" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">WordPress</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/react.svg" alt="React" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/nextjs.svg" alt="Next.js" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/nodejs.svg" alt="Node.js" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/python.svg" alt="Python" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/r.svg" alt="R" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">R</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/flutter.svg" alt="Flutter" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">Flutter</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/swift.svg" alt="Swift" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">Swift</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/react-native.svg" alt="React Native" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">React Native</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/woocommerce.svg" alt="WooCommerce" className="h-16 w-16 mb-2" />
          <p className="text-gray-700">WooCommerce</p>
        </div>
      </div>
    </section>
  );
};

export default ReadyForIntegrationSection;