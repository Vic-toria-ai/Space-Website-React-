import React, { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="flex md:flex-row justify-between items-center w-full p-4 text-white">
        <img src={logo} alt="Logo" className="h-8" />

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? (
            <img src={closeIcon} alt="Close Menu" className="h-8" />
          ) : (
            <img src={hamburger} alt="Open Menu" className="h-8 " />
          )}
        </button>
      </nav>

        <ul className={`${menuOpen ? 'block' : 'hidden'} md:flex md:flex-row flex flex-col space-y-2 p-4 absolute top-full left-0 right-0 z-50 text-white bg-gray-800`}>
          <li> 00  Home</li>
          <li> 01  Destination</li>
          <li> 02  Crew</li>
          <li> 03  Technology</li>
        </ul>
      
    </header>
  );
};

export default Navbar;
