import { projects } from "../constants";
import transition from "../transition";
import CTA from "../components/CTA";
import SliderCarousel from "../components/SliderCarousel";
import { motion } from "framer-motion";
// import { arrow } from "../assets/icons";

const Services = () => {
  console.log("Projects: ", projects);

  return (
    <section className="max-container ">
      <h1 className=" font-semibold sm:leading-snug font-poppins text-4xl bg-gradient-to-t from-[#deef7e] via-[#bf5dc1] to-[#2249b6] bg-clip-text text-transparent">
        Services
      </h1>
      {/* coloum div */}
      <div className="md:flex items-center justify-between py-4">
        <div className="flex-1 md:border-r border-slate-200 px-1 ">
          <h1 className="font-poppins font-semibold text-2xl drop-shadow-md underline ">
            What{" "}
            <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
              We
            </span>{" "}
            Offer
          </h1>
          <p className="text-justify py-4 pr-4">
            We provide a range of Remote Hands Support services, including
            server reboots, hardware replacements, cable management, and more.
          </p>
        </div>
        <div className="flex-1 md:pl-4 py-2">
          <h1 className="font-poppins font-semibold text-2xl drop-shadow-md underline ">
            Custom{" "}
            <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
              Service
            </span>{" "}
            Packages
          </h1>
          <p className="text-justify py-4 pr-4">
            We offer customizable service packages tailored to your specific
            needs and budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default transition(Services);
