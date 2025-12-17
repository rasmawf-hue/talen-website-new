import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Wallet, Landmark, CreditCard, CalendarClock } from 'lucide-react';

const Payment: React.FC = () => {
  return (
    <div className="py-20 bg-bg-light min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="طرق الدفع" 
          subtitle="خيارات دفع متعددة لراحتكم"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <Wallet size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">الدفع النقدي</h3>
            <p className="text-gray-600">يمكنكم الدفع نقداً عند التسليم أو في مقر الشركة</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <Landmark size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">التحويل البنكي</h3>
            <p className="text-gray-600 mb-2">رقم الحساب البنكي:</p>
            <p className="text-xl font-bold text-primary dir-ltr font-mono bg-gray-50 p-3 rounded-lg text-center select-all" dir="ltr">
              LY79025004102186143404020
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <CreditCard size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">البطاقة المصرفية</h3>
            <p className="text-gray-600">نقبل الدفع عبر البطاقات المصرفية (Visa, Mastercard) في مقر الشركة</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <CalendarClock size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">الدفع بالتقسيط</h3>
            <p className="text-gray-600">نوفر خيارات دفع بالتقسيط للمشاريع الكبيرة (حسب الاتفاق)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;