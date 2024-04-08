import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

// InfoBox jo hm return krrhe hnge
// text, link aur btnText hi khali change horha hai hmare pass
// hm ab kreinge kia ke uper object mein update krleinge phr neche wo ajaega
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn font-semibold">
      {btnText}
      <img src={arrow} className="h-4 w-4 object-contain" />
    </Link>
  </div>
);

// 1 tab mein hm infoBox use nhi krrhe hain
// 2, 3 & 4 mein hm apne pass InfoBox ko direct use krleinge
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, This is <span className="font-semibold">A Bit Much Co.</span> 👋
      <br />A <span className="font-semibold">Graphic Animation </span> Company
      Delivering Clients across the Globe!
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many Clients and Deliver high Quality Work!"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led Multiple Projects to Success over the years. Curious about the Impact?"
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  //   4: (
  //     <InfoBox
  //       text="Empowering Your Success Through Comprehensive Services"
  //       link="/services"
  //       btnText="Solutions"
  //     />
  //   ),
  4: (
    <InfoBox
      text="Need a Project done or looking for an Agency? I'm just a keyStrokes away"
      link="/contact"
      btnText="Let's talk!"
    />
  ),
};

// hm aik object bnarhe hain aur according to the object hmare pass show hojaeingi values screen pe jese hi move krega island hmara to hmare pass current stage change hogi
// currentstage aik array hai iska jo index no. hoga uspe hm maretur krrhe hain HomeInfo ko.
// AP hmein iske andar jo content chahiye hai wo hm showcase krdeinge apne pass yhn pe all the
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
