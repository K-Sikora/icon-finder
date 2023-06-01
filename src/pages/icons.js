import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Inter } from "next/font/google";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SketchPicker } from "react-color";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import Loader from "@/components/Loader";
import Layout from "@/Layouts/Layout";
const inter = Inter({ subsets: ["latin"] });
export default function Icons() {
  let [selectedIcons, setSelectedIcons] = useState("social");
  const [copied, setCopied] = useState(false);
  const [currentlyOpenName, setCurrentlyOpenName] = useState("");
  const [currentlyOpenUrl, setCurrentlyOpenUrl] = useState("");
  const [backToTop, setBackToTop] = useState(false);
  const [filtered, setFiltered] = useState("");
  const [isOpenSketchPicker, setIsOpenSketchPicker] = useState(false);
  const [filteredIconsLength, setFilteredIconsLength] = useState(0);
  let [isOpen, setIsOpen] = useState(false);
  const getAllIcons = async () => {
    try {
      const response = await axios.get(`/api/geticons/${selectedIcons}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const {
    data: allIcons,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: "allIcons",
    queryFn: getAllIcons,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (allIcons && allIcons.length > 0) {
      const filteredIcons = allIcons.filter((icon) =>
        icon.name.toLowerCase().includes(filtered.toLowerCase())
      );
      setFilteredIconsLength(filteredIcons.length);
    }
  }, [allIcons, filtered]);
  const [color, setColor] = useState("#818cf8");
  useEffect(() => {
    refetch();
  }, [selectedIcons]);
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
  const handleScroll = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    setBackToTop(scrollPosition > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Layout>
      <div
        className={` ${inter.className} flex flex-col gap-5 w-full px-3 sm:px-5 xl:px-10 py-10 items-center justify-center  mx-auto`}
      >
        {isRefetching || isLoading ? (
          <span className="w-44 self-start h-4 text-sm font-semibold text-white">
            <SkeletonTheme
              baseColor="#4338ca"
              highlightColor="#a5b4fc"
            >
              <Skeleton />
            </SkeletonTheme>
          </span>
        ) : (
          <h3
            id="top"
            className="w-full h-4 text-sm font-semibold text-white "
          >
            Showing {filteredIconsLength} {selectedIcons} icons
          </h3>
        )}

        <div className="w-full relative flex flex-col gap-3">
          <input
            onChange={(e) => {
              setFiltered(e.target.value);
            }}
            className="w-full text-sm md:text-lg font-semibold text-white outline-none duration-150 rounded-xl px-3 md:px-6 h-12 md:h-16  bg-indigo-950"
            placeholder={`Search ${selectedIcons} icons`}
          ></input>
          <button className="absolute bg-indigo-900 rounded-r-xl right-0 w-12 md:w-16 h-full top-1/2 -translate-y-1/2 flex items-center justify-center">
            <img
              className=""
              src="./search.svg"
            ></img>
          </button>
        </div>

        <RadioGroup
          value={selectedIcons}
          onChange={setSelectedIcons}
          className="flex  border-2 border-indigo-300/20 self-start rounded-xl"
        >
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl"
            value="social"
          >
            {({ checked }) => (
              <button
                disabled={isRefetching || isLoading}
                className={`${
                  isRefetching || isLoading
                    ? " cursor-default pointer-events-none"
                    : ""
                } ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11 text-white font-semibold text-sm lg:text-lg   duration-150 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
              >
                Social
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl"
            value="brand"
          >
            {({ checked }) => (
              <button
                disabled={isRefetching || isLoading}
                className={`
                ${
                  isRefetching || isLoading
                    ? " cursor-default pointer-events-none"
                    : ""
                }
                ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11 text-white font-semibold text-sm lg:text-lg   duration-150 cursor-pointer rounded-[inherit] hover:bg-indigo-950 `}
              >
                Brand
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl"
            value="solid"
          >
            {({ checked }) => (
              <button
                disabled={isRefetching || isLoading}
                className={`
                ${
                  isRefetching || isLoading
                    ? " cursor-default pointer-events-none"
                    : ""
                }
                ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11 text-white font-semibold text-sm lg:text-lg   duration-150 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
              >
                Solid
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl"
            value="outline"
          >
            {({ checked }) => (
              <button
                disabled={isRefetching || isLoading}
                className={`
                ${
                  isRefetching || isLoading
                    ? " cursor-default pointer-events-none"
                    : ""
                }
                ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11 text-white font-semibold text-sm lg:text-lg   duration-150 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
              >
                Outline
              </button>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <div
          onClick={(e) => {
            if (e.target.dataset.purp === "icon-element") {
              setCurrentlyOpenName(e.target.dataset.name);
              setCurrentlyOpenUrl(e.target.dataset.link);
              setIsOpen(true);
            }
          }}
          className={`min-h-screen grid-cols-3 relative sm:grid-cols-5 grid md:grid-cols-6 lg:grid-cols-7 place-content-start justify-items-center gap-4 w-full rounded-xl py-4 px-2 bg-gradient-to-r from-indigo-300/40 to-indigo-300/50 backdrop-blur-xl`}
        >
          {isLoading || isRefetching ? (
            <div className="absolute h-full w-full flex items-center justify-center ">
              <Loader />
            </div>
          ) : (
            allIcons &&
            allIcons
              .filter((icon) =>
                icon.name.toLowerCase().includes(filtered.toLowerCase())
              )
              .map((filteredIcon, index) => (
                <div
                  title={filteredIcon.name.toLowerCase()}
                  data-name={filteredIcon.name.toLowerCase()}
                  data-link={filteredIcon.url}
                  data-purp="icon-element"
                  key={index}
                  className="w-24 relative h-24 md:w-28 md:h-28 p-3 flex flex-col cursor-pointer text-gray-50 rounded-lg duration-150 hover:bg-indigo-600 hover:shadow-lg shadow-black hover:text-white items-center justify-center "
                >
                  <img
                    className="h-full w-full p-5 -mt-2  pointer-events-none"
                    src={`${filteredIcon.url}`}
                  ></img>
                  <h2 className="text-xs absolute bottom-2 w-20 text-truncate font-semibold md:font-bold text-center md:text-xs pointer-events-none">
                    {filteredIcon.name
                      .toLowerCase()
                      .substring(0, filteredIcon.name.indexOf("."))}
                  </h2>
                </div>
              ))
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`${inter.className} flex items-center justify-center  fixed w-full h-full top-0 left-0 z-10 `}
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
                className="w-full h-full rounded-lg relative bg-dialog gap-6 flex flex-col justify-center pb-52 md:pb-40"
              >
                <div className="flex self-center flex-col gap-3 items-center justify-center ">
                  <div
                    title={currentlyOpenName}
                    style={{ background: color }}
                    className={`w-32 h-32 relative p-8 gap-2 md:w-40 md:h-40 flex flex-col cursor-pointer  hover:bg-indigo-950 rounded-xl duration-150    items-center justify-between `}
                  >
                    <img
                      className="w-full h-full"
                      src={currentlyOpenUrl}
                    ></img>
                    <h2 className=" absolute bottom-1.5 text-sm md:text-base font-semibold text-white text-truncate w-28 text-center">
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
                        onClick={() =>
                          setIsOpenSketchPicker(!isOpenSketchPicker)
                        }
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
        <AnimatePresence>
          {backToTop && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed right-10 bottom-10 bg-indigo-300 w-14 h-14 rounded-lg shadow-black/20 shadow-lg flex items-center justify-center"
            >
              <Link
                className="w-full h-full"
                to="top"
                smooth={true}
                duration={500}
              >
                <button className="flex items-center justify-center w-full h-full">
                  <img
                    className="w-1/2 h-1/2"
                    src="./chevron-up.svg"
                  ></img>
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
