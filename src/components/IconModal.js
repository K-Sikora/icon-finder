import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";
import { SketchPicker } from "react-color";
const inter = Inter({ subsets: ["latin"] });

const IconModal = ({
  currentlyOpenName,
  currentlyOpenUrl,
  isOpen,
  setIsOpen,
  color,
  handleCopyIconUrl,
  copied,
  isOpenSketchPicker,
  handleDownload,
  setIsOpenSketchPicker,
  handleColorChange,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${inter.className} flex items-center justify-center  fixed w-full h-full top-0 left-0 z-50 `}
          initial={{ y: 2000 }}
          animate={{ y: 0 }}
          exit={{ y: -2000 }}
          transition={{ duration: 0.6 }}
        >
          <div
            data-click="bg"
            onClick={(e) => {
              if (e.target.dataset.click === "bg") {
                setIsOpenSketchPicker(false);
              }
            }}
            className="w-full h-full relative bg-dialog gap-6 flex flex-col justify-center pb-52 md:pb-40"
          >
            <div className="flex self-center flex-col gap-3 items-center justify-center ">
              <div
                title={currentlyOpenName}
                style={{ background: color }}
                className={`w-32 h-32 relative p-8 gap-2 md:w-40 md:h-40 flex flex-col cursor-pointer  hover:bg-indigo-950 rounded-xl duration-150 items-center justify-between `}
              >
                <img
                  className="w-full h-full -mt-2"
                  src={currentlyOpenUrl}
                ></img>
                <h2 className="absolute bottom-3 text-sm md:text-base font-semibold text-white text-truncate w-28 text-center">
                  {currentlyOpenName}
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 self-center">
              <div className="flex gap-6">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    handleDownload();
                  }}
                  className="bg-indigo-500 flex-col text-xs flex items-center justify-center text-white font-extrabold rounded-lg h-12 w-12 shadow-lg shadow-black/10"
                >
                  <img
                    className="w-1/2 h-1/2"
                    src="./download.svg"
                  ></img>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopyIconUrl}
                  className="bg-indigo-500 relative flex-col text-xs flex items-center justify-center text-white font-extrabold rounded-lg h-12 w-12 shadow-lg shadow-black/10"
                >
                  <img
                    className="w-1/2 h-1/2"
                    src="./copy.svg"
                  ></img>
                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, type: "spring" }}
                        className="absolute shadow-lg rounded-md shadow-black/10 h-8 w-32 flex items-center justify-center -top-10 bg-indigo-900"
                      >
                        URL copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
              <div className="flex items-center w-full justify-center gap-2 relative flex-col ">
                <div className="w-full justify-center flex gap-2 h-12">
                  <button
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => setIsOpenSketchPicker(!isOpenSketchPicker)}
                    className="h-full w-12 rounded-lg flex items-center justify-center"
                  >
                    <img
                      className="h-1/2 w-1/2"
                      src="./color-picker.svg"
                    ></img>
                  </button>
                  <input
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                    value={color}
                    className="bg-indigo-900 border-2 border-transparent duration-200 focus:border-indigo-500 rounded-lg px-3 h-full  outline-none shadow-lg shadow-black/10 text-white"
                  ></input>
                </div>

                {isOpenSketchPicker && (
                  <div
                    data-btn="change-bg"
                    className="absolute top-14"
                  >
                    <SketchPicker
                      color={color}
                      onChange={handleColorChange}
                    />
                  </div>
                )}
              </div>
            </div>
            <button
              className="absolute top-5 bg-indigo-900 p-2 rounded-lg shadow-lg shadow-black/10 right-5"
              onClick={() => setIsOpen(false)}
            >
              <img src="./x.svg"></img>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IconModal;
