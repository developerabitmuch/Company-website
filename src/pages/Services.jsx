import { projects } from "../constants";
import transition from "../transition";
import CTA from "../components/CTA";
import SliderCarousel from "../components/SliderCarousel";
import { motion } from "framer-motion";

// skunk 2d image
import duck from "../assets/skunk_img/Duck.png";

const Services = () => {
  console.log("Projects: ", projects);

  return (
    <main className="w-full px-40 py-10 min-h-screen overflow-hidden bg-gradient-to-tr from-blue-800 via-blue-200 to-blue-800">
      {/* It is the main section and inside we have 2divs and those 2 are having the same space and we will be giving it using the flex-1 */}
      <section className="w-full h-full  flex  ">
        {/* It will have the data inside it in the text form */}
        <div className="bg-red-60 flex-1">
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
              Services
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
              Our Services Site Assessment: We conduct thorough site assessments
              to identify vulnerabilities and determine the optimal camera
              placement for maximum coverage. Camera Installation: Our experts
              install state-of-the-art cameras, DVRs, and NVRs to capture and
              store high-definition footage.
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
              Our team consists of highly skilled on-site technicians who are
              ready to assist you remotely.
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
              We provide rapid response for emergency situations, ensuring
              minimal downtime.
            </p>
          </div>
          <hr className="border-slate-200 my-8" />
        </div>

        {/* The right side of the div having duck image*/}
        <div className="w-full h-full flex-1 my-auto pb-14  px-10  items-center ">
          <img src={duck} alt="skunk image" className="pl-32 h-[500px]" />
        </div>
      </section>

      {/* div which has coloum */}
      <div className="md:flex items-center justify-between ">
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

      {/* slider bar */}
      <div className="w-full min-h-[1000px]  flex my-auto  justify-center px-10 ">
        <SliderCarousel projects={projects} />
      </div>
      <hr className="border-slate-200 " />

      <CTA />
    </main>
  );
};

export default transition(Services);
