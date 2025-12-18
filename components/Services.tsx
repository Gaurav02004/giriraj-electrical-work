import React from 'react';
import { Lightbulb, Plug, Home, BatteryCharging, Factory, AlertTriangle } from 'lucide-react';

interface ServiceDisplayItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  glow: string;
}

export const Services: React.FC = () => {
  const services: ServiceDisplayItem[] = [
    {
      icon: <Home className="w-8 h-8 text-electric-400" />,
      title: "Residential Wiring",
      description: "Full home rewiring, high-precision outlet installation, and expert safety inspections for total peace of mind.",
      glow: "hover:shadow-electric-500/10"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-volt-400" />,
      title: "Modern Lighting",
      description: "Custom indoor and landscape lighting design, energy-efficient LED upgrades, and smart home lighting controls.",
      glow: "hover:shadow-volt-500/10"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Panel Upgrades",
      description: "Comprehensive panel modernization to safely handle increased power demands for modern luxury electronics.",
      glow: "hover:shadow-red-500/10"
    },
    {
      icon: <BatteryCharging className="w-8 h-8 text-emerald-400" />,
      title: "EV Charging",
      description: "Certified Level 2 charger installations for Tesla and all major electric vehicles with load-balancing tech.",
      glow: "hover:shadow-emerald-500/10"
    },
    {
      icon: <Plug className="w-8 h-8 text-purple-400" />,
      title: "Smart Home Tech",
      description: "Seamless integration of smart thermostats, automated security, and central control systems for modern living.",
      glow: "hover:shadow-purple-500/10"
    },
    {
      icon: <Factory className="w-8 h-8 text-slate-300" />,
      title: "Industrial & Office",
      description: "Heavy-duty electrical maintenance and code-compliant installations for large-scale enterprise environments.",
      glow: "hover:shadow-slate-500/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Premium Expertise</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From minor repairs to massive industrial installations, our Kolkata-based team delivers precision engineering and world-class safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-slate-900 rounded-3xl p-8 border border-slate-800 transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full ${service.glow} hover:border-slate-700 shadow-2xl`}
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 group-hover:bg-slate-700 transition-all duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
              <a 
                href="#contact" 
                className="pt-4 flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-wider"
              >
                Inquire Now <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background radial fade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-electric-900/5 to-transparent pointer-events-none"></div>
    </section>
  );
};