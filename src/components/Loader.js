import React from "react";
import { BarLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BarLoader
        cssOverride={{ borderRadius: "12px", backgroundColor: "#a5b4fc" }}
        color="#4338ca"
        height={14}
        width={200}
      />
    </div>
  );
};

export default Loader;
