
import React from 'react';
import { ArrowDownRight, Github, Code2, Cpu, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-32 px-6 md:px-14 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-20 right-[5%] text-[240px] font-black text-white/[0.015] select-none pointer-events-none heading-font leading-none uppercase tracking-tighter hidden lg:block">
        BETTER<br/>PROG
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
        <div>
          <div className="flex items-center gap-4 mb-12 fade-in-up">
            <div className="h-px w-16 bg-blue-500/50"></div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
              <Sparkles size={12} /> ESTABLISHED IN GEORGIA • 2026
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[160px] font-black mb-14 leading-[0.75] tracking-tighter fade-in-up uppercase heading-font" style={{ animationDelay: '0.1s' }}>
            LEARN<br/>
            <span className="text-white/20 hover:text-blue-500 transition-colors duration-1000">FASTER.</span><br/>
            BUILD <span className="text-blue-500">BIGGER.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button className="relative btn-premium px-16 py-6 rounded-full flex items-center gap-4 text-sm uppercase tracking-widest group overflow-hidden">
              <span className="relative z-10">დაიწყე სწავლა</span>
              <ArrowDownRight className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            <div className="border-l-2 border-white/5 pl-8">
              <p className="text-xl text-white/40 max-w-sm font-medium leading-tight">
                ერთადერთი ქართული პლატფორმა, რომელიც პროგრამირებას <span className="text-white">ხელოვნებად</span> აქცევს.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="premium-border glass p-10 rounded-[50px] space-y-4 hover:bg-white/[0.05] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Github size={24} />
            </div>
            <h3 className="font-black text-2xl leading-tight">World Class Resources</h3>
            <p className="text-xs text-white/40 leading-relaxed">საუკეთესო მსოფლიო ლიტერატურა, ადაპტირებული და ნათარგმნი ქართულ ენაზე.</p>
          </div>
          <div className="premium-border glass p-10 rounded-[50px] space-y-4 translate-x-12 hover:bg-blue-600 transition-all duration-700 group shadow-2xl shadow-blue-500/10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <Code2 size={24} />
            </div>
            <h3 className="font-black text-2xl leading-tight group-hover:text-white transition-colors">Clean Code Guru</h3>
            <p className="text-xs text-white/40 group-hover:text-white/70 transition-colors leading-relaxed">ისწავლე არა მხოლოდ წერა, არამედ კოდის არქიტექტურა და სტანდარტები.</p>
          </div>
          <div className="premium-border glass p-10 rounded-[50px] space-y-4 hover:bg-white/[0.05] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Cpu size={24} />
            </div>
            <h3 className="font-black text-2xl leading-tight">Advanced Logic</h3>
            <p className="text-xs text-white/40 leading-relaxed">სისტემური პროგრამირებიდან დაწყებული კიბერუსაფრთხოებით დამთავრებული.</p>
          </div>
        </div>
      </div>
      
      {/* Editorial Vertical Line */}
      <div className="absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block"></div>
    </section>
  );
};

export default Hero;
