import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-32 overflow-hidden bg-slate-950">
      {/* Dark Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-60"></div>

      {/* Glowing Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-electric-900/40 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-volt-900/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-electric-400 font-semibold text-sm mb-6 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-500"></span>
              </span>
              #1 Rated Electrician in Kolkata
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Powering Your World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-electric-500 to-volt-400">
                Safely & Efficiently
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Licensed, bonded, and insured experts for all your residential and commercial electrical needs. From modern smart homes to heavy industrial infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-electric-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-electric-500 transition-all shadow-xl shadow-electric-600/20 flex items-center justify-center gap-2 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="bg-slate-900 text-white border border-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg"
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-electric-500 w-5 h-5" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-volt-500 w-5 h-5" />
                On-Time Guarantee
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 relative animate-float">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                alt="Electrician working on panel" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-volt-500 p-3 rounded-2xl shadow-lg shadow-volt-500/20">
                    <Zap className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Emergency Service</p>
                    <p className="text-sm text-slate-300">Available 24/7 for urgent Kolkata repairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};