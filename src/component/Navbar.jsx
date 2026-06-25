import React, { useState, useEffect } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=> {
    document.body.style.overflow = menuOpen ? "hidden": "auto";
    return () => {
      document.body.style.overflow = "auto";
    }
  },[menuOpen]);

  return (
    <header>
      <nav className="flex md:flex-row justify-between items-center w-full text-white md:py-6 p-4 md:pe-0 md:ps-6 ">
        <img src={logo} alt="Logo" className="h-6" />

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? (
            <img src={closeIcon} alt="Close Menu" className="h-6" />
          ) : (
            <img src={hamburger} alt="Open Menu" className="h-6" />
          )}
        </button>
        <ul
          className={`${menuOpen ? "block" : "hidden"} md:flex md:flex-row flex flex-col md:items-center space-y-2 p-4 md:space-x-8 absolute md:relative md:top-full top-12 inset-y-0 right-0 md:right-auto z-50 text-white bg-white/10 backdrop-blur-md md:p-0 md:space-y-0 md:h-12 md:px-6`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm uppercase ${isActive ? "md:border-b-3 " : ""} md:h-full md:flex md:items-center`
            }
          >
            <span className=" font-semibold p-2"> 00 </span> Home
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `text-sm uppercase ${isActive ? "md:border-b-3 " : ""} md:h-full md:flex md:items-center`
            }
          >
            <span className=" font-semibold p-2"> 01 </span> Destination
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              `text-sm uppercase ${isActive ? "md:border-b-3 " : ""} md:h-full md:flex md:items-center`
            }
          >
            <span className=" font-semibold p-2"> 02 </span> Crew
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              `text-sm uppercase ${isActive ? "md:border-b-3 " : ""} md:h-full md:flex md:items-center`
            }
          >
            <span className=" font-semibold p-2"> 03 </span> Technology
          </NavLink>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
