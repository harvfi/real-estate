
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GeminiAssistant from './components/GeminiAssistant';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [bookingRef, setBookingRef] = useState<string>('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate API call and generation of a formal booking reference
    setTimeout(() => {
      const refId = `BS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setBookingRef(refId);
      setFormStatus('success');
      // No automatic reset to 'idle' so user can see their confirmation ID
    }, 1500);
  };

  const handleDownload = () => {
    setDownloadStatus('loading');
    setTimeout(() => {
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }, 2000);
  };

  const linktreeUrl = "https://linktr.ee/blackstarinvestments";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500/30">
      <Header />
      <main>
        <section id="home">
          <Hero linktreeUrl={linktreeUrl} />
        </section>

        <section id="ai-insights" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
          <GeminiAssistant />
        </section>

        <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Multifamily Investments for Long-Term Growth</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We focus on underperforming and distressed multifamily assets across high-growth Southeast markets, delivering risk-adjusted returns.
            </p>
          </div>
          <Services />
        </section>

        <section id="about" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164067005-446df1678171?auto=format&fit=crop&q=80&w=1000"
                alt="Professional consultation"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl hidden md:block">
                <p className="text-yellow-500 font-bold text-3xl">10+</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
            <div>
              <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 leading-tight">Clear Operational Focus That Delivers Results</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                The Blackstar Group puts equity and opportunity back into the hands of investors. Through value-add multifamily acquisitions in Southeast markets, we deliver attractive, risk-adjusted returns while opening doors to lasting commercial real estate ownership.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Operational Precision",
                  "Conservative Underwriting",
                  "Decades of Experience",
                  "Downside Protection"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-yellow-600"></i>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#services"
                className="inline-block px-8 py-4 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 font-bold rounded-lg uppercase tracking-widest"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>

        <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 gradient-text">Book Your Consultation</h2>
              <p className="text-xl text-gray-400">
                Secure your position in our private advisory circle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-6 animate-fadeIn">
                    <div className="w-20 h-20 bg-yellow-600 text-black rounded-full flex items-center justify-center text-3xl shadow-lg star-glow">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-2">Booking Confirmed</h3>
                      <div className="bg-white/10 px-4 py-2 rounded border border-white/10 inline-block mb-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 block">Ref ID</span>
                        <span className="font-mono text-yellow-500 font-bold">{bookingRef}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-6">A digital confirmation and calendar invitation have been dispatched to your inbox.</p>
                    </div>
                    <div className="text-left w-full space-y-4 border-t border-white/10 pt-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">What's Next?</p>
                      <div className="flex space-x-3">
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-gray-400">1</div>
                        <p className="text-sm text-gray-300 italic">Portfolio review within 24 hours.</p>
                      </div>
                      <div className="flex space-x-3">
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-gray-400">2</div>
                        <p className="text-sm text-gray-300 italic">Private introductory discovery call.</p>
                      </div>
                    </div>
                    <button onClick={() => setFormStatus('idle')} className="mt-8 text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-yellow-600 transition-colors">Start new booking</button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">First Name</label>
                        <input required type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-yellow-600" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Last Name</label>
                        <input required type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-yellow-600" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-yellow-600" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Consultation Interest</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-yellow-600 appearance-none">
                        <option className="bg-black">Multifamily Investment Opportunities</option>
                        <option className="bg-black">Value-Add Strategy</option>
                        <option className="bg-black">Become a Referral Partner</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Notes (Optional)</label>
                      <textarea rows={3} placeholder="Tell us about your investment goals..." className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-yellow-600"></textarea>
                    </div>
                    <button
                      disabled={formStatus === 'sending'}
                      type="submit"
                      className="w-full py-4 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all uppercase tracking-widest flex items-center justify-center shadow-lg"
                    >
                      {formStatus === 'sending' ? <i className="fas fa-circle-notch animate-spin mr-2"></i> : null}
                      {formStatus === 'sending' ? 'Securing Spot...' : 'Book Discovery Session'}
                    </button>
                  </form>
                )}
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600/10 flex items-center justify-center rounded-lg text-yellow-600">
                      <i className="fas fa-calendar-check text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Direct Scheduling</h4>
                      <p className="text-gray-400 mb-4">View our partners' availability and book a slot instantly.</p>
                      <a
                        href={linktreeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-600 font-bold hover:underline"
                      >
                        Visit Linktree <i className="fas fa-arrow-right ml-1"></i>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600/10 flex items-center justify-center rounded-lg text-yellow-600">
                      <i className="fas fa-file-pdf text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Digital Prospectus</h4>
                      <p className="text-gray-400 mb-4">A complete breakdown of our current investment portfolios.</p>
                      <button
                        onClick={handleDownload}
                        className="px-6 py-2 bg-white/5 border border-white/20 hover:bg-white/10 rounded-lg transition-all text-sm font-bold flex items-center"
                      >
                        {downloadStatus === 'loading' ? <i className="fas fa-circle-notch animate-spin mr-2"></i> : <i className="fas fa-download mr-2"></i>}
                        {downloadStatus === 'loading' ? 'Preparing...' : downloadStatus === 'success' ? 'Ready for Save' : 'Download Brochure'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-600/5 border border-yellow-600/10 rounded-2xl">
                  <p className="text-gray-400 text-sm italic">
                    "Legacy is not what we leave behind, but what we build for those who follow. Let's start building yours today."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
