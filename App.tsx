
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white font-roboto-condensed">
      <Header />
      <main>
        <Hero />
        <About />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
