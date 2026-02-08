import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WeatherWidget from '../pages/WeatherWidget.jsx';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/auckland-night2.png',
      title: 'Welcome to New Zealand!',
      subtitle: 'Your one-stop guide to settling, living, and thriving in Aotearoa.',
      buttonText: 'Get Started',
      buttonLink: '/arrival'
    },
    {
      id: 2,
      image: '/images/auckland-night.png',
      title: 'Discover Aotearoa',
      subtitle: 'Explore the stunning landscapes and rich culture of New Zealand.',
      buttonText: 'Get Started',
      buttonLink: '/arrival'
    },
    {
      id: 3,
      image: '/images/auckland-night1.png',
      title: 'Start Your Journey',
      subtitle: 'Begin your adventure in one of the most beautiful countries in the world.',
      buttonText: 'Get Started',
      buttonLink: '/arrival'
    }
  ];

  // 自动播放
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-[400px] lg:h-[500px] overflow-hidden">
      {/* 轮播图片 */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Weather Widget */}
      <WeatherWidget />

      {/* 文案内容 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
          {slides[currentSlide].title}
        </h2>
        <p className="text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mb-6 drop-shadow-lg">
          {slides[currentSlide].subtitle}
        </p>
        
        <Link
          to={slides[currentSlide].buttonLink}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {slides[currentSlide].buttonText}
        </Link>
      </div>

      {/* 导航按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 进度条 */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full z-20">
        <div
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;
