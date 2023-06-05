import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { motion } from "framer-motion";
import ExampleContainer from "./Examples/ExampleContainer";
const Examples = () => {
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
        <ExampleContainer
          exampleArray={["reddit", "twitter", "tiktok", "telegram"]}
          exampleArray2={["snapchat", "pinterest", "linkedin", "facebook"]}
          exampleArray3={["youtube", "dribble", "instagram", "discord"]}
          type={"social"}
        />
        <ExampleContainer
          exampleArray={["Twitch", "Amazon", "Zoom", "PayPal"]}
          exampleArray2={["Coinbase", "Dropbox", "google", "Microsoft"]}
          exampleArray3={["Netflix", "Stripe", "Tesla", "Trello"]}
          type={"brand"}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12 h-full">
        <ExampleContainer
          exampleArray={["fast-forward-2", "github-2", "gitlab-2", "hexagon-2"]}
          exampleArray2={["battery-2", "bookmark-2", "clock-2", "home-2"]}
          exampleArray3={["info-2", "minus-circle-2", "power-2", "settings-2"]}
          type={"solid"}
        />
        <ExampleContainer
          exampleArray={["fast-forward", "github", "gitlab", "hexagon"]}
          exampleArray2={["battery", "bookmark", "clock", "home"]}
          exampleArray3={["info", "minus-circle", "power", "settings"]}
          type={"outline"}
        />
      </div>
    </div>
  );
};

export default Examples;
