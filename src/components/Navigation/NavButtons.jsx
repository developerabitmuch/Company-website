import {
  Facebook,
  Home,
  Linkedin,
  Palette,
  Phone,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import React from "react";
import { BsTiktok } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

// getting icons from lucide-react
const getIcons = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;

    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;

    case "services":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;

    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;

    case "youtube":
      return <Youtube className="w-full h-auto" strokeWidth={1.5} />;

    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;

    case "facebook":
      return <Facebook className="w-full h-auto" strokeWidth={1.5} />;

    case "X":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButtons = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50 text-white text-2xl font-poppins font-semibold "
      style={{ transform: `translate(${x},${y})` }}
    >
      <Link
        to={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full group flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
        aria-label={label}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:bg-red-400">
          {getIcons(icon)}
        </span>
      </Link>
    </div>
  );
};

export default NavButtons;
