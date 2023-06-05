import React from "react";
import { motion } from "framer-motion";
const SearchMobile = ({ setMobileSearchVisible }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      onClick={() => {
        setMobileSearchVisible(true);
      }}
      className="md:hidden flex items-center font-bold text-sm md:text-base justify-center"
    >
      <img
        className="w-10 p-2.5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl"
        src="./search.svg"
      ></img>
    </motion.button>
  );
};

export default SearchMobile;
