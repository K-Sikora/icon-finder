import Layout from "@/Layouts/Layout";
import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Examples from "@/components/Homepage/Examples";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Layout>
      <div
        className={`${inter.className} w-full min-h-screen -mt-[90px] flex px-3 sm:px-5 xl:px-0 items-center`}
      >
        <div className="max-w-6xl mx-auto text-white w-full items-center text-center flex flex-col gap-10">
          <h1 className="font-black text-4xl tracking-wide">
            Vector icons library
          </h1>
          <h2 className="font-bold text-3xl">Most useful icons in one place</h2>
          <Link href="/icons">
            <button className="bg-indigo-800 border-2 border-transparent hover:border-indigo-300 hover:bg-indigo-500 duration-300 group h-12 w-72 gap-2 rounded-xl font-semibold flex items-center justify-center">
              Start browsing icons
              <img
                className="w-6 group-hover:translate-x-1 duration-300"
                src="./explore.svg"
              ></img>
            </button>
          </Link>
        </div>
      </div>
      <Examples />
    </Layout>
  );
};

export default Home;
