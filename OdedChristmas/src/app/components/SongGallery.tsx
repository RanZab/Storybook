'use client';

import React from 'react';

interface Song {
  title: string;
  youtubeId: string;
  description: string;
  color: string;
}

const songs: Song[] = [
  {
    title: "Hark! The Herald Angels Sing",
    youtubeId: "GmjD_sT96i0",
    description: "A majestic reimagining of this beloved herald of Christmas joy",
    color: "from-pastel-green to-pastel-purple"
  },
  {
    title: "Jesu, Joy of Man's Desiring",
    youtubeId: "v86YnAyjIms",
    description: "Bach's masterpiece given a tender, contemplative Christmas touch",
    color: "from-pastel-purple to-pastel-pink"
  },
  {
    title: "Silent Night",
    youtubeId: "eXvnvvr4jeU",
    description: "The world's most beloved Christmas carol, reimagined with gentle wonder",
    color: "from-pastel-pink to-pastel-cream"
  },
  {
    title: "O Christmas Tree",
    youtubeId: "NFy-MJsts3U",
    description: "A festive celebration of the evergreen symbol of Christmas",
    color: "from-pastel-cream to-pastel-green"
  },
  {
    title: "Deck the Halls",
    youtubeId: "UqJZqxhgrzM",
    description: "Joyful arrangements that capture the spirit of holiday decoration",
    color: "from-pastel-green to-pastel-purple"
  },
  {
    title: "Jingle Bells",
    youtubeId: "vpFrHEwMZ4U",
    description: "The classic sleigh ride song with playful, sparkling arrangements",
    color: "from-pastel-purple to-pastel-pink"
  }
];

const SongCard = ({ song, index }: { song: Song; index: number }) => {
  return (
    <div className={`relative bg-gradient-to-br ${song.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 text-christmas-gold opacity-30">
        <span className="text-2xl">♪</span>
      </div>
      <div className="absolute bottom-4 left-4 text-christmas-green opacity-20">
        <span className="text-xl">🎄</span>
      </div>

      {/* Song Title */}
      <h3 className="font-cursive text-2xl md:text-3xl text-christmas-green mb-4 leading-tight">
        {song.title}
      </h3>

      {/* YouTube Embed */}
      <div className="relative w-full h-48 md:h-64 mb-4 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${song.youtubeId}`}
          title={song.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Description */}
      <p className="text-christmas-green/80 text-sm md:text-base leading-relaxed font-elegant">
        {song.description}
      </p>
    </div>
  );
};

const SongGallery = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent-warm to-accent-cool">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cursive text-5xl md:text-6xl lg:text-7xl text-christmas-green mb-6">
            Featured Songs
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-christmas-green/80 max-w-3xl mx-auto leading-relaxed">
            Listen to these beautiful reimagined Christmas carols, each arranged with 
            love and accompanied by whimsical illustrations that bring the magic of 
            Christmas to life.
          </p>
          
          {/* Decorative Musical Elements */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <span className="text-christmas-gold text-3xl animate-twinkle">♫</span>
            <span className="text-christmas-red text-2xl animate-gentle-float">♪</span>
            <span className="text-christmas-green text-3xl animate-twinkle" style={{animationDelay: '0.5s'}}>♬</span>
          </div>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <SongCard key={song.youtubeId} song={song} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <p className="font-elegant text-lg md:text-xl text-christmas-green/80 mb-8">
            Love what you hear? Get the complete collection with beautiful sheet music and illustrations.
          </p>
          <button className="bg-christmas-green text-white px-10 py-4 rounded-full font-elegant text-lg font-semibold shadow-lg hover:bg-christmas-green/90 transition-all duration-300 hover:scale-105">
            🎼 Get Your Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default SongGallery; 