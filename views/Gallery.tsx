import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="معرض الصور" 
          subtitle="جولة بصرية في أبرز أعمالنا ومشاريعنا المنجزة"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md">
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  مشروع سكني فاخر
                </h3>
                <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  تم استخدام نظام الاستراكشرال المتقدم
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
