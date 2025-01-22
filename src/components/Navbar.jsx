import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'; 
const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar bg-base-100 shadow-md px-4">
      {/* Logo */}
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          MyApp
        </NavLink>
      </div>

      {/* Menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Icona tema scuro/chiaro */}
        <button onClick={toggleTheme} className="ml-4 btn btn-ghost btn-circle">
          {isDarkMode ? (
            <MdDarkMode className="text-2xl" />
          ) : (
            <MdOutlineDarkMode className="text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

