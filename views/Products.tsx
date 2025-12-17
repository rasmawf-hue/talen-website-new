import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="py-20 bg-bg-light min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="منتجاتنا" 
          subtitle="مجموعة شاملة من حلول الألمونيوم المصممة لتلبية احتياجاتك"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-secondary text-primary-dark font-bold px-4 py-2 rounded-tl-xl">
                  جودة عالية
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
