import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SLIDES } from '../constants';

interface HeroSliderProps {
  navigate: (path: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ navigate }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === SLIDES.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? SLIDES.length - 1 : current - 1);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] hover:scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className={`max-w-4xl transition-all duration-1000 delay-300 transform ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
                {slide.description}
              </p>
              <button
                onClick={() => navigate(slide.ctaLink)}
                className="bg-secondary text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg"
              >
                {slide.ctaText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary p-3 rounded-full text-white backdrop-blur-sm transition-all border border-white/20"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary p-3 rounded-full text-white backdrop-blur-sm transition-all border border-white/20"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
