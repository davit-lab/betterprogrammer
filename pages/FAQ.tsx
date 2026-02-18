
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: "როგორ მივიღებ წიგნს?", a: "წიგნი გადმოგეგზავნებათ მითითებულ ელ-ფოსტაზე გადახდისთანავე." },
  { q: "განახლებები ფასიანია?", a: "არა, ჩვენს პლატფორმაზე ყველა წიგნის განახლება არის სრულიად უფასო მუდმივად." },
  { q: "როგორ დაგიკავშირდეთ?", a: "შეგიძლიათ მოგვწეროთ Facebook/Instagram გვერდზე ან გამოიყენოთ საიტის მხარდაჭერის ჩათი." }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-44 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-6xl font-black mb-14 tracking-tighter">ხშირად დასმული კითხვები</h1>
      <div className="space-y-4">
        {FAQS.map((item, i) => (
          <div key={i} className="glass rounded-[32px] overflow-hidden border border-white/5">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-xl font-bold">{item.q}</span>
              {open === i ? <Minus className="text-blue-500" /> : <Plus className="text-blue-500" />}
            </button>
            {open === i && (
              <div className="px-8 pb-8 text-white/60 text-lg border-t border-white/5 pt-6 animate-in slide-in-from-top-2">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
