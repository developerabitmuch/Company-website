import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo_navbar.jpg";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const [nav, setNav] = useState(false);
  //setting it to false when ever the button is called to show the cross button
  const handleclick = () => setNav(!nav);

  return (
    <header className="header ">
      <NavLink
        to="/"
        className="md:w-14 w-10 md:h-14 h-10 rounded-lg bg-white items-center justify-between flex font-bold  shadow-md "
        onClick={() => {
          setIsActive(true);
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-full w-full rounded-md object-cover"
        />
        {/* Use the imported logo image */}
      </NavLink>
      <nav className="md:flex text-lg gap-7 font-medium hidden ">
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
          to="/work"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
          onClick={() => setIsActive(true)}
        >
          Work
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
        <NavLink
          to="/faqs"
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
          onClick={() => setIsActive(true)}
        >
          FAQs
        </NavLink>
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

      {/* responsive bars icon button for smaller screens like mobile */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mobile menu */}
      {/* absolute bg-[#0a192f] top-0 left-0 w-full h-screen flex flex-col justify-center items-center */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-gradient-to-br from-blue-900 via-pink-300 to-blue-900  top-0 left-0 w-full h-screen flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={handleclick} to="/" duration={500}>
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleclick} to="/about" duration={500}>
            About
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleclick} to="/services" duration={500}>
            Services
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleclick} to="/contact" duration={500}>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
