'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pastel-pink via-pastel-cream to-pastel-green">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About the Collection */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-christmas-green mb-6">
                About the Collection
              </h2>
              <div className="w-24 h-1 bg-christmas-gold rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="font-elegant text-lg md:text-xl text-christmas-green/90 leading-relaxed">
                <span className="font-cursive text-2xl text-christmas-red">A Wintry Piano Wonderland</span> brings 
                together beloved Christmas carols in fresh, imaginative piano arrangements that honor the timeless 
                melodies while adding contemporary elegance and emotional depth.
              </p>

              <p className="text-lg text-christmas-green/80 leading-relaxed">
                Each song has been carefully reimagined to capture both the nostalgic warmth of traditional 
                Christmas celebrations and the sophisticated beauty of classical piano repertoire. These 
                arrangements are perfect for intimate performances, family gatherings, or quiet moments of 
                holiday reflection.
              </p>

              <div className="bg-white/30 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-cursive text-2xl text-christmas-red mb-4">What makes this collection special:</h3>
                <ul className="space-y-3 text-christmas-green/90">
                  <li className="flex items-start">
                    <span className="text-christmas-gold mr-3 mt-1">🎼</span>
                    <span>Beautiful sheet music with professional-quality arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-christmas-gold mr-3 mt-1">🎨</span>
                    <span>Whimsical illustrations accompanying each carol</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-christmas-gold mr-3 mt-1">❤️</span>
                    <span>Family-friendly arrangements suitable for all skill levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-christmas-gold mr-3 mt-1">⭐</span>
                    <span>Premium quality paper and binding for lasting enjoyment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - About the Artist */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div>
              <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-christmas-red mb-6">
                Meet the Artist
              </h2>
              <div className="w-24 h-1 bg-christmas-green rounded-full mb-8"></div>
            </div>

            {/* Artist Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-3xl h-80 flex items-center justify-center shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎹</div>
                  <p className="font-cursive text-2xl text-christmas-green">Oded Essner</p>
                  <p className="font-elegant text-lg text-christmas-green/80">Piano Artist & Arranger</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-christmas-gold opacity-40 animate-twinkle">
                  <span className="text-3xl">♪</span>
                </div>
                <div className="absolute bottom-4 left-4 text-christmas-red opacity-30 animate-gentle-float">
                  <span className="text-2xl">🎄</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-elegant text-lg md:text-xl text-christmas-green/90 leading-relaxed">
                <span className="font-cursive text-xl text-christmas-red">Oded Essner</span> is a passionate 
                pianist and arranger who believes in the transformative power of music to bring joy, comfort, 
                and connection during the holiday season.
              </p>

              <p className="text-lg text-christmas-green/80 leading-relaxed">
                With years of experience in classical and contemporary piano performance, Oded has crafted 
                these arrangements to be both technically satisfying for accomplished players and emotionally 
                accessible to music lovers of all backgrounds. His goal is to create music that bridges 
                generations and brings families together around the piano during the most wonderful time of the year.
              </p>

              <div className="bg-white/30 rounded-2xl p-6 backdrop-blur-sm">
                <p className="font-cursive text-lg text-christmas-green italic">
                  "These arrangements are my gift to families everywhere who find joy in sharing music together. 
                  May these carols bring warmth, wonder, and the magic of Christmas into your homes."
                </p>
                <p className="text-right mt-4 font-elegant text-christmas-red">- Oded Essner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Musical Elements */}
        <div className="flex justify-center items-center mt-20 space-x-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <span className="text-christmas-gold text-4xl animate-gentle-float">♫</span>
          <span className="text-christmas-red text-3xl animate-twinkle">🎄</span>
          <span className="text-christmas-green text-4xl animate-gentle-float" style={{animationDelay: '1s'}}>♪</span>
          <span className="text-christmas-gold text-2xl animate-twinkle">⭐</span>
          <span className="text-christmas-red text-4xl animate-gentle-float" style={{animationDelay: '0.5s'}}>♬</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 