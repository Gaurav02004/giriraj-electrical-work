import React, { useEffect, useState } from 'react';
import { X, Zap } from 'lucide-react';

export const WelcomeModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      requestAnimationFrame(() => setVisible(true));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center px-4 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className={`bg-slate-900 rounded-[2.5rem] shadow-[0_0_100px_rgba(37,99,235,0.15)] max-w-sm w-full p-10 relative transform transition-all duration-300 border border-slate-800 ${visible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-4'}`}
      >
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full p-2.5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-4">
          <div className="w-20 h-20 bg-electric-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner animate-float border border-electric-500/20">
            <Zap className="w-10 h-10 text-electric-400 fill-current" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
            Safety First with <br/>
            <span className="text-electric-400 uppercase tracking-tight">Giriraj Electricals</span>
          </h3>
          <p className="text-slate-400 mb-10 text-base leading-relaxed">
            Protecting Kolkata homes for 15+ years. We are currently operating 24/7 for all emergency repairs and safety checks.
          </p>

          <button 
            onClick={handleClose}
            className="w-full py-4 bg-electric-600 hover:bg-electric-500 text-white font-extrabold rounded-2xl shadow-2xl shadow-electric-600/20 transition transform hover:-translate-y-1 active:scale-95"
          >
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};