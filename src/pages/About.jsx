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
    <section className="max-container">
      {/* Heading hai yh  */}
      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="head-text"
      >
        Hello, This is{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          A Bit Much Co.
        </span>
      </motion.h1>

      {/* Explanation of the company */}
      <div className="mt-5 flex flex-col gap-3 text-slate-800">
        <p>
          Digital Animation Agency based in United States, specializing in
          creating High Resolution Motion Graphics and Animations that Rocks!
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
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-12"
        >
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              {/* a self closing div for the btn-back take animation ki trhn lage */}
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <hr className="border-slate-200 mt-10" />

      {/* Experience of A Bit Much*/}
      <div className="py-16">
        <h3 className="subhead-text">Our Clients.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-800">
          <p>
            We've worked with different clients, leveraging🚀 their Business and
            Sky Rocketing🚀 there Sales. Here's the rundown:
          </p>
        </div>

        {/* Using React Vertical Timeline Component library to actually modify and create the timeline along with the animations */}
        {/* Work History show krne ke liye client ko hm Timeline ke component ko use krrhe hain */}
        <div className="mt-12 flex">
          <VerticalTimeline>
            {/* Experience ke array ko map krleinge aur experienceElement ke andar show krdeinge hm use */}
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                className="hover-effect" // Applying custom hover class
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                {/* Here we explain in the bullet points that what we actually do at that company  */}
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Creating CTA -->> So as everybody redirect to the contact page */}
      <hr className="border-slate-200" />

      {/* component bnarhe hain alg CTA ka */}
      <CTA />
    </section>
  );
};

export default transition(About);
