import React from "react";
import NavButtons from "./NavButtons";

// Button List
export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Services", link: "/services", icon: "services", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Youtube",
    link: "https://www.github.com/codebucks27",
    icon: "youtube",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/codebucks",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/code_bucks",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "TikTok",
    link: "www.tiktok.com",
    icon: "tiktok",
    newTab: true,
  },
];

// sbse phle hmne circle bnalia hai 360 ko divide krke
// phr different button ke liye different values bnadi hain hmne
// calc function ko use krke radius,x aur y ko bhi hm manage kreinge aur use kreinge styles mein
// x and y coordinates hm calculate krrhe hain aur phr hm unko use krrhe hain styles mein x and y ko

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-between relative hover:pause animate-spin-slow">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButtons key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
