import React from 'react';
import HeroSection from './components/HeroSection';
import SongGallery from './components/SongGallery';
import AboutSection from './components/AboutSection';
import TutorialsSection from './components/TutorialsSection';
import PurchaseSection from './components/PurchaseSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SongGallery />
      <AboutSection />
      <TutorialsSection />
      <PurchaseSection />
    </main>
  );
} 