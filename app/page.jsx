import Image from 'next/image';
import HeroSection from '../components/HeroSection';
 import { Button } from '../components/ui/button';
import ProductOverviewSection from '../components/ProductOverviewSection';
import OurCoreFeaturesSection from '../components/OurCoreFeaturesSection';
import WatchPaymentDemoSection from '../components/WatchPaymentDemoSection';
import BusinessesSection from '../components/BusinessesSection';
import ReadyForIntegrationSection from '../components/ReadyForIntegrationSection';
import NewsletterSection from '../components/NewsletterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ComplianceSection from '../components/ComplianceSection';


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <HeroSection />

      <ProductOverviewSection />
      <OurCoreFeaturesSection />
      <WatchPaymentDemoSection />
      <BusinessesSection />
      
      {/* Call to Action Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-xl my-12">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to grow your business?</h2>
        <p className="text-xl text-white mb-8">Join thousands of successful businesses using our platform to streamline their payment processes.</p>
        <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">Start Your Free Trial</Button>
      </section>

      <ReadyForIntegrationSection />

      {/* Stats Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">100M+</h3>
            <p className="text-gray-600">API requests per day</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800 mb-2">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-800 mb-2">135+</h3>
            <p className="text-gray-600">Currencies supported</p>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <TestimonialsSection />
        <ComplianceSection />
      </main>
    </>
  );
}