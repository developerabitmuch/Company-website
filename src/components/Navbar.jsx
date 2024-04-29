import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo_navbar.jpg";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [selectedNavLink, setSelectedNavLink] = useState(null);

  const handleNavLinkClick = (event) => {
    setSelectedNavLink(event.target.textContent);
  };

  const [nav, setNav] = useState(false);
  //setting it to false when ever the button is called to show the cross button
  const handleclick = () => setNav(!nav);

  return (
    <header className="header ">
      <NavLink
        to="/"
        className=" md:h-14 h-10 rounded-lg  items-center justify-between flex font-bold  shadow-md navbar-ul"
        onClick={handleNavLinkClick}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-full w-full rounded-md object-cover"
        />
        {/* Use the imported logo image */}
      </NavLink>
      <nav className="md:flex text-lg gap-7 font-medium hidden">
        <NavLink
          to="/about"
          className={`nav-link ${
            selectedNavLink === "About" ? "selected" : ""
          }`}
          activeClassName="active-nav-link"
          onClick={handleNavLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="/work"
          className={`nav-link ${selectedNavLink === "Work" ? "selected" : ""}`}
          activeClassName="active-nav-link"
          onClick={handleNavLinkClick}
        >
          Work
        </NavLink>
        <NavLink
          to="/services"
          className={`nav-link ${
            selectedNavLink === "Services" ? "selected" : ""
          }`}
          activeClassName="active-nav-link"
          onClick={handleNavLinkClick}
        >
          Services
        </NavLink>
        <NavLink
          to="/faqs"
          className={`nav-link ${selectedNavLink === "FAQs" ? "selected" : ""}`}
          activeClassName="active-nav-link"
          onClick={handleNavLinkClick}
        >
          FAQs
        </NavLink>
        <NavLink
          to="/contact"
          className={`nav-link ${
            selectedNavLink === "Contact" ? "selected" : ""
          }`}
          activeClassName="active-nav-link"
          onClick={handleNavLinkClick}
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
            : "absolute bg-gradient-to-br from-blue-900 via-pink-300 to-blue-900 z-20 top-0 left-0 w-full h-screen flex flex-col justify-center items-center "
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
          <NavLink onClick={handleclick} to="/work" duration={500}>
            Work
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
