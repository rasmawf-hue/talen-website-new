import React from 'react';
import { MapPin, Phone, Mail, Send, Facebook, ExternalLink } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-bg-light min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="تواصل معنا" 
          subtitle="نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info & Map */}
          <div className="p-8 lg:p-12 bg-primary text-white">
            <h3 className="text-2xl font-bold mb-8">معلومات الاتصال</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-secondary">العنوان</h4>
                  <p className="text-gray-200">طريق السرج، طرابلس، ليبيا</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-secondary">أرقام الهاتف</h4>
                  <div className="text-gray-200" dir="ltr">
                    <p className="flex justify-end gap-2"><span className="text-secondary text-sm">الإدارة:</span> 091 250 7007</p>
                    <p className="flex justify-end gap-2"><span className="text-secondary text-sm">المبيعات:</span> 094 250 7007</p>
                    <p className="flex justify-end gap-2"><span className="text-secondary text-sm">التصنيع:</span> 094 255 7007</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-secondary">البريد الإلكتروني</h4>
                  <p className="text-gray-200">info@talen.com</p>
                  <p className="text-gray-200">sales@talen.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Facebook className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-secondary">فيسبوك</h4>
                  <a 
                    href="https://www.facebook.com/share/1RPQUcwZvm/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white underline flex items-center gap-2"
                  >
                    زيارة صفحتنا
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border-4 border-white/20 bg-white">
               <div className="h-64">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.789!2d13.187!3d32.8872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUzJzE0LjAiTiAxM8KwMTEnMTMuMiJF!5e0!3m2!1sar!2sly!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Talen Location"
                 ></iframe>
               </div>
               <a 
                href="https://maps.app.goo.gl/5wd7PecywkJCir9WA?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
               >
                 <MapPin size={16} />
                 فتح في خرائط جوجل
               </a>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-primary mb-8">أرسل لنا رسالة</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('تم إرسال رسالتك بنجاح!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-gray-700">الاسم الكامل</label>
                  <input type="text" required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="الاسم" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-gray-700">رقم الهاتف</label>
                  <input type="tel" required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="09X XXXXXXX" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-6">
                <label className="font-medium text-gray-700">البريد الإلكتروني (اختياري)</label>
                <input type="email" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="email@example.com" />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="font-medium text-gray-700">رسالتك</label>
                <textarea rows={5} required className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                <span>إرسال الآن</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;