import React from 'react';
import Section from './Section';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-anton-sc text-center uppercase tracking-widest text-shadow-red mb-12">
    {children}
  </h2>
);

const About: React.FC = () => {
  return (
    <Section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About The Band</SectionTitle>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-center">
          <div className="space-y-4">
            <p>"MARCHA DE ODIO" (MARCH OF HATE) is an Argentinian tribute to the band "Brujería" (Witchcraft), formed by "El Karnal" on vocals and J. Iniestra on guitar, bass, drum programming, and production. The project was the brainchild of "El Muerto" (The Dead Man), who had been a member of the band and was the first to promote it. The main idea was to pay homage to "Juan Brujo" (John the Witch) and "Pinche Peach" (Damn Peach), who had passed away a few months prior.</p>
            <p>In this project, the songs were recorded in a single take to preserve the energy of a live performance.</p>
            <p>The production of the tracks is designed to sound good, but without excessive polish, thus preserving the spirit of grindcore.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
