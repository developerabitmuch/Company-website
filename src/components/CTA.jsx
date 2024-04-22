import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="cta">
      <motion.p
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="cta-text"
      >
        Have a Project in mind? <br className="sm:block hidden" /> Let's Build
        something together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="btn"
      >
        <Link to="/contact">Contact</Link>
      </motion.div>
    </section>
  );
};

export default CTA;
