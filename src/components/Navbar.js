import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AnimatePresence, motion } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import IconModal from "./IconModal";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "./Loader";
const Navbar = ({ icons, isLoading }) => {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);
  const router = useRouter();
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [currentlyOpenName, setCurrentlyOpenName] = useState("");
  const [currentlyOpenUrl, setCurrentlyOpenUrl] = useState("");
  const [isOpenSketchPicker, setIsOpenSketchPicker] = useState(false);
  const [color, setColor] = useState("#6366f1");
  let [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 0, name: "Social" },
    { id: 1, name: "Brand" },
    { id: 2, name: "Solid" },
    { id: 3, name: "Outline" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };
  const handleDownload = () => {
    const svgUrl = currentlyOpenUrl;

    fetch(svgUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const svgDataUrl = reader.result;
          const link = document.createElement("a");
          link.href = svgDataUrl;
          link.download = currentlyOpenName;
          link.click();
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error occurred while downloading SVG", error);
      });
  };
  const handleCopyIconUrl = () => {
    setCopied(true);
    navigator.clipboard.writeText(currentlyOpenUrl);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <header
      className={`${inter.className} relative w-full h-[90px] flex px-3 sm:px-5 xl:px-10 items-center  bg-indigo-950`}
    >
      <AnimatePresence>
        {mobileSearchVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute bg-indigo-950 flex px-3 items-center  justify-between left-0 top-0 w-full h-full"
          >
            <div className="flex relative items-center justify-center  text-white text-sm font-semibold rounded-l-xl h-12 border-r-2 border-gray-200/5 bg-indigo-900">
              <Listbox
                value={selectedOption}
                onChange={setSelectedOption}
              >
                <Listbox.Button className="flex w-24 items-center justify-center gap-1 px-4 h-full rounded-l-xl">
                  {selectedOption.name}
                  <img
                    className="w-4"
                    src="./chevron-down.svg"
                  ></img>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options className="flex cursor-pointer rounded-xl z-30 bg-indigo-950 absolute left-0 -bottom-48 flex-col">
                    {options.map((option) => (
                      <Listbox.Option
                        className="pl-4 py-3 pr-12"
                        key={option.id}
                        value={option}
                      >
                        {option.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                value={query}
                placeholder="Find an icon..."
                className="pr-8 md:pr-24 h-12 rounded-r-xl w-full text-sm md:text-lg font-semibold text-white  focus:bg-indigo-800 outline-none duration-150 px-3 bg-indigo-900"
              ></input>
              <button
                onClick={() => {
                  setMobileSearchVisible(false);
                }}
                className="absolute bg-transparent right-12 w-12  h-full top-1/2 -translate-y-1/2 flex items-center justify-center"
              >
                <img src="./x.svg"></img>
              </button>
              <button
                onClick={() => {
                  router.push({
                    pathname: "/icons",
                    query: {
                      filter: selectedOption.name.toLowerCase(),
                      search: query,
                    },
                  });
                }}
                className="absolute bg-transparent rounded-r-xl right-0 w-12  h-full top-1/2 -translate-y-1/2 flex items-center justify-center"
              >
                <img src="./search.svg"></img>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-white  w-full mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="md:text-lg italic flex gap-2 items-center justify-center font-black"
          >
            just_icons
          </Link>
        </div>
        {router.pathname === "/" && (
          <button
            onClick={() => {
              setMobileSearchVisible(true);
            }}
            className="md:hidden flex  items-center font-bold text-sm md:text-base justify-center"
          >
            <img
              className="w-10 p-2.5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl"
              src="./search.svg"
            ></img>
          </button>
        )}
        {router.pathname === "/" && (
          <div className="hidden w-[450px] md:flex">
            <div className="flex relative items-center justify-center  text-white text-sm font-semibold rounded-l-xl h-11 border-r-2 border-gray-200/5 bg-indigo-900">
              <Listbox
                value={selectedOption}
                onChange={setSelectedOption}
              >
                <Listbox.Button className="w-24 flex items-center justify-center gap-1 px-4 h-full rounded-l-xl">
                  {selectedOption.name}
                  <img
                    className=" w-4"
                    src="./chevron-down.svg"
                  ></img>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options className="flex cursor-pointer rounded-xl z-30 bg-indigo-950 absolute left-0 -bottom-48  flex-col">
                    {options.map((option) => (
                      <Listbox.Option
                        className="pl-4 py-3 pr-12 "
                        key={option.id}
                        value={option}
                      >
                        {option.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                value={query}
                placeholder="Find an icon..."
                className="h-11 rounded-r-xl w-full text-md font-semibold text-white  focus:bg-indigo-800 outline-none duration-150 px-3 bg-indigo-900"
              ></input>

              <button
                onClick={() => {
                  router.push({
                    pathname: "/icons",
                    query: {
                      filter: selectedOption.name.toLowerCase(),
                      search: query,
                    },
                  });
                }}
                className="absolute bg-transparent rounded-r-xl right-0 w-11  h-full top-1/2 -translate-y-1/2 flex items-center justify-center"
              >
                <img src="./search.svg"></img>
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 md:gap-6">
          <Link href="https://github.com/K-Sikora">
            <motion.img
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-6 h-6 md:w-7 md:h-7 "
              src="./github.svg"
            ></motion.img>
          </Link>
          <Link href="https://krzysztofsikora.com">
            <motion.img
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="w-6 h-6 md:w-7 md:h-7"
              src="./web.svg"
            ></motion.img>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {query.length > 0 && (mobileSearchVisible || windowSize >= 768) && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute shadow-xl top-[90px] z-20 left-0 w-full  bg-gradient-to-r from-indigo-400/40 to-indigo-400/50 backdrop-blur-xl text-white"
          >
            <div
              onClick={(e) => {
                if (e.target.dataset.purp === "icon-element") {
                  document.body.style.overflow = "hidden";
                  setCurrentlyOpenName(e.target.dataset.name);
                  setCurrentlyOpenUrl(e.target.dataset.link);
                  setIsOpen(true);
                }
              }}
              className="w-full h-full grid grid-cols-3 md:grid-cols-6 justify-items-center place-items-start"
            >
              {!isLoading ? (
                icons &&
                icons.length > 0 &&
                icons[selectedOption.id].data
                  .filter((icon) =>
                    icon.name.toLowerCase().includes(query.toLowerCase())
                  )
                  .slice(0, 24)
                  .map((icon, index) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index / 55 }}
                      title={icon.name.toLowerCase()}
                      data-name={icon.name.toLowerCase()}
                      data-link={icon.url}
                      data-purp="icon-element"
                      key={icon.url}
                      className=" relative my-4 w-20 h-20 flex flex-col cursor-pointer text-gray-50 rounded-lg  hover:bg-indigo-600 hover:shadow-lg shadow-black hover:text-white items-center justify-center "
                    >
                      <Image
                        alt={icon.name}
                        width={24}
                        height={24}
                        className="h-full w-full p-5 -mt-4  pointer-events-none"
                        src={`${icon.url}`}
                      ></Image>
                      <h2 className="text-xs absolute bottom-1.5 px-2 w-20 text-truncate font-semibold md:font-bold text-center md:text-xs pointer-events-none">
                        {icon.name
                          .toLowerCase()
                          .substring(0, icon.name.indexOf("."))}
                      </h2>
                    </motion.div>
                  ))
              ) : (
                <div className="h-8 col-span-8 ">
                  <Loader />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <IconModal
        color={color}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentlyOpenName={currentlyOpenName}
        currentlyOpenUrl={currentlyOpenUrl}
        handleCopyIconUrl={handleCopyIconUrl}
        copied={copied}
        isOpenSketchPicker={isOpenSketchPicker}
        handleDownload={handleDownload}
        setIsOpenSketchPicker={setIsOpenSketchPicker}
        handleColorChange={handleColorChange}
      />
    </header>
  );
};

export default Navbar;
