import React, { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="flex md:flex-row justify-between items-center w-full text-white md:py-6 p-4 md:pe-0 md:ps-6">
        <img src={logo} alt="Logo" className="h-8" />

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? (
            <img src={closeIcon} alt="Close Menu" className="h-8" />
          ) : (
            <img src={hamburger} alt="Open Menu" className="h-8 " />
          )}
        </button>
        <ul className={`${menuOpen ? 'block' : 'hidden'} md:flex md:flex-row flex flex-col md:items-center space-y-2 p-4 md:space-x-8 absolute md:relative top-full right-0 md:right-auto z-50 text-white bg-white/10 backdrop-blur-md md:p-0 md:space-y-0 md:h-12 md:px-6`}>
          <li className="text-sm uppercase" > <span className="font-semibold p-2 "> 00 </span>  Home</li>
          <li className="text-sm uppercase" > <span className="font-semibold p-2 "> 01 </span>  Destination</li>
          <li className="text-sm uppercase" > <span className="font-semibold p-2 "> 02 </span>  Crew</li>
          <li className="text-sm uppercase" > <span className="font-semibold p-2 "> 03 </span>  Technology</li>
        </ul>
      </nav>

        
      
    </header>
  );
};

export default Navbar;
