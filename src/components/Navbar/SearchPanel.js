import React from "react";
import { motion } from "framer-motion";
import Loader from "../Loader";
import Image from "next/image";
const SearchPanel = ({
  query,
  isLoading,
  icons,
  selectedOption,
  setCurrentlyOpenName,
  setCurrentlyOpenUrl,
  setIsOpen,
}) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute shadow-xl top-[90px] z-20 left-0 w-full  bg-gradient-to-r from-indigo-400/40 to-indigo-400/50 backdrop-blur-xl text-white"
    >
      <div
        onClick={(e) => {
          if (e.target.dataset.purp === "icon-element") {
            document.body.style.overflow = "hidden";
            setCurrentlyOpenName(e.target.dataset.name);
            setCurrentlyOpenUrl(e.target.dataset.link);
            setIsOpen(true);
          }
        }}
        className="w-full h-full grid grid-cols-3 md:grid-cols-6 justify-items-center place-items-start"
      >
        {!isLoading ? (
          icons &&
          icons.length > 0 &&
          icons[selectedOption.id].data
            .filter((icon) =>
              icon.name.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 24)
            .map((icon, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index / 55 }}
                title={icon.name.toLowerCase()}
                data-name={icon.name.toLowerCase()}
                data-link={icon.url}
                data-purp="icon-element"
                key={icon.url}
                className=" relative my-4 w-20 h-20 flex flex-col cursor-pointer text-gray-50 rounded-lg  hover:bg-indigo-600 hover:shadow-lg shadow-black hover:text-white items-center justify-center "
              >
                <Image
                  alt={icon.name}
                  width={24}
                  height={24}
                  className="h-full w-full p-5 -mt-4  pointer-events-none"
                  src={`${icon.url}`}
                ></Image>
                <h2 className="text-xs absolute bottom-1.5 px-2 w-20 text-truncate font-semibold md:font-bold text-center md:text-xs pointer-events-none">
                  {icon.name.toLowerCase().substring(0, icon.name.indexOf("."))}
                </h2>
              </motion.div>
            ))
        ) : (
          <div className="h-8 col-span-8 ">
            <Loader />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SearchPanel;
