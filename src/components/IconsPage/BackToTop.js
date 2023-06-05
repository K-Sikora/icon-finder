import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const BackToTop = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed right-10 bottom-10 bg-indigo-700 w-14 h-14 rounded-lg shadow-black/20 shadow-lg flex items-center justify-center"
    >
      <Link
        className="w-full h-full rounded-lg"
        to="top"
        smooth={true}
        duration={500}
      >
        <button className="flex items-center justify-center w-full h-full">
          <img
            className="w-1/2 h-1/2"
            src="./chevron-up.svg"
          ></img>
        </button>
      </Link>
    </motion.div>
  );
};

export default BackToTop;
