import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Card 1" description="This is the first card." />
          <Card title="Card 2" description="This is the second card." />
          <Card title="Card 3" description="This is the third card." />
        </div>
      </section>
      <Footer />
    </div>
  );
}

<div className="alert alert-info">
  Questo è un esempio di componente DaisyUI.
</div>


export default App;
