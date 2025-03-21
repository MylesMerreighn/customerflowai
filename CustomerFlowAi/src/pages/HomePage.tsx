import React from 'react';
import Hero from '../components/Hero';
import Painpoints from '../components/Painpoints';
import PlatformCarousel from '../components/PlatformCarousel';
import Products from '../components/Products';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Painpoints />
      <PlatformCarousel />
      <Products />
    </div>
  );
}