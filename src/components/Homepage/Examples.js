import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
import { motion } from "framer-motion";
const Examples = () => {
  const router = useRouter();

  return (
    <div
      className={`${inter.className} max-w-6xl mx-auto flex flex-col gap-3 md:gap-6 pb-24`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl font-black tracking-wide text-white"
      >
        This library contains
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-10 h-full ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative pt-16 md:pt-0  rounded-xl md:h-[550px]  flex flex-col gap-8 items-center justify-center"
        >
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Social icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["reddit", "twitter", "tiktok", "telegram"].map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
              >
                <img
                  className=" h-full w-full rounded-lg p-3 sm:p-7"
                  src={`./examples/social/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["snapchat", "pinterest", "linkedin", "facebook"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-3 sm:p-7"
                    src={`./examples/social/${item}.svg`}
                  ></img>
                </div>
              )
            )}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["youtube", "dribble", "instagram", "discord"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-3 sm:p-7"
                    src={`./examples/social/${item}.svg`}
                  ></img>
                </div>
              )
            )}
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
                query: { filter: "social" },
              });
            }}
          >
            Explore social icons
            <img
              className=""
              src="./chevrons-right.svg"
            ></img>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:h-[550px] pt-16 md:pt-0 relative rounded-xl  flex flex-col gap-8 items-center justify-center"
        >
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Brand icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["Twitch", "Amazon", "Zoom", "PayPal"].map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
              >
                <img
                  className=" h-full w-full rounded-lg p-2"
                  src={`./examples/brand/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["Google", "Netflix", "Tesla", "Trello"].map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
              >
                <img
                  className=" h-full w-full rounded-lg p-2"
                  src={`./examples/brand/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4 ">
            {["Coinbase", "Microsoft", "Dropbox", "Stripe"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-2"
                    src={`./examples/brand/${item}.svg`}
                  ></img>
                </div>
              )
            )}
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
                query: { filter: "brand" },
              });
            }}
          >
            Explore brand icons
            <img
              className=""
              src="./chevrons-right.svg"
            ></img>
          </motion.button>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative rounded-xl pt-16 md:pt-0  md:h-[550px]  flex flex-col gap-8 items-center justify-center"
        >
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Solid icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["fast-forward-2", "github-2", "gitlab-2", "hexagon-2"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-3 sm:p-7"
                    src={`./examples/solid/${item}.svg`}
                  ></img>
                </div>
              )
            )}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["home-2", "info-2", "minus-circle-2", "power-2"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-3 sm:p-7"
                    src={`./examples/solid/${item}.svg`}
                  ></img>
                </div>
              )
            )}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["battery-2", "bookmark-2", "clock-2", "hexagon-2"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-3 sm:p-7"
                    src={`./examples/solid/${item}.svg`}
                  ></img>
                </div>
              )
            )}
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
                query: { filter: "solid" },
              });
            }}
          >
            Explore solid icons
            <img
              className=""
              src="./chevrons-right.svg"
            ></img>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative pt-16 md:pt-0 rounded-xl md:h-[550px]  flex flex-col gap-8 items-center justify-center"
        >
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Outline icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["fast-forward", "github", "gitlab", "hexagon"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
                >
                  <img
                    className=" h-full w-full rounded-lg p-3 sm:p-7"
                    src={`./examples/outline/${item}.svg`}
                  ></img>
                </div>
              )
            )}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["home", "info", "minus-circle", "power"].map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
              >
                <img
                  className=" h-full w-full rounded-lg p-3 sm:p-7"
                  src={`./examples/outline/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["battery", "bookmark", "clock", "hexagon"].map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center"
              >
                <img
                  className=" h-full w-full rounded-lg p-3 sm:p-7"
                  src={`./examples/outline/${item}.svg`}
                ></img>
              </div>
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
                query: { filter: "outline" },
              });
            }}
          >
            Explore outline icons
            <img
              className=""
              src="./chevrons-right.svg"
            ></img>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Examples;
