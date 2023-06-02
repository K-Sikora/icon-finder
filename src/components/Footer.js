import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer
      className={`${inter.className} w-full h-[90px] flex px-3 sm:px-5 xl:px-10 items-center  bg-indigo-950`}
    >
      Footer
    </footer>
  );
};

export default Footer;
