'use client';

import React from 'react';

const TutorialsSection = () => {
  const scrollToPurchase = () => {
    const purchaseSection = document.getElementById('purchase-section');
    if (purchaseSection) {
      purchaseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tutorials = [
    {
      id: 'UIk6qgu3gls',
      title: 'O Christmas Tree',
      description: 'Learn the classic Christmas melody'
    },
    {
      id: 'nUan64un_es',
      title: 'Jesu, Joy of Man\'s Desiring',
      description: 'Master this beautiful Bach arrangement'
    },
    {
      id: 'TWRwAk8S0Qg',
      title: 'Hark! The Herald Angels Sing',
      description: 'Play this festive holiday favorite'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-pastel-cream via-pastel-green to-pastel-purple overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 text-christmas-gold opacity-20 animate-twinkle">
          <span className="text-4xl">🎹</span>
        </div>
        <div className="absolute bottom-20 left-10 text-christmas-red opacity-25 animate-gentle-float" style={{animationDelay: '1s'}}>
          <span className="text-3xl">🎵</span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl md:text-6xl lg:text-7xl text-christmas-green mb-6">
            Piano Tutorials
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-christmas-green/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Watch these preview tutorials to see Oded's teaching style in action. 
            When you purchase the book, you'll unlock complete step-by-step lessons for all 6 songs.
          </p>
          <button 
            onClick={scrollToPurchase}
            className="bg-christmas-red text-white px-8 py-4 rounded-full font-elegant text-lg font-semibold shadow-lg hover:bg-christmas-red/90 transition-all duration-300 hover:scale-105 mb-12"
          >
            🎼 Buy Book for Full Tutorials
          </button>
        </div>

        {/* Tutorial Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div 
              key={tutorial.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Video Container */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.id}`}
                  title={`${tutorial.title} - Piano Tutorial`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-elegant text-xl font-semibold text-christmas-green mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-christmas-green/70 text-sm mb-4">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-christmas-red text-sm font-medium">
                    ⏱️ Preview Tutorial
                  </span>
                  <span className="text-christmas-gold text-xs">
                    Full lesson in book
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-elegant text-lg text-christmas-green/80 mb-6">
            Ready to master all 6 Christmas classics?
          </p>
          <button 
            onClick={scrollToPurchase}
            className="border-2 border-christmas-green text-christmas-green px-8 py-4 rounded-full font-elegant text-lg font-semibold hover:bg-christmas-green hover:text-white transition-all duration-300 hover:scale-105"
          >
            🎵 Get Complete Tutorials
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection; 