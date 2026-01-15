
import React from 'react';

interface HeroProps {
  linktreeUrl: string;
}

const Hero: React.FC<HeroProps> = ({ linktreeUrl }) => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Modern skyscraper"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 border border-yellow-600/50 text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-8 rounded-full">
            Deal Analysis & Underwriting
          </div>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            Clarity in <span className="gradient-text italic">Multifamily</span> Investing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            We break down multifamily deals and Southeast markets so investors, brokers, and operators understand how deals actually work – the returns, the risks, and the downside — before committing capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://forms.gle/ahYv3GhDamQDjZCo9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-yellow-600 text-black font-extrabold rounded hover:bg-yellow-500 transition-all text-center uppercase tracking-widest"
            >
              See How Deals Really Work
            </a>
            <a
              href="https://calendly.com/blackstarholdings1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 glass-panel text-white font-bold rounded hover:bg-white/10 transition-all text-center uppercase tracking-widest border border-white/20"
            >
              Review a Deal / Intro Call
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">Join 95+ investors and get deal breakdowns plus a free newsletter.</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-600 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
