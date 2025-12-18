import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Star } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Dark background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-900/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-volt-900/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Giriraj Electricals</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to start your project or need emergency repair? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Box 1: Hours */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-700 hover:border-electric-600/50 transition-colors">
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-electric-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Operating Hours</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span>Mon - Fri</span>
                <span className="font-bold text-white">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span>Saturday</span>
                <span className="font-bold text-white">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between text-red-400 font-semibold">
                <span>Emergency</span>
                <span>24 / 7 Available</span>
              </div>
            </div>
            <div className="mt-6 bg-green-900/30 text-green-400 border border-green-900/50 py-2 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Technicians Available Now
            </div>
          </div>

          {/* Box 2: Direct Contact */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-700 hover:border-electric-600/50 transition-colors relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-volt-900/30 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-volt-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex flex-col">
                     <a href="tel:9830257805" className="text-lg font-bold text-white hover:text-electric-400 transition-colors">9830257805</a>
                     <a href="tel:9007168561" className="text-lg font-bold text-white hover:text-electric-400 transition-colors">9007168561</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-slate-300 text-sm">9C BEDIA DANGA 1ST LANE KOLKATA 700039</span>
                </li>
              </ul>
              <a href="tel:9830257805" className="mt-8 block w-full bg-electric-600 text-white py-4 rounded-xl font-bold text-center hover:bg-electric-500 transition-colors shadow-lg shadow-electric-900/50">
                Call Now
              </a>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-600/10 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* Box 3: Reviews */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-700 hover:border-electric-600/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Customer Rated 4.9/5</h3>
              <p className="text-slate-400 text-sm mb-4">Based on local reviews in Kolkata</p>
              <div className="flex gap-1 text-volt-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="italic text-slate-300">"Giriraj Electricals fixed our wiring issue in record time. Professional, clean, and reasonably priced!"</p>
              <p className="text-sm font-bold text-white mt-2">- Amit Roy, Kolkata</p>
            </div>
            <button className="mt-4 w-full border-2 border-slate-600 py-3 rounded-xl font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              Read More Reviews
            </button>
          </div>

          {/* Box 4: Map */}
          <div className="md:col-span-2 lg:col-span-3 h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-700 relative group">
             <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=9C+BEDIA+DANGA+1ST+LANE+KOLKATA+700039&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-slate-700">
                <div className="flex items-center gap-2">
                    <MapPin className="text-red-500 w-5 h-5" />
                    <div>
                        <p className="font-bold text-white">Service Area: Kolkata</p>
                        <p className="text-xs text-slate-400">9C BEDIA DANGA 1ST LANE</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};