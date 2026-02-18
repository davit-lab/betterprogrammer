
import React from 'react';
import { Target, Users, Zap, BookOpen, Shield, Code, Sparkles, Globe, History, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header Section */}
        <section className="relative mb-32">
          <div className="absolute -top-20 -left-10 text-[180px] font-black text-white/[0.02] select-none pointer-events-none heading-font leading-none uppercase tracking-tighter whitespace-nowrap hidden lg:block">
            Our Legacy
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-8">
                <Sparkles size={12} /> The Story of BetterProgrammer
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase heading-font mb-10">
                Crafting the<br/>
                <span className="text-blue-500">Future</span> of<br/>
                <span className="text-white/20">Learning.</span>
              </h1>
            </div>
            
            <div className="lg:w-1/3 border-l border-white/10 pl-8 pb-4">
              <p className="text-xl text-white/40 leading-relaxed font-medium">
                ჩვენი მისიაა პროგრამირების სწავლა ვაქციოთ არა მხოლოდ საჭიროებად, არამედ ხელოვნებად — ხელმისაწვდომი ყველა ქართველისთვის.
              </p>
            </div>
          </div>
        </section>

        {/* The Narrative Grid - Our Roots */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Story Block */}
          <div className="lg:col-span-8 premium-border glass p-12 md:p-20 rounded-[60px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <History size={200} />
            </div>
            <h2 className="text-4xl font-black mb-10 tracking-tight">საიდან დაიწყო ყველაფერი?</h2>
            <div className="space-y-8 text-lg text-white/60 leading-relaxed max-w-2xl">
              <p>
                BetterProgrammer-ის გუნდი დაიბადა <span className="text-white font-bold">2026 წლის სექტემბერში</span>. თავდაპირველად ყველაფერი ნელა და რთულად მიდიოდა: გვქონდა მხოლოდ <span className="text-blue-400 font-bold">2–3 წიგნი</span>, რადგან გამოცდილება წიგნის შექმნაში მჭიდრო არ იყო. 
              </p>
              <p>
                გვიჭირდა გვერდების შექმნა, სავარჯიშოების გადამოწმება და წიგნების დიზაინის სრულყოფა. ეს იყო გამოწვევებით სავსე პერიოდი, მაგრამ ჩვენი ხედვა ყოველთვის ნათელი იყო.
              </p>
              <p className="text-white font-medium">
                ახლა ეს სირთულეები უკვე გადალახულია. ნელ-ნელა წიგნების დიზაინში უკვე შეამჩნევთ ცვლილებებს, რაც გვიჩვენებს ჩვენს უწყვეტ განვითარებას.
              </p>
            </div>
          </div>

          {/* Quick Stats Side Panel */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 premium-border glass p-10 rounded-[50px] bg-blue-600/5 flex flex-col justify-center">
              <TrendingUp className="text-blue-500 mb-6" size={32} />
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">უწყვეტი ზრდა</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                ყოველდღიურად ვმუშაობთ სისტემის დახვეწაზე, რათა მკითხველმა მიიღოს სრულყოფილი და ხარისხიანი პროდუქტი.
              </p>
            </div>
            <div className="flex-1 premium-border glass p-10 rounded-[50px] border-white/5 flex flex-col justify-center">
              <Users className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">ახალგაზრდა გუნდი</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                ჩვენი გუნდი აერთიანებს პროფესიონალებს, რომლებსაც სჯერათ, რომ სწავლის გზა უნდა შთააგონებდეს.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Statement Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-10">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight">
              სწავლა, რომელიც <br/>
              <span className="text-blue-500">მომავალს ქმნის</span>
            </h2>
            <div className="space-y-6 text-white/50 leading-relaxed italic border-l-2 border-blue-500/30 pl-8">
              <p>
                "ჩვენი მიზანია ცოდნის მიღება გახდეს ხელმისაწვდომი ყველასთვის — ხარისხიანად, თანამედროვე მიდგომებით და ტექნოლოგიური სიზუსტით."
              </p>
              <p>
                "ეს მხოლოდ დასაწყისია — წინ გველის გზა, რომელიც ჩვენთან ერთად იქცევა მომავალის საგანმანათლებლო ისტორიად."
              </p>
            </div>
          </div>
          <div className="premium-border glass p-12 rounded-[60px] bg-white/[0.02]">
            <p className="text-lg text-white/70 leading-relaxed">
              BetterProgrammer მუდმივად ცდილობს სიახლეების დანერგვას, ბაზრის მოთხოვნების გასწრებას და მაქსიმალური მნიშვნელობის შეთავაზებას მომხმარებლისთვის. ჩვენი მიზანია, რომ ჩვენი წიგნები იყოს ყველაზე მეტად მოთხოვნადი, ხოლო ყოველ მომხმარებელს – სარგებელი და კმაყოფილება მოუტანოს.
            </p>
          </div>
        </section>

        {/* The Stats / Impact section */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-white/5"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">Impact Report 2026</span>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
            <div className="text-center md:text-left px-8 group">
              <div className="text-7xl md:text-9xl font-black heading-font text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">14</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/30 border-t border-white/5 pt-4">ავტორისეული წიგნი</p>
            </div>
            <div className="text-center md:text-left px-8 group">
              <div className="text-7xl md:text-9xl font-black heading-font text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">400</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/30 border-t border-white/5 pt-4">ერთგული მკითხველი</p>
            </div>
            <div className="text-center md:text-left px-8 group">
              <div className="text-7xl md:text-9xl font-black heading-font text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">97<span className="text-blue-500">%</span></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/30 border-t border-white/5 pt-4">წარმატების მაჩვენებელი</p>
            </div>
          </div>
        </section>

        {/* Culture / Philosophy Section */}
        <section className="premium-border glass rounded-[60px] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>
          
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10">
              <Heart size={40} className="text-blue-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase heading-font leading-none">
              მომავალი <span className="text-blue-500">ჩვენთან</span> ერთად.
            </h2>
            <p className="text-xl text-white/40 leading-relaxed">
              ჩვენ ვმუშაობთ ყოველდღიურად იმისთვის, რომ ჩვენი სისტემა განვითარდეს, ისწავლოს და გაიზარდოს მომხმარებელთან ერთად. ჩვენ ვართ ადამიანები, რომლებმაც პირველად გადავდგით ნაბიჯი ისეთი სასწავლო სისტემის შექმნისკენ, რომელიც სწავლას აქცევს მარტივ, ინტუიციურ და უწყვეტად განვითარებად პროცესად.
            </p>
            <div className="pt-10 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Innovation</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Quality</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Community</div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Future</div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Editorial Decorative Vertical Line */}
      <div className="fixed left-14 top-0 bottom-0 w-px bg-white/5 hidden xl:block -z-10"></div>
    </div>
  );
};

export default About;
