
import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-14">
      <div className="max-w-5xl mx-auto glass p-10 md:p-20 rounded-[50px] text-center border border-blue-500/20 shadow-2xl shadow-blue-500/5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-[10px] font-black text-blue-400 mb-8 uppercase tracking-widest">
          <Mail size={12} /> სიახლეები
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
          დარეგისტრირდი BetterProgrammer-ის განახლებების სიაში
        </h2>
        <p className="text-white/40 mb-12 text-lg">არასოდეს გამოტოვო ფასდაკლებები და სიახლეები</p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="👤 თქვენი სახელი" 
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-white"
          />
          <input 
            type="email" 
            placeholder="📧 თქვენი ელ-ფოსტა" 
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-white"
          />
          <button className="btn-grad px-10 py-4 rounded-2xl font-black whitespace-nowrap">
            მიიღე განახლებები
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
          <ShieldCheck size={14} className="text-blue-500/40" /> 
          თქვენი მონაცემები დაცულია და არ გადაეცემა მესამე პირებს
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
