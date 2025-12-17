import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="خدماتنا" 
          subtitle="نقدم حلولاً متكاملة تبدأ من الفكرة وحتى التسليم النهائي"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="text-center p-8 rounded-2xl bg-bg-light border border-gray-100 hover:border-secondary transition-colors duration-300 group">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon size={40} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-24">
            <h3 className="text-3xl font-bold text-center text-primary mb-12">كيف نعمل؟</h3>
            <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: 'التواصل', desc: 'استلام طلبكم ومناقشة المتطلبات' },
                        { step: '02', title: 'المعاينة', desc: 'زيارة الموقع ورفع القياسات' },
                        { step: '03', title: 'التصميم والتصنيع', desc: 'إعداد المخططات والتنفيذ بدقة' },
                        { step: '04', title: 'التركيب', desc: 'تركيب نهائي بإشراف هندسي' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 text-center relative">
                            <div className="w-12 h-12 bg-secondary text-primary-dark font-bold rounded-full flex items-center justify-center text-xl mx-auto mb-4 border-4 border-white shadow">
                                {item.step}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
