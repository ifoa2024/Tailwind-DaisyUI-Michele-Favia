import React from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MyApp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn btn-primary ml-4" onClick={toggleTheme}>
          {isDarkMode ? 'Tema Chiaro' : 'Tema Scuro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
