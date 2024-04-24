import { projects } from "../constants";
import transition from "../transition";
import CTA from "../components/CTA";
import SliderCarousel from "../components/SliderCarousel";
import { motion } from "framer-motion";
// import { arrow } from "../assets/icons";

const Work = () => {
  console.log("Projects: ", projects);

  return (
    <section className="max-container ">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: -3, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="font-semibold sm:leading-snug font-poppins text-4xl"
      >
        Our{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Work
        </span>
      </motion.h1>

      {/* Brief Explanation regarding the projects */}
      <div className="mt-5 flex flex-col gap-3 text-slate-800 text-justify">
        <motion.p
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          We've embarked with numerous clients throughout the years, but these
          are the one closest to our heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your Collaboration is highly valued!
        </motion.p>
      </div>
      <hr className="border-slate-200 mt-10" />

      <div className="mt-4">
        <h1 className="font-poppins font-semibold text-2xl drop-shadow-md underline">
          <span className=" bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
            Our
          </span>{" "}
          Team
        </h1>
        <h3 className="font-poppins font-semibold text-xl drop-shadow-md  pt-4">
          Highly{" "}
          <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
            Skilled
          </span>{" "}
          Technicians
        </h3>
        <p className="text-justify font-normal">
          Our team consists of highly skilled on-site technicians who are ready
          to assist you remotely.
        </p>
      </div>
      <div className="flex flex-col">
        <hr className="border-slate-200 my-4" />
        <h1 className="font-poppins font-semibold text-2xl drop-shadow-md   underline">
          Emergency{" "}
          <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
            Support
          </span>
        </h1>

        <h3 className="font-poppins font-semibold text-xl drop-shadow-md pt-4">
          <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
            Rapid
          </span>{" "}
          Response
        </h3>
        <p className="text-justify font-normal">
          We provide rapid response for emergency situations, ensuring minimal
          downtime.
        </p>
      </div>

      <hr className="border-slate-200 mt-10" />

      {/* Carousel using Swiperjs */}
      <div className="w-full lg:min-h-[1000px] min-h-[700px]  flex my-auto pb-14 justify-center px-10 ">
        <SliderCarousel projects={projects} />
      </div>
      <hr className="border-slate-200 mt-10" />

      <CTA />
    </section>
  );
};

export default transition(Work);
