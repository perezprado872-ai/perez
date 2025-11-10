
import React from 'react';
import { YoutubeIcon, InstagramIcon, BandcampIcon } from './Icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink href="https://www.youtube.com/@MARCHADEODIO-638">
            <YoutubeIcon className="h-8 w-8" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/marchadeodio">
            <InstagramIcon className="h-8 w-8" />
          </SocialLink>
          <SocialLink href="https://bandcamp.com">
            <BandcampIcon className="h-8 w-8" />
          </SocialLink>
        </div>
        <p>&copy; {new Date().getFullYear()} Marcha de Odio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
