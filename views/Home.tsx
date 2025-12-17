import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { SectionTitle } from '../components/SectionTitle';
import { PRODUCTS } from '../constants';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="animate-fade-in">
      <HeroSlider navigate={navigate} />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">مرحباً بكم في تالين للألمونيوم</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                شريككم الموثوق في ليبيا لحلول الألمونيوم المتطورة. نجمع بين الخبرة العريقة والتكنولوجيا الحديثة لنقدم لكم منتجات تجمع بين الجمال، الأمان، والكفاءة.
            </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="أحدث المنتجات" 
            subtitle="اكتشف تشكيلة مختارة من أفضل منتجاتنا التي تلبي كافة الأذواق"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
                onClick={() => navigate('/products')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <span className="text-secondary font-bold group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                    المزيد من التفاصيل 
                    <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/products')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
            >
              عرض جميع المنتجات
            </button>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">هل لديك مشروع جاهز للتنفيذ؟</h2>
          <p className="text-xl text-gray-200 mb-10">
            فريقنا من المهندسين والفنيين جاهز لمساعدتك في تحويل رؤيتك إلى واقع. احصل على استشارة مجانية اليوم.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-secondary text-primary-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl"
          >
            تواصل معنا
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
