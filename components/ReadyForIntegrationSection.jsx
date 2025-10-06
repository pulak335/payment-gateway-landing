import React from 'react';
import Image from 'next/image';

const ReadyForIntegrationSection = () => {
  const technologies = [
    {
      name: 'WordPress',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/1200px-Wordpress-Logo.svg.png',
      alt: 'WordPress Logo'
    },
    {
      name: 'React',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
      alt: 'React Logo'
    },
    {
      name: 'Next.js',
      src: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp',
      alt: 'Next.js Logo'
    },
    {
      name: 'Node.js',
      src: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png',
      alt: 'Node.js Logo'
    },
    {
      name: 'Python',
      src: 'https://appxcontent.kaxa.in/paid_course3/2024-10-15-0.3724774982995829.png',
      alt: 'Python Logo'
    },
    {
      name: 'R',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png',
      alt: 'R Programming Language Logo'
    },
    {
      name: 'Flutter',
      src: 'https://miro.medium.com/v2/resize:fit:1000/1*5-aoK8IBmXve5whBQM90GA.png',
      alt: 'Flutter Logo'
    },
    {
      name: 'Swift',
      src: 'https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png',
      alt: 'Swift Programming Language Logo'
    },
    {
      name: 'php',
      src: 'https://repository-images.githubusercontent.com/247638481/eb3e4f80-7b9e-11ea-9a38-63dc8d5f2403',
      alt: 'php Logo'
    },
    {
      name: 'WooCommerce',
      src: 'https://connectif.ai/wp-content/uploads/2023/07/woocommerce.png',
      alt: 'WooCommerce Logo'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-8">
            <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-purple-800 font-semibold text-sm">Developer Friendly</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready for <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Integration?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our robust APIs and comprehensive documentation make integration seamless. 
            Build with your favorite technology stack in minutes, not days.
          </p>

          {/* Integration Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">RESTful APIs</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">SDKs & Libraries</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Webhook Support</span>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center">
            Supported Technologies & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="group">
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                  
                  {/* Logo Container */}
                  <div className="relative flex flex-col items-center">
                    <div className="h-16 w-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        className="h-14 w-auto object-contain max-w-full"
                        src={tech.src}
                        alt={tech.alt}
                        width={64}
                        height={64}
                        unoptimized
                      />
                    </div>
                    <p className="text-gray-700 font-semibold text-sm group-hover:text-purple-600 transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-3xl shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Start Building Today
              </h3>
              
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Explore our comprehensive documentation, code examples, and step-by-step guides to get started in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-white text-purple-600 hover:bg-gray-50 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center">
                    View Documentation
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center">
                    Get API Keys
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyForIntegrationSection;