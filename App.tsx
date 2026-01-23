

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [bookingRef, setBookingRef] = useState<string>('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Collect form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      accredited: formData.get('accredited'),
      journey: formData.get('journey'),
      opportunity: formData.get('opportunity'),
      timeline: formData.get('timeline'),
      hearAbout: formData.get('hearAbout'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        const refId = `BS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        setBookingRef(refId);
        setFormStatus('success');
      } else {
        console.error('Error:', result.error);
        alert('There was an error submitting the form. Please try again or contact us directly.');
        setFormStatus('idle');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or contact us directly.');
      setFormStatus('idle');
    }
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
                Provide opportunities for new and sophisticated investors to participate alongside us in select <span className="text-[#002366]">multifamily</span> investments.
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
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-[#002366]/30">
              <div className="w-16 h-16 bg-[#002366]/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#002366] transition-colors">
                <i className="fas fa-chart-bar text-2xl text-[#002366] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-2xl font-serif mb-4">Deal Analysis</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Walk through pricing, cash flow, and downside scenarios so you understand how a deal really works before making a decision.
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
                  Evaluating <span className="text-[#002366]">multifamily</span> opportunities
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#002366]/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-briefcase text-3xl text-[#002366]"></i>
                </div>
                <h3 className="text-2xl font-serif mb-4">Brokers & Agents</h3>
                <p className="text-gray-400 leading-relaxed">
                  Stepping into commercial deals
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#002366]/10 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-building text-3xl text-[#002366]"></i>
                </div>
                <h3 className="text-2xl font-serif mb-4">Operators</h3>
                <p className="text-gray-400 leading-relaxed">
                  Who want a second set of eyes on underwriting
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

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Form Container - Gray background like JotForm */}
            <div className="bg-gray-400 rounded-2xl p-8 md:p-12 shadow-2xl">
              {formStatus === 'success' ? (
                <div className="text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-[#002366] text-white rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2 text-gray-900">Welcome to the Network!</h3>
                    <div className="bg-white/50 px-4 py-2 rounded border border-gray-300 inline-block mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-gray-600 block">Confirmation ID</span>
                      <span className="font-mono text-[#002366] font-bold">{bookingRef}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-6">Check your inbox for exclusive investment opportunities and our newsletter, <span className="text-[#002366] font-semibold">Multifamily Made Simple</span>.</p>
                  </div>
                  <button onClick={() => setFormStatus('idle')} className="text-[#002366] text-sm font-bold uppercase tracking-widest hover:text-[#003399] transition-colors">Submit Another Response</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-3 flex items-center">
                      <span className="text-[#002366] mr-2">★</span>
                      The Blackstar Group Investor Network
                    </h2>
                    <p className="text-[#001a4d] text-sm leading-relaxed">
                      Get access to our newsletter, <span className="text-[#002366] font-semibold">Multifamily Made Simple</span>, along with exclusive investment opportunities and insights into opportunistic <span className="text-[#002366]">multifamily</span> deals.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#002366]">
                      Full Name <span className="text-[#002366]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input required type="text" name="firstName" placeholder="First Name" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#002366]" />
                      </div>
                      <div>
                        <input required type="text" name="lastName" placeholder="Last Name" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#002366]" />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#002366]">
                      Email Address <span className="text-[#002366]">*</span>
                    </label>
                    <input required type="email" name="email" placeholder="example@example.com" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#002366]" />
                  </div>

                  {/* Accredited Investor */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[#002366]">
                      Are you an accredited investor? <span className="text-[#002366]">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Yes', 'No', 'Not Sure'].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="accredited" value={option} required className="w-5 h-5 text-[#002366]" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Real Estate Journey */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[#002366]">
                      Where are you in your real estate journey? <span className="text-[#002366]">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Just exploring the idea',
                        'Learning & looking for my first deal',
                        'Actively investing & growing my portfolio',
                        'Experienced investor ready for bigger opportunities'
                      ].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="journey" value={option} required className="w-5 h-5 text-[#002366]" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Investment Type */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[#002366]">
                      What type of opportunities interest you most? <span className="text-[#002366]">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Passive Investing (LP)',
                        'Active Partnerships (GP/Co-GP)',
                        'Learning & networking',
                        'Other'
                      ].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="opportunity" value={option} required className="w-5 h-5 text-[#002366]" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Investment Timeline */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[#002366]">
                      When are you looking to invest? <span className="text-[#002366]">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        'Within 3 months',
                        '3-6 months',
                        '6-12 months',
                        'Not sure'
                      ].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="timeline" value={option} required className="w-5 h-5 text-[#002366]" />
                          <span className="text-gray-900">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#002366]">
                      How did you hear about us?
                    </label>
                    <input type="text" name="hearAbout" placeholder="Optional" className="w-full bg-white border border-gray-400 rounded p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#002366]" />
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
