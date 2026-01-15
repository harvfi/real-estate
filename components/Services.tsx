
import React from 'react';
import { ServiceCard as ServiceCardType } from '../types';

const services: ServiceCardType[] = [
  {
    title: "Real Estate Acquisition",
    description: "Access to off-market residential and commercial properties with high yield potential and strategic locations.",
    icon: "fa-building"
  },
  {
    title: "Wealth Management",
    description: "Customized financial roadmaps tailored to your long-term goals, family legacy, and risk tolerance.",
    icon: "fa-chart-pie"
  },
  {
    title: "Consulting & Strategy",
    description: "High-level advisory for business owners looking to scale, exit, or optimize their current capital allocation.",
    icon: "fa-handshake"
  },
  {
    title: "Portfolio Diversification",
    description: "Mitigating risk through exposure to diverse asset classes including private equity and emerging markets.",
    icon: "fa-layer-group"
  },
  {
    title: "Asset Protection",
    description: "Advanced legal and structural strategies to safeguard your holdings and ensure continuity across generations.",
    icon: "fa-shield-halved"
  },
  {
    title: "Market Intelligence",
    description: "Data-driven research and proprietary insights that keep you ahead of shifting global economic trends.",
    icon: "fa-brain"
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
