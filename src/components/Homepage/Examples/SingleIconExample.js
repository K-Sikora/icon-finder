import React from "react";

const SingleIconExample = ({ type, item }) => {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-300 border-2 border-indigo-400 shadow-lg shadow-black/20 rounded-lg  flex items-center justify-center">
      <img
        className={` h-full w-full rounded-lg  ${
          type === "brand" ? "p-2 sm:p-3" : "p-3 sm:p-7"
        }`}
        src={`./examples/${type}/${item}.svg`}
      ></img>
    </div>
  );
};

export default SingleIconExample;
