import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo_navbar.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header ">
      <NavLink
        to="/"
        className="w-14 h-14 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
        onClick={() => setIsActive(true)}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-full w-full rounded-md object-cover"
        />
        {/* Use the imported logo image */}
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
          onClick={() => setIsActive(true)}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
          onClick={() => setIsActive(true)}
        >
          Services
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
          onClick={() => setIsActive(true)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
