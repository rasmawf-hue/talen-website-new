import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { COMPANY_STATS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-bg-light min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="من نحن" />

        <div className="flex justify-center mb-20">
          <div className="space-y-6 max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-primary">شركة Talen للألمونيوم</h3>
            <p className="text-gray-600 text-lg leading-loose">
              تأسست شركة تالين للألمونيوم لتكون علامة فارقة في سوق الإنشاءات الليبي. نحن متخصصون في تصنيع وتركيب جميع أنواع الألمونيوم والواجهات الزجاجية وفق أعلى المعايير العالمية.
            </p>
            <p className="text-gray-600 text-lg leading-loose">
              بفضل فريقنا المتميز من المهندسين والفنيين، وخبرتنا التي تمتد لأكثر من 15 عاماً، نجحنا في تنفيذ مئات المشاريع الناجحة التي تتحدث عن جودتنا.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-secondary text-center">
                <span className="block text-4xl font-bold text-primary mb-2">15+</span>
                <span className="text-gray-500">سنة خبرة</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-secondary text-center">
                <span className="block text-4xl font-bold text-primary mb-2">500+</span>
                <span className="text-gray-500">مشروع ناجح</span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Chart Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">نمو مشاريعنا عبر السنوات</h3>
          <div className="h-[400px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPANY_STATS} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#06542C', color: '#fff', borderRadius: '8px', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: 'rgba(212, 175, 55, 0.1)' }}
                />
                <Bar dataKey="value" fill="#06542C" radius={[4, 4, 0, 0]} name="عدد المشاريع" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;