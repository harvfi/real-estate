
import React from 'react';
import { Testimonial as TestimonialType } from '../types';

const testimonials: TestimonialType[] = [
  {
    name: "Marcus Thorne",
    role: "Real Estate Developer",
    content: "Working with Blackstar Investments changed the trajectory of my portfolio. Their access to high-yield residential properties is unmatched.",
    image: "https://picsum.photos/seed/marcus/200/200"
  },
  {
    name: "Elena Rodriguez",
    role: "Tech Entrepreneur",
    content: "The level of professionalism and strategic depth at Blackstar is world-class. They didn't just give me a plan; they gave me a vision for my family's legacy.",
    image: "https://picsum.photos/seed/elena/200/200"
  },
  {
    name: "David Chen",
    role: "Private Equity Partner",
    content: "Transparent, focused, and incredibly knowledgeable. Blackstar is the firm you want in your corner when navigating volatile markets.",
    image: "https://picsum.photos/seed/david/200/200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Client Success</h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-yellow-600" />
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-yellow-600 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-400 italic leading-relaxed">
              "{t.content}"
            </p>
            <div className="mt-6 flex text-yellow-600 text-sm space-x-1">
              {[...Array(5)].map((_, idx) => <i key={idx} className="fas fa-star"></i>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
