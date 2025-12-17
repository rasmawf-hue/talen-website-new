import React from 'react';
import { Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/1QEbg3877zAlGzgc22X7x8av5nOQAGcY4" 
                  alt="Talen Logo" 
                  className="h-16 w-auto bg-white rounded-lg p-1 object-contain" 
                />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              نحن رواد صناعة الألمونيوم في ليبيا. نقدم حلولاً مبتكرة تجمع بين الجودة العالية والتصاميم العصرية لتلبية كافة احتياجاتكم المعمارية.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1RPQUcwZvm/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => navigate(item.path)}
                    className="text-gray-300 hover:text-white hover:translate-x-[-5px] transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {item.label}
                  </button>
                </li>
              ))}
              {/* Added Links */}
              <li>
                <button 
                  onClick={() => navigate('/payment')}
                  className="text-gray-300 hover:text-white hover:translate-x-[-5px] transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  طرق الدفع
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/terms')}
                  className="text-gray-300 hover:text-white hover:translate-x-[-5px] transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  الشروط والأحكام
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-secondary text-xl font-bold mb-6">معلومات التواصل</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-secondary flex-shrink-0" size={20} />
                <span>طريق السرج، طرابلس، ليبيا</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <div className="flex flex-col" dir="ltr">
                  <span>091 250 7007</span>
                  <span>094 250 7007</span>
                  <span>094 255 7007</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <div className="flex flex-col">
                    <span>info@talen.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Talen Aluminum. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};