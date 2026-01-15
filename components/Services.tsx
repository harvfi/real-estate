
import React from 'react';
import { ServiceCard as ServiceCardType } from '../types';

const services: ServiceCardType[] = [
  {
    title: "Value-Add Acquisitions",
    description: "Acquire & reposition underperforming assets to create value & drive consistent returns through strategic renovations and operational improvements.",
    icon: "fa-building"
  },
  {
    title: "Southeast Market Focus",
    description: "Target markets with strong economic fundamentals in North Carolina, South Carolina, and Georgia—backed by data & local insight.",
    icon: "fa-map-marker-alt"
  },
  {
    title: "Risk-Adjusted Returns",
    description: "Our strategy balances cash flow, equity growth, and downside protection for resilient performance across market cycles.",
    icon: "fa-shield-halved"
  }
];

const ServiceCard: React.FC<ServiceCardType> = ({ title, description, icon }) => (
  <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-yellow-600/30">
    <div className="w-16 h-16 bg-yellow-600/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-yellow-600 transition-colors">
      <i className={`fas ${icon} text-2xl text-yellow-600 group-hover:text-black transition-colors`}></i>
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
