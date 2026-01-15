
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

        <section id="contact" className="py-24 bg-black relative">
          {/* Blue Star Logo Background */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-blue-900 opacity-80" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-building text-blue-800 text-3xl"></i>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Form Container - Gray background like JotForm */}
            <div className="bg-gray-400 rounded-2xl p-8 md:p-12 shadow-2xl">
              {formStatus === 'success' ? (
                <div className="text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-yellow-600 text-black rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2 text-gray-900">Welcome to the Network!</h3>
                    <div className="bg-white/50 px-4 py-2 rounded border border-gray-300 inline-block mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-gray-600 block">Confirmation ID</span>
                      <span className="font-mono text-blue-900 font-bold">{bookingRef}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-6">Check your inbox for exclusive investment opportunities and our newsletter, Multifamily Made Simple.</p>
                  </div>
                  <button onClick={() => setFormStatus('idle')} className="text-blue-900 text-sm font-bold uppercase tracking-widest hover:text-yellow-600 transition-colors">Submit Another Response</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 flex items-center">
                      <span className="text-yellow-600 mr-2">★</span>
                      Blackstar Investor Network
                    </h2>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Get access to our newsletter, Multifamily Made Simple, along with exclusive investment opportunities and insights into opportunistic multifamily deals.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900">
                      Full Name <span className="text-yellow-600">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input required type="text" placeholder="First Name" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-900" />
                      </div>
                      <div>
                        <input required type="text" placeholder="Last Name" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-900" />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900">
                      Email Address <span className="text-yellow-600">*</span>
                    </label>
                    <input required type="email" placeholder="example@example.com" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-900" />
                  </div>

                  {/* Accredited Investor */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-blue-900">
                      Are you an accredited investor? <span className="text-yellow-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Yes', 'No', 'Not Sure'].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="accredited" value={option} required className="w-5 h-5 text-blue-900" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Real Estate Journey */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-blue-900">
                      Where are you in your real estate journey? <span className="text-yellow-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Just exploring the idea',
                        'Learning & looking for my first deal',
                        'Actively investing & growing my portfolio',
                        'Experienced investor ready for bigger opportunities'
                      ].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="journey" value={option} required className="w-5 h-5 text-blue-900" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Investment Type */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-blue-900">
                      What type of opportunities interest you most? <span className="text-yellow-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Passive Investing (LP)',
                        'Active Partnerships (GP/Co-GP)',
                        'Learning & networking',
                        'Other'
                      ].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="opportunity" value={option} required className="w-5 h-5 text-blue-900" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Investment Timeline */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-blue-900">
                      When are you looking to invest? <span className="text-yellow-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Within 3 months',
                        '3-6 months',
                        '6-12 months',
                        'Not sure'
                      ].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="timeline" value={option} required className="w-5 h-5 text-blue-900" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900">
                      How did you hear about us?
                    </label>
                    <input type="text" placeholder="Optional" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-900" />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={formStatus === 'sending'}
                    type="submit"
                    className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all uppercase tracking-widest flex items-center justify-center shadow-lg disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? <i className="fas fa-circle-notch animate-spin mr-2"></i> : null}
                    {formStatus === 'sending' ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
