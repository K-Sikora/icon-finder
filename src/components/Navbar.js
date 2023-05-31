import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <header
      className={`${inter.className} w-full h-[90px] flex px-3 sm:px-5 xl:px-10 items-center  bg-indigo-950`}
    >
      <div className="text-white  w-full mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-lg italic flex gap-2 items-center justify-center font-black"
          >
            just-icons
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/K-Sikora">
            <img
              className="w-7 h-7"
              src="./github.svg"
            ></img>
          </Link>
          <Link href="https://krzysztofsikora.com">
            <img
              className="w-7 h-7"
              src="./web.svg"
            ></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
