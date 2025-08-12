import React from 'react';



const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <div className="space-y-2">
              <p><strong>Address:</strong> 123 Business Street, Dhaka, Bangladesh</p>
              <p><strong>Phone:</strong> +880 1234 567890</p>
              <p><strong>Email:</strong> contact@shortlypay.com</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-2 border rounded-md"></textarea>
              </div>
              <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.862837248283!2d90.3887663154316!3d23.750997844499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffa3a9%3A0x7d1a4e2b5f5b5b5b!2sShortlyPay%20Office!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd" 
            width="100%" 
            height="400" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;