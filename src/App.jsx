import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark'); // Toggle theme
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    // CHIAMATA FETCH JSON PLACEHOLDER
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="min-h-screen">
      
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="card shadow-lg bg-base-100">
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p>{card.body}</p>
              </div>
              {/* CAROSELLO CON DAISY UI */}
              <div className="carousel w-full">
                <div id={`slide1-${card.id}`} className="carousel-item relative w-full">
                  <img src={`https://picsum.photos/seed/${card.id}1/300/200`} alt="Random" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide3-${card.id}`} className="btn btn-circle">❮</a>
                    <a href={`#slide2-${card.id}`} className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id={`slide2-${card.id}`} className="carousel-item relative w-full">
                  <img src={`https://picsum.photos/seed/${card.id}2/300/200`} alt="Random" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide1-${card.id}`} className="btn btn-circle">❮</a>
                    <a href={`#slide3-${card.id}`} className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id={`slide3-${card.id}`} className="carousel-item relative w-full">
                  <img src={`https://picsum.photos/seed/${card.id}3/300/200`} alt="Random" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide2-${card.id}`} className="btn btn-circle">❮</a>
                    <a href={`#slide1-${card.id}`} className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
