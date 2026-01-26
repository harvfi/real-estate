

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {

  const linktreeUrl = "https://linktr.ee/blackstarinvestments";
  const calendlyUrl = "https://calendly.com/blackstarholdings1/30min";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#002366]/30">
      <Header />
      <main>
        <section id="home">
          <Hero linktreeUrl={linktreeUrl} />
        </section>


        {/* Metrics Row */}
        <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#002366] mb-2">14–20%</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Target IRR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#002366] mb-2">95+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Active Investors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#002366] mb-2">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Markets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#002366] mb-2">$50M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Deals Underwritten</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Investment Solutions</h2>
            <div className="w-24 h-1 bg-[#002366] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-[#002366]/30">
              <div className="w-16 h-16 bg-[#002366]/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#002366] transition-colors">
                <i className="fas fa-users text-2xl text-[#002366] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-2xl font-serif mb-4">Invest Alongside Us</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Provide opportunities for new and sophisticated investors to participate alongside us in select multifamily investments.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-[#002366]/30">
              <div className="w-16 h-16 bg-[#002366]/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#002366] transition-colors">
                <i className="fas fa-chart-bar text-2xl text-[#002366] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-2xl font-serif mb-4">Deal Analysis</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Walk through pricing, cash flow, and downside scenarios so you understand how a deal really works before making a decision.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-[#002366]/30">
              <div className="w-16 h-16 bg-[#002366]/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#002366] transition-colors">
                <i className="fas fa-lightbulb text-2xl text-[#002366] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-2xl font-serif mb-4">Strategic Advisory</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Advise agents, brokers, and investors on commercial deals by clarifying structure, returns, and risk.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section id="who-its-for" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Who We Help</h2>
              <div className="w-24 h-1 bg-[#002366] mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#002366]/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-user-tie text-3xl text-[#002366]"></i>
                </div>
                <h3 className="text-2xl font-serif mb-4">Investors</h3>
                <p className="text-gray-400 leading-relaxed">
                  Access to opportunistic multifamily investments
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#002366]/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-building text-3xl text-[#002366]"></i>
                </div>
                <h3 className="text-2xl font-serif mb-4">Sponsors & Operators</h3>
                <p className="text-gray-400 leading-relaxed">
                  JV and Co-GP partnership alignment
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#002366]/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-briefcase text-3xl text-[#002366]"></i>
                </div>
                <h3 className="text-2xl font-serif mb-4">Brokers & Advisors</h3>
                <p className="text-gray-400 leading-relaxed">
                  Navigating commercial transactions with underwriting support
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-black relative">
          {/* Blue Star Logo Background */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-[#002366] opacity-80" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-building text-[#001a4d] text-3xl"></i>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">Schedule a Call</h2>
              <div className="w-24 h-1 bg-[#002366] mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Book a 30-minute intro call to discuss investment opportunities and learn more about The Blackstar Group.
              </p>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '700px' }}>
              <iframe
                src={calendlyUrl}
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a call with The Blackstar Group"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
