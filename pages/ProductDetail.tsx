
import React from 'react';
import { Product } from '../types';
import { ArrowLeft, ShoppingCart, CheckCircle2, Star, Zap } from 'lucide-react';

interface Props {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<Props> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-white/60 hover:text-white mb-12 group transition-all">
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> უკან დაბრუნება
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-50 -z-10"></div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-[40px] shadow-2xl border border-white/10"
            />
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex gap-2 mb-4">
                {product.techStack.map(s => (
                  <span key={s} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                    {s}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl font-black mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-500">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <span className="text-white/40 text-sm">(120+ შეფასება)</span>
              </div>
              <p className="text-xl text-white/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-[32px] border border-white/10">
              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-black text-white">{product.price}₾</span>
                <span className="text-xl line-through text-white/30 mb-1">{product.originalPrice}₾</span>
                <span className="ml-auto bg-green-500/20 text-green-400 text-xs font-black px-3 py-1 rounded-full border border-green-500/30 animate-pulse">
                  -25% ფასდაკლება
                </span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-white text-black font-black py-5 rounded-2xl hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95">
                  <ShoppingCart size={20} /> ყიდვა ახლავე
                </button>
                <button className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Zap size={24} className="text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
