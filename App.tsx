import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { WelcomeModal } from './components/WelcomeModal';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-x-hidden selection:bg-electric-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
      
      {/* Interactive Elements */}
      <AIChat />
      <WelcomeModal />
    </div>
  );
}

export default App;