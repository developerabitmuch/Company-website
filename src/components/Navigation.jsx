import React from "react";

// Button List
export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/codebucks27",
    icon: "github",
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
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-between relative">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return (
            <button
              key={index}
              className="absolute text-white font-bold"
              style={{ transform: `translate(${x},${y})` }}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
