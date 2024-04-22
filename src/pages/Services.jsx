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
      {/* Heading */}
      <motion.h1
        initial={{ opacity: -3, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="head-text"
      >
        Our{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Services
        </span>
      </motion.h1>

      {/* Brief Explanation regarding the projects */}
      <div className="mt-5 flex flex-col gap-3 text-slate-800">
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

      {/* Carousel using Swiperjs */}
      <div className="w-full min-h-[1000px]  flex my-auto pb-14 justify-center px-10 ">
        <SliderCarousel projects={projects} />
      </div>
      <hr className="border-slate-200 mt-10" />

      <CTA />
    </section>
  );
};

export default transition(Services);
