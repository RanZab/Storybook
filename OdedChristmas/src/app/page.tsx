import React from 'react';
import HeroSection from './components/HeroSection';
import SongGallery from './components/SongGallery';
import AboutSection from './components/AboutSection';
import PurchaseSection from './components/PurchaseSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SongGallery />
      <AboutSection />
      <PurchaseSection />
    </main>
  );
} 