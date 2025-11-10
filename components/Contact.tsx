
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="py-24 bg-black text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Do you want to get in touch with Marcha de Odio?
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          For bookings, press inquiries, or just to connect, find us on Instagram.
        </p>
        <a
          href="https://www.instagram.com/marchadeodio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-[#8B0000] border-2 border-white text-white 
                     font-anton-sc text-2xl uppercase tracking-widest
                     transition-all duration-300 ease-in-out
                     hover:bg-[#B30000] hover:shadow-[0_0_20px_#B30000] hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-[#B30000] focus:ring-opacity-50"
        >
          Contact on Instagram
        </a>
      </div>
    </Section>
  );
};

export default Contact;
