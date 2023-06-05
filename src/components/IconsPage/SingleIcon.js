import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const SingleIcon = ({ filteredIcon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index / 55 }}
      title={filteredIcon.name.toLowerCase()}
      data-name={filteredIcon.name.toLowerCase()}
      data-link={filteredIcon.url}
      data-purp="icon-element"
      key={filteredIcon.url}
      className="w-24 relative h-24 md:w-28 md:h-28 p-3 flex flex-col cursor-pointer text-gray-50 rounded-lg  hover:bg-indigo-600 hover:shadow-lg shadow-black hover:text-white items-center justify-center "
    >
      <Image
        alt={filteredIcon.name}
        width={24}
        height={24}
        className="h-full w-full p-5 -mt-2  pointer-events-none"
        src={`${filteredIcon.url}`}
      ></Image>
      <h2 className="text-xs absolute bottom-3 w-20 text-truncate font-semibold md:font-bold text-center md:text-xs pointer-events-none">
        {filteredIcon.name
          .toLowerCase()
          .substring(0, filteredIcon.name.indexOf("."))}
      </h2>
    </motion.div>
  );
};

export default SingleIcon;
