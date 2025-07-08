'use client';

import React from 'react';

const PurchaseSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pastel-green via-pastel-purple to-pastel-pink relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-christmas-gold opacity-20 animate-gentle-float">
          <span className="text-8xl">♪</span>
        </div>
        
        <div className="absolute bottom-20 right-20 text-christmas-red opacity-15 animate-twinkle">
          <span className="text-6xl">🎄</span>
        </div>

        <div className="absolute top-1/2 right-10 text-christmas-green opacity-25 animate-gentle-float" style={{animationDelay: '1s'}}>
          <span className="text-4xl">⭐</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cursive text-5xl md:text-6xl lg:text-7xl text-christmas-green mb-6">
            Get Your Copy Today
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-christmas-green/80 max-w-3xl mx-auto leading-relaxed">
            Bring the magic of Christmas into your home with these beautiful piano arrangements 
            and whimsical illustrations.
          </p>
        </div>

        {/* Purchase Card */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Product Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-cursive text-3xl md:text-4xl text-christmas-red mb-4">
                  A Wintry Piano Wonderland
                </h3>
                <p className="font-elegant text-lg text-christmas-green/90 mb-6">
                  Complete Sheet Music Collection with Illustrations
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-christmas-gold text-2xl">🎼</span>
                  <span className="text-lg text-christmas-green/90">6 beautifully arranged Christmas carols</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-christmas-gold text-2xl">🎨</span>
                  <span className="text-lg text-christmas-green/90">Whimsical illustrations for each song</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-christmas-gold text-2xl">📖</span>
                  <span className="text-lg text-christmas-green/90">Premium quality paper and binding</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-christmas-gold text-2xl">❤️</span>
                  <span className="text-lg text-christmas-green/90">Perfect for family gatherings</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-christmas-gold text-2xl">🎯</span>
                  <span className="text-lg text-christmas-green/90">Suitable for intermediate to advanced players</span>
                </div>
              </div>

              {/* Songs Included */}
              <div className="bg-pastel-cream/50 rounded-2xl p-6">
                <h4 className="font-cursive text-xl text-christmas-red mb-4">Songs Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-christmas-green/90">
                  <div>• Hark! The Herald Angels Sing</div>
                  <div>• Jesu, Joy of Man's Desiring</div>
                  <div>• Silent Night</div>
                  <div>• O Christmas Tree</div>
                  <div>• Deck the Halls</div>
                  <div>• Jingle Bells</div>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing & Purchase */}
            <div className="space-y-8">
              {/* Pricing */}
              <div className="text-center bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-3xl p-8 shadow-lg">
                <div className="mb-6">
                  <span className="text-sm uppercase tracking-wide text-christmas-green/70 font-semibold">Special Holiday Price</span>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-2xl text-christmas-green/60 line-through mr-3">$39.99</span>
                    <span className="text-5xl font-bold text-christmas-red">$24.99</span>
                  </div>
                  <p className="text-sm text-christmas-green/80 mt-2">Limited time offer - Save 37%!</p>
                </div>

                {/* Purchase Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-christmas-red text-white py-4 px-6 rounded-2xl font-elegant text-lg font-semibold shadow-lg hover:bg-christmas-red/90 transition-all duration-300 hover:scale-105">
                    🛒 Buy Now - Instant Download
                  </button>
                  
                  <button className="w-full border-2 border-christmas-green text-christmas-green py-4 px-6 rounded-2xl font-elegant text-lg font-semibold hover:bg-christmas-green hover:text-white transition-all duration-300 hover:scale-105">
                    📦 Order Physical Copy
                  </button>
                </div>

                {/* Guarantee */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center bg-white/50 rounded-full px-4 py-2">
                    <span className="text-christmas-gold mr-2">🔒</span>
                    <span className="text-sm text-christmas-green/90">30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/30 rounded-2xl p-6 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start space-x-1 mb-3">
                  <span className="text-christmas-gold">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-christmas-green/90 italic mb-4">
                  "These arrangements are absolutely beautiful! My family loves gathering around the piano 
                  during the holidays to play these songs. The illustrations are charming and the music 
                  is both elegant and approachable."
                </p>
                <p className="text-right text-sm font-semibold text-christmas-green">- Sarah M., Piano Teacher</p>
              </div>

              {/* Additional Info */}
              <div className="text-center space-y-2 text-sm text-christmas-green/70">
                <div>✅ Instant PDF download available</div>
                <div>✅ Print as many copies as you need</div>
                <div>✅ Compatible with all home printers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="font-cursive text-2xl md:text-3xl text-christmas-green mb-4">
            Make this Christmas truly magical with music! 🎄✨
          </p>
          <p className="text-lg text-christmas-green/80">
            Perfect as a gift for piano lovers or a special treat for your own family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection; 