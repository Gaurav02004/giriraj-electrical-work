import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const benefits = [
    "Certified Master Electricians in Kolkata",
    "Upfront Pricing - Guaranteed No Surprises",
    "Rapid Same-Day Service Response",
    "Lifetime Workmanship Warranty",
    "Reliable Local Experts Since 2005"
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrician team" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-electric-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block border border-electric-500/30">
              <p className="text-5xl font-extrabold mb-1">15+</p>
              <p className="text-electric-100 font-semibold">Years Service</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Kolkata Trusts <br/> Giriraj Electricals
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We understand that electrical issues aren't just an inconvenience—they're a safety risk. Our team prioritizes meticulous precision and transparent communication, ensuring your home or business is powered safely using the latest industry standards.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="p-1 bg-slate-800 rounded-full group-hover:bg-electric-900/50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-volt-400 flex-shrink-0" />
                  </div>
                  <span className="text-slate-200 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a href="#contact" className="inline-flex items-center gap-2 text-electric-400 font-bold text-lg hover:text-electric-300 transition-colors pb-1 border-b-2 border-slate-800 hover:border-electric-500/50">
                Contact Our Team <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};