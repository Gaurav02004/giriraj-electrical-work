import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Zap, Loader2, MessageSquare } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaste! I'm the Giriraj Electricals AI assistant. How can I help you with your electrical needs in Kolkata today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await generateAIResponse(userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-electric-600 hover:bg-electric-500 text-white p-5 rounded-3xl shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-110 group ${isOpen ? 'hidden' : 'block'}`}
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-volt-500"></span>
        </span>
        <MessageSquare className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-2xl">
            Electrical AI Help
        </span>
      </button>

      {/* Chat Interface */}
      <div 
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
      >
        <div 
          className={`bg-slate-900 w-full sm:max-w-md h-[85vh] sm:h-[650px] sm:rounded-[2.5rem] rounded-t-[2.5rem] shadow-[0_0_100px_rgba(37,99,235,0.1)] flex flex-col border border-slate-800 transform transition-transform duration-300 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-full sm:translate-y-0 sm:scale-95'}`}
        >
          {/* Header */}
          <div className="bg-slate-800 p-6 rounded-t-[2.5rem] flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-4">
              <div className="bg-electric-600/20 p-3 rounded-2xl">
                <Bot className="text-electric-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Giriraj Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Expert Support Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-2 hover:bg-slate-700 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/40 no-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-slate-700' : 'bg-slate-800'}`}
                >
                  {msg.role === 'user' ? 
                    <div className="w-5 h-5 bg-slate-500 rounded-full" /> : 
                    <Zap className="w-5 h-5 text-electric-400 fill-current" />
                  }
                </div>
                <div 
                  className={`p-4 rounded-[1.5rem] max-w-[85%] text-[15px] leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-electric-600 text-white rounded-tr-none shadow-electric-600/10' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Zap className="w-5 h-5 text-electric-400 animate-pulse" />
                  </div>
                  <div className="bg-slate-800 p-5 rounded-2xl rounded-tl-none border border-slate-700 shadow-lg">
                    <Loader2 className="w-5 h-5 animate-spin text-electric-400" />
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 bg-slate-900 border-t border-slate-800 rounded-b-[2.5rem]">
            <form onSubmit={handleSubmit} className="flex gap-3 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask our electrical expert..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-electric-500 focus:bg-slate-700 transition text-[15px] outline-none text-white placeholder-slate-500"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputValue.trim()}
                className="bg-electric-600 hover:bg-electric-500 disabled:opacity-30 disabled:cursor-not-allowed text-white w-14 h-14 rounded-2xl flex items-center justify-center transition shadow-xl shadow-electric-600/20"
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};