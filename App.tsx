
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureTicker from './components/FeatureTicker';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './pages/About';
import FAQ from './pages/FAQ';
import CodeTest from './pages/CodeTest';
import Packet from './pages/Packet';
import { PRODUCTS, CATEGORIES } from './constants';
import { Page, Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <FeatureTicker />
            {CATEGORIES.map(cat => (
              <ProductGrid 
                key={cat} 
                title={cat} 
                products={PRODUCTS.filter(p => p.category === cat)}
                onProductClick={(p) => {
                  setSelectedProduct(p);
                  setCurrentPage('product-detail');
                }}
              />
            ))}
            <Newsletter />
          </>
        );
      case 'about': return <About />;
      case 'faq': return <FAQ />;
      case 'codetest': return <CodeTest />;
      case 'packet': return <Packet />;
      case 'product-detail':
        return selectedProduct && (
          <div className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full rounded-[40px] shadow-2xl" />
              <div className="space-y-8">
                <h1 className="text-6xl font-black tracking-tighter">{selectedProduct.name}</h1>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-blue-500">{selectedProduct.price}₾</span>
                  <span className="text-xl line-through text-white/30">{selectedProduct.originalPrice}₾</span>
                </div>
                <p className="text-xl text-white/60 leading-relaxed">{selectedProduct.description}</p>
                <button className="btn-grad px-12 py-5 rounded-2xl font-black text-lg">ყიდვა ახლავე</button>
                <div className="pt-10 grid grid-cols-2 gap-4">
                  <div className="p-6 glass rounded-3xl border border-white/5">
                    <div className="font-bold text-blue-400 mb-1">ფორმატი</div>
                    <div className="text-xs uppercase opacity-40">PDF / EPUB</div>
                  </div>
                  <div className="p-6 glass rounded-3xl border border-white/5">
                    <div className="font-bold text-blue-400 mb-1">ენები</div>
                    <div className="text-xs uppercase opacity-40">Georgian / English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {renderContent()}
      </main>

      <Footer />

      {/* Persistent Background Blurs */}
      <div className="fixed top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default App;
