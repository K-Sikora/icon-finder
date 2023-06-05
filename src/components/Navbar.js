import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AnimatePresence, motion } from "framer-motion";
import IconModal from "./IconModal";
import { useRouter } from "next/router";
import MobileSearch from "./Navbar/MobileSearch";
import SearchPanel from "./Navbar/SearchPanel";
import Search from "./Navbar/Search";
import SearchMobile from "./Navbar/SearchMobile";
import MyLinks from "./Navbar/MyLinks";
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
          <MobileSearch
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
            query={query}
            setQuery={setQuery}
            setMobileSearchVisible={setMobileSearchVisible}
          />
        )}
      </AnimatePresence>

      <div className="text-white  w-full mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link
            href="/"
            className="md:text-lg italic flex gap-2 items-center justify-center font-black"
          >
            just_icons
          </Link>
        </motion.div>
        {router.pathname === "/" && (
          <SearchMobile setMobileSearchVisible={setMobileSearchVisible} />
        )}
        {router.pathname === "/" && (
          <Search
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
            setQuery={setQuery}
            query={query}
          />
        )}

        <MyLinks />
      </div>

      <AnimatePresence>
        {query.length > 0 && (mobileSearchVisible || windowSize >= 768) && (
          <SearchPanel
            query={query}
            isLoading={isLoading}
            icons={icons}
            selectedOption={selectedOption}
            setCurrentlyOpenName={setCurrentlyOpenName}
            setCurrentlyOpenUrl={setCurrentlyOpenUrl}
            setIsOpen={setIsOpen}
          />
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
