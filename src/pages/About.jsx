import { skills, experiences } from "../constants";

// Importing Timeline Elements to use them to create the timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import transition from "../transition";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-container overflow-hidden">
      {/* Heading hai yh  */}
      <motion.h1
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="font-semibold sm:leading-snug font-poppins text-5xl"
      >
        About{" "}
        <span className="blue-gradient_text font-semibold drop-shadow text-5xl">
          Us
        </span>
      </motion.h1>

      {/* Explanation of the company */}
      <div className="mt-5 flex flex-col  text-slate-800">
        <h2 className="font-poppins font-semibold text-3xl drop-shadow-md  ">
          Who{" "}
          <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
            We
          </span>{" "}
          Are
        </h2>
        <p className=" text-justify font-semibold text-lg">
          We are a dedicated team of experts specializing in data center Remote
          Hands Support.
        </p>
        <br />
        <h2 className="font-poppins font-semibold text-3xl drop-shadow-md">
          Our{" "}
          <span className="bg-gradient-to-r from-[#c86b6b] via-[#bd6ac0] to-[#184ed4] bg-clip-text text-transparent">
            Commitment
          </span>
          <br />
        </h2>
        <p className=" text-slate-800 text-justify font-semibold text-lg">
          We provide reliable and responsive assistance whenever you need it.
        </p>
      </div>

      <hr className="border-slate-200 mt-10" />

      {/* Skills we provide as a service */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          Our{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
            viewport={{ once: true }}
            className="blue-gradient_text font-semibold drop-shadow"
          >
            Expertise{" "}
          </motion.span>{" "}
          We Provide!
        </h3>

        {/* Skills ke icons hm yhn pe rkheinge */}
        {/* Constant ke folder se hm map krwaeinge data apna skills ko import krke*/}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-12"
        >
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              {/* a self closing div for the btn-back take animation ki trhn lage */}
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center hover:animate-spin">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain hover:animate-spin"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <hr className="border-slate-200 mt-10" />

      {/* Creating CTA -->> So as everybody redirect to the contact page */}
      <hr className="border-slate-200" />

      {/* component bnarhe hain alg CTA ka */}
      <CTA />
    </section>
  );
};

export default transition(About);
