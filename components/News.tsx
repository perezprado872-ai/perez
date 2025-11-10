
import React from 'react';
import Section from './Section';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-anton-sc text-center uppercase tracking-widest text-shadow-red mb-12">
    {children}
  </h2>
);

const newsItems = [
  {
    date: '09.11.2025',
    title: 'NEW TRACKS & UPDATES',
    content: 'Yesterday we released the track "Witchman\'s Punishment," go check it out on YouTube. We will soon release "Northern Division." We just need to add the vocals and then the post-production. We will keep you updated from this page and through social media.',
  },
  {
    date: '09.11.2025',
    title: 'COMING SOON',
    content: "WE ARE PUTTING TOGETHER MORE SONGS, THE MARCH DOESN'T STOP",
  },
  {
    date: '05.11.2025',
    title: 'OFFICIAL MUSIC VIDEO FOR "LA LEY DE PLOMO"',
    content: 'The official video for our single "La Ley de Plomo" has dropped on YouTube. Experience the visual chaos that complements our sonic assault.',
    link: 'https://youtu.be/KseKDoGAbBw?si=BqcIgZS4KU6qlNoF',
    linkText: 'Watch on YouTube',
  },
];

const NewsCard: React.FC<{ date: string; title: string; content: string; link?: string; linkText?: string; }> = ({ date, title, content, link, linkText }) => (
  <div className="bg-[#111] p-6 border-l-4 border-[#B30000] transform transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-105 flex flex-col">
    <div className="flex-grow">
      <p className="text-sm text-[#B30000] font-bold mb-2">{date}</p>
      <h3 className="text-xl font-bold font-anton-sc tracking-wide mb-3">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
    {link && linkText && (
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[#8B0000] text-white 
                     font-anton-sc text-base uppercase tracking-wider
                     transition-all duration-300 ease-in-out
                     hover:bg-[#B30000] hover:shadow-[0_0_15px_#B30000]
                     focus:outline-none focus:ring-2 focus:ring-[#B30000] focus:ring-opacity-50"
        >
          {linkText}
        </a>
      </div>
    )}
  </div>
);

const News: React.FC = () => {
  return (
    <Section id="news" className="py-20 bg-gray-900 bg-opacity-50" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/grunge-wall.png')"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>News</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#gallery"
            className="inline-block px-12 py-4 bg-[#8B0000] border-2 border-white text-white 
                       font-anton-sc text-2xl uppercase tracking-widest
                       transition-all duration-300 ease-in-out
                       hover:bg-[#B30000] hover:shadow-[0_0_20px_#B30000] hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-[#B30000] focus:ring-opacity-50"
          >
            Brutal Pics
          </a>
        </div>
      </div>
    </Section>
  );
};

export default News;
