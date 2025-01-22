import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">APP che implementa Tailwind DaisyUI</h1>
        <p className="text-gray-600 mt-4"> TESTO
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
