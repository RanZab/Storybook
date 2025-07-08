'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-green via-pastel-purple to-pastel-pink overflow-hidden">
      {/* Decorative Christmas Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Musical Notes */}
        <div className="absolute top-20 left-10 text-christmas-green opacity-30 animate-gentle-float">
          <span className="text-4xl">♪</span>
        </div>
        
        <div className="absolute top-40 right-20 text-christmas-red opacity-30 animate-gentle-float" style={{animationDelay: '1s'}}>
          <span className="text-3xl">♫</span>
        </div>

        <div className="absolute bottom-32 left-20 text-christmas-gold opacity-30 animate-gentle-float" style={{animationDelay: '2s'}}>
          <span className="text-2xl">♬</span>
        </div>

        {/* Christmas Tree Silhouettes */}
        <div className="absolute bottom-0 right-10 text-christmas-green opacity-20 animate-twinkle">
          <span className="text-6xl">🎄</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="font-cursive text-6xl md:text-8xl lg:text-9xl text-christmas-green mb-6 leading-tight">
            A Wintry Piano
            <br />
            <span className="text-christmas-red">Wonderland</span>
          </h1>

          {/* Subtitle */}
          <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-christmas-green mb-8 opacity-90">
            Christmas Carols Reimagined by
            <br />
            <span className="font-cursive text-2xl md:text-3xl lg:text-4xl text-christmas-red">
              Oded Essner
            </span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-christmas-green/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience beloved Christmas classics through beautiful piano arrangements, 
            accompanied by whimsical illustrations that capture the nostalgic joy of the holiday season.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-christmas-red text-white px-8 py-4 rounded-full font-elegant text-lg font-semibold shadow-lg hover:bg-christmas-red/90 transition-all duration-300 hover:scale-105">
              🎵 Listen & Buy Now
            </button>
            
            <button className="border-2 border-christmas-green text-christmas-green px-8 py-4 rounded-full font-elegant text-lg font-semibold hover:bg-christmas-green hover:text-white transition-all duration-300 hover:scale-105">
              🎼 Preview Songs
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Hearts */}
      <div className="absolute top-1/3 left-5 text-christmas-red opacity-20 animate-twinkle">
        <span className="text-3xl">❤️</span>
      </div>

      <div className="absolute bottom-1/4 right-1/4 text-christmas-gold opacity-25 animate-gentle-float" style={{animationDelay: '1.5s'}}>
        <span className="text-2xl">⭐</span>
      </div>
    </section>
  );
};

export default HeroSection; 