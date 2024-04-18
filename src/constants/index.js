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
import rabbit from "../portfolio_assets/creativeArt/rabbit.jpg";
import Black_Beard from "../portfolio_assets/creativeArt/Black_Beard.jpg";
import Emma from "../portfolio_assets/creativeArt/Emma.jpg";
import ThornField from "../portfolio_assets/creativeArt/ThornField.jpg";
import jaison from "../portfolio_assets/creativeArt/jaison.jpg";
import Lily from "../portfolio_assets/creativeArt/Lily.jpg";
import Oliver from "../portfolio_assets/creativeArt/Oliver.jpg";

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

// folioport
export const folioport = [
  Emma,
  jaison,
  Lily,
  Black_Beard,
  Oliver,
  rabbit,
  ThornField,
];

// Projects jo kre hain hmne uska data hai ismein hmare pass
export const projects = [
  {
    iconUrl: rabbit,
    theme: "btn-back-white",
    name: "Concept Art | Illustrations | Visuals",
    description:
      " Concept art is a tool that allows the director to guide the visual styling of the project, with a cycle of rejections and approvals.",
    link: "https://github.com/adrianhajdin/pricewise",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
    portfolio: [Emma, jaison, Lily, Black_Beard, Oliver, rabbit, ThornField],
  },
];
