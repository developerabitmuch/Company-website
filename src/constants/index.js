import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

// Importing Skills Logo
import adobe from "../assets/icons_abitmuch/adobe.png";
import blender from "../assets/icons_abitmuch/blender.png";
import cinema4D from "../assets/icons_abitmuch/cinema4D.png";
import maya from "../assets/icons_abitmuch/maya.png";
import substance_painter from "../assets/icons_abitmuch/substance_painter.png";
import unity from "../assets/icons_abitmuch/unity.png";

// Importing Portfolio Images

// CreativeArt Portfolio Images
import rabbit from "../portfolio_assets/creativeArt/rabbit.jpg";
import Black_Beard from "../portfolio_assets/creativeArt/Black_Beard.jpg";
import Emma from "../portfolio_assets/creativeArt/Emma.jpg";
import ThornField from "../portfolio_assets/creativeArt/ThornField.jpg";
import jaison from "../portfolio_assets/creativeArt/jaison.jpg";
import Lily from "../portfolio_assets/creativeArt/Lily.jpg";
import Oliver from "../portfolio_assets/creativeArt/Oliver.jpg";

// Animations Portfolio Images
import ani1 from "../portfolio_assets/animations/ani1.png";
import ani2 from "../portfolio_assets/animations/ani2.png";
import ani3 from "../portfolio_assets/animations/ani3.png";
import ani4 from "../portfolio_assets/animations/ani4.png";
import ani5 from "../portfolio_assets/animations/ani5.png";
import ani6 from "../portfolio_assets/animations/ani6.png";
import ani7 from "../portfolio_assets/animations/ani7.png";
import ani8 from "../portfolio_assets/animations/ani8.png";
import ani9 from "../portfolio_assets/animations/ani9.png";
import ani10 from "../portfolio_assets/animations/ani10.png";
import ani11 from "../portfolio_assets/animations/ani11.png";
import ani12 from "../portfolio_assets/animations/ani12.png";
import ani13 from "../portfolio_assets/animations/ani13.png";
import ani14 from "../portfolio_assets/animations/ani14.png";
import ani15 from "../portfolio_assets/animations/ani15.png";

// motionGraphics portfolio Images
import mot1 from "../portfolio_assets/motion_graphics/mot1.png";
import mot2 from "../portfolio_assets/motion_graphics/mot2.png";
import mot3 from "../portfolio_assets/motion_graphics/mot3.png";
import mot4 from "../portfolio_assets/motion_graphics/mot4.png";
import mot5 from "../portfolio_assets/motion_graphics/mot5.png";

// techpack designer
import tec1 from "../portfolio_assets/techpack_designer/tec1.png";
import tec2 from "../portfolio_assets/techpack_designer/tec2.png";
import tec3 from "../portfolio_assets/techpack_designer/tec3.png";
import tec4 from "../portfolio_assets/techpack_designer/tec4.png";
import tec5 from "../portfolio_assets/techpack_designer/tec5.png";
import tec6 from "../portfolio_assets/techpack_designer/tec6.png";
import tec7 from "../portfolio_assets/techpack_designer/tec7.png";

// Skills ka data hai ismein hmare pass
export const skills = [
  {
    imageUrl: cinema4D,
    name: "Cinema4d",
    type: "3D modelling",
  },
  {
    imageUrl: "https://cdn.worldvectorlogo.com/logos/unreal-1.svg",
    name: "Unreal Engine",
    type: "Lighting",
  },
  {
    imageUrl: maya,
    name: "Maya",
    type: "Modeling",
  },
  {
    imageUrl: unity,
    name: "Unity",
    type: "Lighting",
  },
  {
    imageUrl: adobe,
    name: "Adobe PhotoShop",
    type: "Editing",
  },
  {
    imageUrl: substance_painter,
    name: "Substance Painter",
    type: "Textureing",
  },
  {
    imageUrl: blender,
    name: "Blender",
    type: "Modeling",
  },
];

// Experience ka data hai ismein hmare pass
export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Social Media ke links ka data hai hmare pass
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

//

// Projects jo kre hain hmne uska data hai ismein hmare pass
export const projects = [
  {
    coverImg: rabbit,
    name: "Concept Art | Illustrations | Visuals",
    description:
      " Concept art is a tool that allows the director to guide the visual styling of the project, with a cycle of rejections and approvals.",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
  {
    coverImg: ani15,
    name: "Character Development | 3D Animations",
    description:
      "Character Development is the creation and refinement of compelling characters through digital modeling and animation techniques.",
    portfolio: [
      ani1,
      ani2,
      ani3,
      ani4,
      ani5,
      ani6,
      ani7,
      ani8,
      ani9,
      ani10,
      ani11,
      ani12,
      ani13,
      ani14,
      ani15,
    ],
  },
  {
    coverImg: mot5,
    name: "Motion Graphics | Architecture Design",
    description:
      "Motion Graphics is the combination of graphic design with animation techniques to create visually captivating and dynamic content.",
    portfolio: [mot1, mot2, mot3, mot4, mot5],
  },
  {
    coverImg: tec1,
    name: "Techpack 3D designer",
    description:
      "A techpack 3D designer integrates technological tools and software to develop detailed technical packages for product manufacturing, particularly in the fashion industry.",
    portfolio: [tec1, tec2, tec3, tec4, tec5, tec6, tec7],
  },
  // {
  //   coverImg: estate,
  //   name: "Environment Artist",
  //   description:
  //     "An environment artist specializes in crafting immersive digital landscapes and settings for video games, films, or virtual reality experiences. ",
  //   portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  // },
];
