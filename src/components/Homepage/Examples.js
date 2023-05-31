import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Examples = () => {
  return (
    <div
      className={`${inter.className} max-w-6xl mx-auto flex flex-col gap-6 pb-24`}
    >
      <h2 className="text-center text-4xl font-black tracking-wide text-white">
        This library contains
      </h2>
      <div className="flex items-center justify-center w-full gap-10 h-full ">
        <div className="w-1/2 h-[500px]  relative rounded-xl  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-3xl font-bold tracking-wide text-white">
              Brand icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Tesla.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Stripe.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Twitch.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Zoom.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Trello.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/PayPal.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Google.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Amazon.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-2"
                src="./examples/brand/Netflix.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative rounded-xl h-[500px]  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-3xl font-bold tracking-wide text-white">
              Social icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/facebook.svg"
              ></img>
            </div>
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/discord.svg"
              ></img>
            </div>
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/snapchat.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/linkedin.svg"
              ></img>
            </div>
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/telegram.svg"
              ></img>
            </div>
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/twitter.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/pinterest.svg"
              ></img>
            </div>
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/reddit.svg"
              ></img>
            </div>
            <div className="w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/social/tiktok.svg"
              ></img>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="flex items-center justify-center w-full gap-12 h-full">
        <div className="w-1/2 relative rounded-xl h-[500px]  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-3xl font-bold tracking-wide text-white">
              Solid icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/settings-2.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/power-2.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/home-2.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/minus-circle-2.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/info-2.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/hexagon-2.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/github-2.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/gitlab-2.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/solid/fast-forward-2.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative rounded-xl h-[500px]  flex flex-col gap-8 items-center justify-center">
          <div className=" flex justify-center  w-full ">
            <h3 className="text-3xl font-bold tracking-wide text-white">
              Outline icons
            </h3>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/settings.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/power.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/home.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/minus-circle.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/info.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/hexagon.svg"
              ></img>
            </div>
          </div>
          <div className="grid w-full place-items-center grid-cols-3">
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/github.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/gitlab.svg"
              ></img>
            </div>
            <div className=" w-24 h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
              <img
                className=" h-full w-full rounded-lg p-6"
                src="./examples/outline/fast-forward.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-indigo-300 self-center  text-black  hover:bg-indigo-500 duration-300 group h-12 w-72 gap-2 rounded-xl hover:text-white font-semibold flex items-center justify-center">
        Want to add icons?
      </button>
    </div>
  );
};

export default Examples;
