import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { FileText, ShieldCheck, Wrench } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="الشروط والأحكام" 
          subtitle="يرجى قراءة الشروط والأحكام بعناية قبل التعاقد"
        />

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-bg-light p-8 rounded-2xl border-r-4 border-secondary shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">1. شروط التعاقد</h3>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-secondary">
              <li>يتم التعاقد بعد الاتفاق على جميع التفاصيل والمواصفات</li>
              <li>يجب دفع دفعة مقدمة لا تقل عن 30% من إجمالي قيمة العقد</li>
              <li>العقد ملزم للطرفين ولا يمكن إلغاؤه إلا بموافقة كتابية</li>
              <li>يجب على العميل توفير الموقع جاهزاً للتركيب في الموعد المحدد</li>
            </ul>
          </div>

          <div className="bg-bg-light p-8 rounded-2xl border-r-4 border-secondary shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">2. الضمان</h3>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-secondary">
              <li>ضمان 5 سنوات على الألمونيوم ضد عيوب التصنيع</li>
              <li>ضمان سنة واحدة على الزجاج والإكسسوارات</li>
              <li>الضمان لا يشمل الأضرار الناتجة عن سوء الاستخدام</li>
              <li>يجب الإبلاغ عن أي عيوب خلال 7 أيام من التركيب</li>
            </ul>
          </div>

          <div className="bg-bg-light p-8 rounded-2xl border-r-4 border-secondary shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <Wrench size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">3. الصيانة</h3>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-secondary">
              <li>توفر الشركة خدمة صيانة مجانية خلال فترة الضمان</li>
              <li>الصيانة الدورية الموصى بها: كل 6 أشهر</li>
              <li>تتوفر قطع الغيار لمدة 10 سنوات على الأقل</li>
              <li>تكلفة الصيانة بعد انتهاء الضمان يتم تحديدها حسب نوع العمل</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;