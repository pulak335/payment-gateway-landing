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
    <section className="py-20 px-4 max-w-7xl mx-auto text-center my-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for Integration?</h2>
      <p className="text-xl text-gray-600 mb-8">Our robust APIs and comprehensive documentation make integration a breeze. We support a wide range of technologies:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group">
            <div className="h-16 w-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
              <Image
                className="h-12 w-auto object-contain max-w-full"
                src={tech.src}
                alt={tech.alt}
                width={64}
                height={64}
                unoptimized
              />
            </div>
            <p className="text-gray-700 font-medium text-sm group-hover:text-purple-600 transition-colors duration-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadyForIntegrationSection;