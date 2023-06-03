import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import Examples from "@/components/Homepage/Examples";
import { useQuery } from "react-query";
import Typewriter from "typewriter-effect";
import axios from "axios";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [amount, setAmount] = useState(0);
  const getIcons = async () => {
    try {
      const response = await axios.get("/api/geticons");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const { data: icons, isLoading } = useQuery({
    queryKey: "icons",
    queryFn: getIcons,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (icons && icons.length > 0) {
      let amount = 0;
      for (const iconFolder of icons) {
        amount += iconFolder.data.length;
      }
      setAmount(amount);
    }
  }, [icons]);
  const variant = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.2,
      },
    },
    hidden: {
      y: 40,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  return (
    <>
      <Navbar
        icons={icons}
        isLoading={isLoading}
      />
      <div
        className={`${inter.className} w-full min-h-screen -mt-[90px] flex px-3 sm:px-5 xl:px-0 items-center`}
      >
        <motion.div
          variants={variant}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto mt-8 text-white w-full items-center text-center flex flex-col gap-6 md:gap-10"
        >
          <motion.h1
            variants={variant}
            className="font-black text-2xl md:text-5xl tracking-wide"
          >
            Vector icons library
          </motion.h1>

          <motion.h2
            variants={variant}
            className="flex-col md:flex-row font-bold text-xl md:text-3xl flex md:gap-1.5 items-center justify-center"
          >
            Most useful
            <Typewriter
              options={{
                strings: ["brand", "social", "solid", "outline"],
                autoStart: true,
                loop: true,
                delay: 200,
                pauseFor: 2000,
              }}
            />
            icons in one place
          </motion.h2>
          <motion.div variants={variant}>
            <Link href="/icons">
              <button className="bg-indigo-800 border-2 border-transparent hover:border-indigo-300 hover:bg-indigo-500 duration-300 group h-12 w-64 md:w-72 gap-2 rounded-xl font-bold flex items-center justify-center">
                Start browsing
                <img
                  className="w-6 group-hover:translate-x-1 duration-300"
                  src="./explore.svg"
                ></img>
              </button>
            </Link>
          </motion.div>
          <h3 className="h-8 font-semibold md:text-lg">
            {" "}
            {amount > 0 && `Current number of icons: ${amount}`}
          </h3>
        </motion.div>
      </div>
      <Examples />
    </>
  );
};

export default Home;
