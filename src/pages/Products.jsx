import React from 'react';
import { products } from '../data';

const Products = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-12">Product Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm group">
              <div className="h-48 overflow-hidden mb-6 -mx-8 -mt-8 relative">
                 <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.name} />
                 {item.id === 1 && <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 uppercase">Exclusive</div>}
              </div>
              <div className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{item.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.description}</p>
              <div className="border-t border-zinc-100 pt-4 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase">{item.brand}</span>
                <span className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-0.5 cursor-pointer hover:text-amber-600 hover:border-amber-600 transition-colors">Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;