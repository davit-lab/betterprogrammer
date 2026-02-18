
import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="group relative glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] uppercase font-bold border border-white/10">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold tracking-tight">{product.name}</h3>
          <div className="flex flex-col items-end">
            <span className="text-sm line-through text-white/40 font-bold">{product.originalPrice}₾</span>
            <span className="text-lg text-blue-400 font-black">{product.price}₾</span>
          </div>
        </div>
        <p className="text-white/40 text-xs mb-6">{product.category} კატეგორია</p>
        <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-400 hover:text-white transition-colors flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          ყიდვა
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
