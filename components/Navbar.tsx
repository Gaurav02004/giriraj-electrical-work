import React, { useState } from 'react';
import { Zap, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-slate-800/50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-electric-600 p-2 rounded-lg group-hover:bg-electric-500 transition-colors shadow-lg shadow-electric-600/20">
              <Zap className="text-volt-400 w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1">
              <span className="text-lg md:text-2xl font-bold tracking-tight text-white leading-none">
                GIRIRAJ
              </span>
              <span className="text-sm md:text-xl font-bold tracking-tight text-electric-400 leading-none">
                ELECTRICALS WORKS
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white font-medium transition-colors hover:glow-sm transform duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9830257805"
              className="bg-electric-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-electric-500 transition-all shadow-lg shadow-electric-600/30 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>9830257805</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 p-2 hover:bg-slate-800 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-slate-900 border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 font-medium hover:text-electric-400 py-3 border-b border-slate-800/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:9830257805"
            className="bg-electric-600 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            24/7 Emergency Line
          </a>
        </div>
      </div>
    </nav>
  );
};