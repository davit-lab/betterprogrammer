
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface Props {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<Props> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Cloud IDE', page: 'codetest' },
    { label: 'ჩვენს შესახებ', page: 'about' },
    { label: 'პაკეტები', page: 'packet' },
    { label: 'დახმარება', page: 'faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-14 py-6 ${
      scrolled ? 'bg-[#03070b]/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button onClick={() => onNavigate('home')} className="group">
            <img 
              src="https://framerusercontent.com/images/vIQjMQPeeaNc5PEMMxdiHjVUKjA.png" 
              alt="BetterProgrammer" 
              className="h-9 w-auto grayscale brightness-200 group-hover:grayscale-0 transition-all duration-700"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button 
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue-500 relative py-2 ${
                  currentPage === item.page ? 'text-blue-500' : 'text-white/40'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-2 text-white/20 hover:text-white/60 transition-colors cursor-pointer group">
            <Search size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest group-hover:pl-2 transition-all">სწრაფი ძებნა</span>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overhaul */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#03070b] z-[60] p-12 flex flex-col justify-center gap-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/40"><X size={32} /></button>
          {navItems.map(item => (
            <button 
              key={item.page}
              onClick={() => { onNavigate(item.page); setIsOpen(false); }}
              className="text-5xl font-black text-left tracking-tighter hover:text-blue-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-20 pt-10 border-t border-white/5 space-y-4">
             <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">დაგვიკავშირდით</p>
             <div className="flex gap-6 text-sm font-bold">
               <span>Instagram</span>
               <span>LinkedIn</span>
               <span>Github</span>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
