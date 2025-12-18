import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-3 mb-8 md:mb-0 group cursor-default">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 transition-colors group-hover:bg-slate-800">
              <Zap className="text-electric-500 w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight uppercase">
              Giriraj <span className="text-slate-500">Electricals</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#home" className="hover:text-electric-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-electric-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-electric-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-electric-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 text-center text-sm font-medium">
          <p className="mb-3 text-slate-400 uppercase tracking-widest">&copy; 2025 GIRIRAJ ELECTRICALS WORKS. KOLKATA.</p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">ISO 9001 Certified</span>
            <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};