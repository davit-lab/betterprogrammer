
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  products: Product[];
  onProductClick: (p: Product) => void;
}

const ProductGrid: React.FC<Props> = ({ title, products, onProductClick }) => {
  return (
    <section className="py-24 px-6 md:px-14 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-14">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{title}</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>
        <button className="flex items-center gap-2 text-white/40 hover:text-white transition-all font-bold group">
          იხილეთ ყველა <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map(product => (
          <div key={product.id} onClick={() => onProductClick(product)} className="cursor-pointer">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
