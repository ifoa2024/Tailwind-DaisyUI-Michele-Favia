import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-base-100 dark:bg-gray-800 text-center py-12">
      <div className="hero-content">
        <h1 className="text-4xl font-bold text-base-content dark:text-white">
          APP che implementa Tailwind DaisyUI
        </h1>
        <p className="text-lg text-base-content dark:text-gray-300 mt-2">TESTO</p>
        <button className="btn btn-primary mt-4">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
