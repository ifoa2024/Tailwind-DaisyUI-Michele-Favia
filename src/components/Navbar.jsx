import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">MyApp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
