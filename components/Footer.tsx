
import React from 'react';
import { Facebook, Instagram, Github, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-24 pb-12 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h2 className="text-4xl font-black leading-tight tracking-tighter">
              ჩვენთვის შეუძლებელი <br/> არაფერია
            </h2>
            <p className="text-white/40 max-w-sm leading-relaxed">
              იცოდი რომ თუ ჩვენთან წიგნებს შეიძენთ, უფასო განახლებები გექნებათ მუდმივად.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Github].map((Icon, i) => (
                <button key={i} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-blue-500 mb-8 uppercase tracking-widest text-[10px]">პროდუქტები</h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li className="hover:text-white cursor-pointer transition-colors">Front-end</li>
              <li className="hover:text-white cursor-pointer transition-colors">Software</li>
              <li className="hover:text-white cursor-pointer transition-colors">Back-end</li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1 group">
                კარიერა <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-500 mb-8 uppercase tracking-widest text-[10px]">ინფო</h4>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li className="hover:text-white cursor-pointer transition-colors">ხშირად დასმული კითხვები</li>
              <li className="hover:text-white cursor-pointer transition-colors">ჩვენს შესახებ</li>
              <li className="hover:text-white cursor-pointer transition-colors">წესები და პირობები</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2026 BETTERPROGRAMMER. ყველა უფლება დაცულია.</p>
          <div className="flex gap-10">
            <span>Security</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
