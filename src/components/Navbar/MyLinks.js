import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const MyLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="flex items-center gap-3 md:gap-6"
    >
      <Link href="https://github.com/K-Sikora">
        <motion.img
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className="w-6 h-6 md:w-7 md:h-7 "
          src="./github.svg"
        ></motion.img>
      </Link>
      <Link href="https://krzysztofsikora.com">
        <motion.img
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className="w-6 h-6 md:w-7 md:h-7"
          src="./web.svg"
        ></motion.img>
      </Link>
    </motion.div>
  );
};

export default MyLinks;
