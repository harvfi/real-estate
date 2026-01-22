

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setNewsletterStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Newsletter Section */}
        <div className="mb-16 glass-panel p-8 md:p-12 rounded-2xl border border-[#002366]/20 bg-gradient-to-br from-[#002366]/5 to-transparent">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-envelope text-[#002366] text-xl"></i>
                <span className="text-xs uppercase tracking-widest text-[#002366] font-bold">Stay Informed</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif mb-3">Join Our Newsletter</h3>
              <p className="text-gray-400">
                Receive exclusive market insights, investment opportunities, and wealth-building strategies directly to your inbox.
              </p>
            </div>

            <div>
              {newsletterStatus === 'success' ? (
                <div className="flex items-center space-x-3 bg-green-600/10 border border-green-600/30 rounded-lg p-4 animate-fadeIn">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <div>
                    <p className="font-bold text-green-400">Welcome to the Circle!</p>
                    <p className="text-sm text-gray-400">Check your inbox for confirmation.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#002366] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'sending'}
                    className="px-6 py-3 bg-[#002366] text-white font-bold rounded-lg hover:bg-[#003399] transition-all uppercase tracking-widest text-sm flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {newsletterStatus === 'sending' ? (
                      <>
                        <i className="fas fa-circle-notch animate-spin"></i>
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <i className="fas fa-arrow-right"></i>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#002366] flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-lg">B</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tighter">THE BLACKSTAR GROUP</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              We identify undervalued assets, reposition them with strategy, and invite our partners to build wealth with us.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/theblackstargrp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#002366] hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#002366] hover:text-white transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#home" className="hover:text-[#002366] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#002366] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#002366] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#002366] transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#002366] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#002366] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#002366] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#002366] transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-gray-600 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} The Blackstar Group Group. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Design & AI by Blackstar Digital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
