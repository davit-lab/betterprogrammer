
import React from 'react';
import { ArrowRight, Terminal, Zap, Shield, Code, Cpu } from 'lucide-react';

const Packet: React.FC = () => {
  const paths = [
    {
      id: 'frontend',
      tag: 'Front-end',
      comment: '// იდეალური მეთოდი ვისაც საფუძვლიანად სურს Front-end ის ათვისება',
      price: '97.5',
      originalPrice: '160',
      discount: '-51.1%',
      books: ['Html', 'Css', 'Javascript', 'Figma'],
      color: 'blue'
    },
    {
      id: 'backend',
      tag: 'Back-end',
      comment: '// იდეალური მეთოდი ვისაც საფუძვლიანად სურს Back-end ის ათვისება',
      price: '176',
      originalPrice: '360',
      discount: '-51.1%',
      books: ['python1&2', 'javascript1&2', 'C++', 'C#', 'Sql', 'Java', 'PHP'],
      color: 'emerald'
    },
    {
      id: 'software',
      tag: 'Software',
      comment: '// იდეალური მეთოდი ვისაც საფუძვლიანად სურს Software ის ათვისება',
      price: '142',
      originalPrice: '290',
      discount: '-51.1%',
      books: ['Cybersecurity1&2&3', 'Acronis Software', 'Cyber ethics', 'Kali Linux'],
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen pt-44 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Technical Header */}
        <section className="mb-24">
          <div className="mono-font text-blue-500 text-3xl font-black mb-4 tracking-widest animate-pulse">
            SELECT_YOUR_PATH
          </div>
          <div className="mono-font text-white/30 text-sm tracking-widest uppercase">
            // Initialize your programming career
          </div>
        </section>

        {/* Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {paths.map((path) => (
            <div key={path.id} className="relative group">
              {/* Path Opening Tag */}
              <div className="mono-font text-white/10 text-xl mb-4 group-hover:text-blue-500/40 transition-colors">
                &lt;/&gt;
              </div>

              <div className="premium-border glass rounded-[40px] p-10 flex flex-col h-full bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700">
                {/* Path Identifier */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="mono-font text-blue-500 text-2xl font-black">&gt;</span>
                  <h3 className="text-3xl font-black heading-font tracking-tight uppercase group-hover:text-blue-400 transition-colors">{path.tag}</h3>
                </div>

                {/* Path Comment */}
                <p className="mono-font text-[11px] leading-relaxed text-white/40 mb-10 min-h-[3rem]">
                  {path.comment}
                </p>

                {/* Pricing Block */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-black heading-font tracking-tighter">{path.price}</span>
                    <span className="text-3xl font-black text-blue-500">₾</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm font-bold text-white/20">/{path.originalPrice} ნაცვლად</span>
                    {path.discount && (
                      <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {path.discount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Knowledge Bundles */}
                <div className="flex flex-wrap gap-2 mb-12 flex-1 items-start content-start">
                  {path.books.map((book) => (
                    <span key={book} className="mono-font text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-white/50 group-hover:text-white/90 transition-colors">
                      [{book}]
                    </span>
                  ))}
                </div>

                {/* Action Trigger */}
                <button className="relative w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.25em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500 active:scale-95 group/btn">
                  <span className="flex items-center justify-center gap-2">
                    &gt; EXECUTE_PURCHASE_
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-blue-600 blur opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                </button>
              </div>

              {/* Path Closing Tag */}
              <div className="mono-font text-white/10 text-xl mt-4 text-right group-hover:text-blue-500/40 transition-colors">
                &lt;/&gt;
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Package */}
        <section className="mt-40 relative group">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
          <div className="glass rounded-[60px] p-12 md:p-24 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-[0.02] rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Terminal size={600} />
            </div>
            
            <div className="max-w-2xl relative z-10">
              <div className="mono-font text-blue-500 text-sm font-bold mb-6 tracking-widest uppercase">
                // SYSTEM_WIDE_UNLOCK
              </div>
              <h2 className="text-5xl md:text-8xl font-black heading-font tracking-tighter uppercase mb-8 leading-[0.85]">
                LIFETIME_<br/><span className="text-blue-500">ACCESS</span>_CORE
              </h2>
              <p className="text-xl text-white/40 leading-relaxed mb-10 max-w-lg">
                შეიძინეთ ნებისმიერი პაკეტი და მიიღეთ მუდმივი წვდომა ყველა განახლებაზე. ჩვენი სისტემა იზრდება თქვენთან ერთად.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                  <Zap size={16} className="text-blue-500" /> Auto_Updates
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                  <Shield size={16} className="text-emerald-500" /> Secure_Protocol
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto relative z-10">
              <div className="p-10 md:p-14 rounded-[56px] bg-white text-black text-center shadow-2xl relative overflow-hidden group/box">
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover/box:opacity-5 transition-opacity"></div>
                <div className="text-[11px] font-black uppercase tracking-[0.3em] opacity-30 mb-4">Ultimate_Experience</div>
                <div className="text-8xl font-black heading-font mb-10 tracking-tighter">400₾</div>
                <button className="w-full py-6 px-16 bg-blue-600 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-black transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20">
                  UNLIMIT_EVERYTHING
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Decorative Editorial Elements */}
      <div className="fixed left-14 top-0 bottom-0 w-px bg-white/5 hidden xl:block -z-10"></div>
      <div className="fixed right-14 top-0 bottom-0 w-px bg-white/5 hidden xl:block -z-10"></div>
    </div>
  );
};

export default Packet;
