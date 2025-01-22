import React from 'react';
import Hero from '../components/Hero'; // Il componente per il titolo e il pulsante
import CardCarousel from '../components/CardCarousel'; // Il componente per il carosello delle card

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Card Carousel Section */}
      <div className="mt-8">
        <CardCarousel />
      </div>
    </div>
  );
};

export default Home;
