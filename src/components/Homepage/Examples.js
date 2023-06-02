import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Examples = () => {
  return (
    <div
      className={`${inter.className} max-w-6xl mx-auto flex flex-col gap-3 md:gap-6 pb-24`}
    >
      <h2 className="text-center text-2xl md:text-4xl font-black tracking-wide text-white">
        This library contains
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-10 h-full ">
        <div className="w-full md:w-1/2 md:h-[500px] pt-10 md:pt-0 relative rounded-xl  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Brand icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["Twitch", "Amazon", "Zoom", "PayPal"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-2"
                  src={`./examples/brand/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["Google", "Netflix", "Tesla", "Trello"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-2"
                  src={`./examples/brand/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["Coinbase", "Microsoft", "Dropbox", "Stripe"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-2"
                  src={`./examples/brand/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 relative pt-10 md:pt-0  rounded-xl md:h-[500px]  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Social icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["reddit", "twitter", "tiktok", "telegram"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/social/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["snapchat", "pinterest", "linkedin", "facebook"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/social/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["youtube", "dribble", "instagram", "discord"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/social/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12 h-full">
        <div className="w-full md:w-1/2 relative rounded-xl pt-10 md:pt-0  md:h-[500px]  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Solid icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["fast-forward-2", "github-2", "gitlab-2", "hexagon-2"].map(
              (item) => (
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                  <img
                    className=" h-full w-full rounded-lg p-5"
                    src={`./examples/solid/${item}.svg`}
                  ></img>
                </div>
              )
            )}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["home-2", "info-2", "minus-circle-2", "power-2"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/solid/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["battery-2", "bookmark-2", "clock-2", "hexagon-2"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/solid/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 relative pt-10 md:pt-0 rounded-xl md:h-[500px]  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide text-white">
              Outline icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["fast-forward", "github", "gitlab", "hexagon"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/outline/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["home", "info", "minus-circle", "power"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/outline/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
          <div className="grid w-full place-items-center grid-cols-4">
            {["battery", "bookmark", "clock", "hexagon"].map((item) => (
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
                <img
                  className=" h-full w-full rounded-lg p-5"
                  src={`./examples/outline/${item}.svg`}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
