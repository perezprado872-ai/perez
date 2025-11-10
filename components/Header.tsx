import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-4 py-2 uppercase text-white hover:text-[#B30000] transition-colors duration-300 font-anton-sc tracking-wider"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About the Band' },
    { href: '#news', label: 'News' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    
    closeMenu();

    if (!targetId) return;

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Corresponds to h-20 in TailwindCSS (5rem = 80px)
      const elementTop = targetElement.offsetTop - headerOffset;
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={handleNavClick} className="text-2xl font-anton-sc text-white text-shadow-red cursor-pointer">
            Marcha de Odio
          </a>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={handleNavClick}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={handleNavClick}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
