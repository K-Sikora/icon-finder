import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import SingleIconExample from "./SingleIconExample";

const ExampleContainer = ({
  exampleArray,
  exampleArray2,
  exampleArray3,
  type,
}) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 relative pt-16 md:pt-0  rounded-xl md:h-[550px]  flex flex-col gap-8 items-center justify-center"
    >
      <div className=" flex justify-center  w-full ">
        <h3 className="text-xl first-letter:uppercase md:text-3xl font-bold tracking-wide text-white">
          {` ${type} icons`}
        </h3>
      </div>
      <div className="grid w-full place-items-center grid-cols-4">
        {exampleArray.map((item, index) => (
          <SingleIconExample
            key={index}
            item={item}
            type={type}
          />
        ))}
      </div>
      <div className="grid w-full place-items-center grid-cols-4">
        {exampleArray2.map((item, index) => (
          <SingleIconExample
            key={index}
            item={item}
            type={type}
          />
        ))}
      </div>
      <div className="grid w-full place-items-center grid-cols-4">
        {exampleArray3.map((item, index) => (
          <SingleIconExample
            key={index}
            item={item}
            type={type}
          />
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-indigo-800 font-semibold text-white duration-200 transition-[border] hover:border-indigo-300 h-12 w-64 gap-1 rounded-lg flex items-center justify-center border-2 border-indigo-500 shadow-lg shadow-black/20"
        onClick={() => {
          router.push({
            pathname: "/icons",
            query: { filter: type },
          });
        }}
      >
        {`Explore ${type} icons`}
        <img
          className=""
          src="./chevrons-right.svg"
        ></img>
      </motion.button>
    </motion.div>
  );
};

export default ExampleContainer;
