import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Inter } from "next/font/google";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import Loader from "@/components/Loader";
import Layout from "@/Layouts/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import IconModal from "@/components/IconModal";
const inter = Inter({ subsets: ["latin"] });
export default function Icons() {
  const router = useRouter();

  let [selectedIcons, setSelectedIcons] = useState(
    router.query.filter === "brand"
      ? "brand"
      : router.query.filter === "solid"
      ? "solid"
      : router.query.filter === "outline"
      ? "outline"
      : "social"
  );

  const [copied, setCopied] = useState(false);
  const [currentlyOpenName, setCurrentlyOpenName] = useState("");
  const [currentlyOpenUrl, setCurrentlyOpenUrl] = useState("");
  const [backToTop, setBackToTop] = useState(false);
  const [filtered, setFiltered] = useState(
    router.query.search ? router.query.search : ""
  );
  const [isOpenSketchPicker, setIsOpenSketchPicker] = useState(false);
  const [filteredIconsLength, setFilteredIconsLength] = useState(0);
  let [isOpen, setIsOpen] = useState(false);
  const getAllIcons = async () => {
    try {
      const response = await axios.get("/api/geticons");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { data: allIcons, isLoading } = useQuery({
    queryKey: "allIcons",
    queryFn: getAllIcons,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (allIcons && allIcons.length > 0) {
      const filteredIcons = allIcons[
        selectedIcons === "social"
          ? 0
          : selectedIcons === "brand"
          ? 1
          : selectedIcons === "solid"
          ? 2
          : 3
      ].data.filter((icon) =>
        icon.name.toLowerCase().includes(filtered.toLowerCase())
      );
      setFilteredIconsLength(filteredIcons.length);
    }
  }, [allIcons, filtered, selectedIcons]);

  const [color, setColor] = useState("#6366f1");

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
  useEffect(() => {
    if (isLoading === false) {
      router.push(
        {
          pathname: router.pathname,
          query: {},
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [isLoading]);
  return (
    <Layout>
      <div
        className={` ${inter.className} flex flex-col gap-5 w-full px-3 sm:px-5 xl:px-10 py-10 items-center justify-center  mx-auto`}
      >
        {isLoading ? (
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
            value={filtered}
            className="w-full text-sm md:text-lg font-semibold text-white focus:bg-indigo-900 outline-none duration-150 rounded-xl px-3 md:px-6 h-12 md:h-16  bg-indigo-950"
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
            className="first:rounded-l-xl last:rounded-r-xl text-white"
            value="social"
          >
            {({ checked }) => (
              <button
                disabled={isLoading}
                className={` ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11  font-bold text-sm lg:text-lg   duration-500 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
              >
                Social
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl text-white"
            value="brand"
          >
            {({ checked }) => (
              <button
                disabled={isLoading}
                className={`
                ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11  font-bold text-sm lg:text-lg   duration-500 cursor-pointer rounded-[inherit] hover:bg-indigo-950 `}
              >
                Brand
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl text-white"
            value="solid"
          >
            {({ checked }) => (
              <button
                disabled={isLoading}
                className={`
                ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11  font-bold text-sm lg:text-lg   duration-500 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
              >
                Solid
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            className="first:rounded-l-xl last:rounded-r-xl text-white"
            value="outline"
          >
            {({ checked }) => (
              <button
                disabled={isLoading}
                className={`
                ${
                  checked
                    ? "bg-indigo-950 text-indigo-500"
                    : "border-transparent"
                }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11  font-bold text-sm lg:text-lg   duration-500 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
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
          className={`min-h-screen grid-cols-3 relative sm:grid-cols-5 grid md:grid-cols-6 lg:grid-cols-8 place-content-start justify-items-center gap-4 w-full rounded-xl py-4 px-2 bg-gradient-to-r from-indigo-400/40 to-indigo-400/50 backdrop-blur-xl`}
        >
          {isLoading ? (
            <div className="absolute h-full w-full flex items-center justify-center ">
              <Loader />
            </div>
          ) : (
            allIcons &&
            allIcons[
              selectedIcons === "social"
                ? 0
                : selectedIcons === "brand"
                ? 1
                : selectedIcons === "solid"
                ? 2
                : 3
            ].data
              .filter((icon) =>
                icon.name.toLowerCase().includes(filtered.toLowerCase())
              )
              .map((filteredIcon, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index / 55 }}
                  title={filteredIcon.name.toLowerCase()}
                  data-name={filteredIcon.name.toLowerCase()}
                  data-link={filteredIcon.url}
                  data-purp="icon-element"
                  key={filteredIcon.url}
                  className="w-24 relative h-24 md:w-28 md:h-28 p-3 flex flex-col cursor-pointer text-gray-50 rounded-lg  hover:bg-indigo-600 hover:shadow-lg shadow-black hover:text-white items-center justify-center "
                >
                  <Image
                    alt={filteredIcon.name}
                    width={24}
                    height={24}
                    className="h-full w-full p-5 -mt-2  pointer-events-none"
                    src={`${filteredIcon.url}`}
                  ></Image>
                  <h2 className="text-xs absolute bottom-3 w-20 text-truncate font-semibold md:font-bold text-center md:text-xs pointer-events-none">
                    {filteredIcon.name
                      .toLowerCase()
                      .substring(0, filteredIcon.name.indexOf("."))}
                  </h2>
                </motion.div>
              ))
          )}
        </div>

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
        <AnimatePresence>
          {backToTop && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed right-10 bottom-10 bg-indigo-700 w-14 h-14 rounded-lg shadow-black/20 shadow-lg flex items-center justify-center"
            >
              <Link
                className="w-full h-full rounded-lg"
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
