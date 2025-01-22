import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MyApp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
        {/* Icona al posto del bottone */}
        <MdOutlineDarkMode
          className="text-2xl cursor-pointer"
          onClick={toggleTheme}
        />
      </div>
    </nav>
  );
};

export default Navbar;

