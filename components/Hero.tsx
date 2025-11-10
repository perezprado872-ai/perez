import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="relative h-screen flex items-center justify-center text-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')"}}
      ></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-anton-sc uppercase text-white text-shadow-red tracking-wider">
          Marcha de Odio
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-roboto-condensed">
          Argentinian Tribute to Brujería
        </p>
        <div className="mt-12">
          <a
            href="https://www.youtube.com/@MARCHADEODIO-638"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#8B0000] border-2 border-white text-white 
                       font-anton-sc text-xl uppercase tracking-widest
                       transition-all duration-300 ease-in-out
                       hover:bg-[#B30000] hover:shadow-[0_0_20px_#B30000] hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-[#B30000] focus:ring-opacity-50"
          >
            Listen on YouTube
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;