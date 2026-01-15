
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-yellow-600 flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-lg">B</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tighter">BLACKSTAR</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Securing futures and building legacies through strategic investment and unwavering commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-yellow-600 hover:text-black transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-yellow-600 hover:text-black transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-yellow-600 hover:text-black transition-all">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#home" className="hover:text-yellow-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-600 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-600 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-600 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-gray-600 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Blackstar Investments Group. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Design & AI by Blackstar Digital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
