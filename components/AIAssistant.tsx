
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getGeminiResponse(input);
    const aiMsg: ChatMessage = { role: 'model', text: response };
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-40 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:scale-110 hover:-translate-y-2 transition-all duration-500 text-white"
      >
        <MessageSquare size={28} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#03070b]"></div>
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-[100] w-full sm:w-[450px] bg-[#03070b]/95 backdrop-blur-3xl border-l border-white/10 flex flex-col shadow-[-50px_0_100px_rgba(0,0,0,0.5)] animate-in slide-in-from-right duration-500">
          <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl border border-blue-500/20 flex items-center justify-center text-blue-500">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-black heading-font text-xl uppercase tracking-tight">AI_ASSISTANT_V3</h4>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">System Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-red-500/20 transition-all">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                <div className="p-6 rounded-[32px] bg-blue-600/5 border border-blue-500/10 text-blue-400">
                   <Sparkles size={48} className="opacity-40 mb-4 mx-auto" />
                   <h5 className="font-bold text-lg mb-2">როგორ დაგეხმაროთ?</h5>
                   <p className="text-sm text-white/30 max-w-xs">დასვით ნებისმიერი კითხვა პროგრამირებაზე ან დაგვეხმარეთ წიგნის შერჩევაში.</p>
                </div>
                <div className="grid grid-cols-1 gap-2 w-full">
                  {["როგორ დავიწყო სწავლა?", "რომელი წიგნია JS-ისთვის?", "რა არის Cloud IDE?"].map(hint => (
                    <button key={hint} onClick={() => setInput(hint)} className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:bg-white/10 hover:text-white transition-all text-left">
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[85%] p-5 rounded-[24px] text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/10' 
                    : 'bg-white/5 text-white/80 border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-5 rounded-[24px] flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Processing...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-8 border-t border-white/5 bg-white/[0.01]">
            <div className="relative group">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="დასვი კითხვა..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder:text-white/20"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:grayscale"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-white/10">
              Powered by BetterProgrammer AI Core
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
