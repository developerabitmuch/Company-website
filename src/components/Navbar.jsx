import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo_navbar.jpg";

const Navbar = () => {
  // const [isActive]=useState(true)
  return (
    <header className="header ">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
      >
        <img src={logo} alt="Logo" className="h-auto w-full rounded-md" />
        {/* Use the imported logo image */}
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          Projects
        </NavLink>
        {/* <NavLink
          to="/services"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          Services
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
