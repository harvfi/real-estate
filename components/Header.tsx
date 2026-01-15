
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-600 flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">B</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter">BLACKSTAR</span>
        </a>

        <nav className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-yellow-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-yellow-600 transition-colors">Our Purpose</a>
          <a href="#who-its-for" className="hover:text-yellow-600 transition-colors">Our Impact</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 bg-yellow-600 text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-yellow-500 transition-all"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 p-8 space-y-6 flex flex-col items-center animate-fadeIn">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Our Purpose</a>
          <a href="#who-its-for" onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest">Our Impact</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 bg-yellow-600 text-black font-bold rounded uppercase tracking-widest">Get Started</a>
        </div>
      )}
    </header>
  );
};

export default Header;
