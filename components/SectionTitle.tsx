import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${light ? 'bg-secondary' : 'bg-secondary'}`}></div>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
