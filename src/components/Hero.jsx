import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero bg-base-200 text-center py-12">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">APP che implementa Tailwind DaisyUI</h1>
        <p className="mb-6">TESTO</p>
        <Link to="/form">
          <button className="btn btn-primary">To Do List</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
