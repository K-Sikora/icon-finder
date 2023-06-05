import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
const MobileSearch = ({
  selectedOption,
  setSelectedOption,
  options,
  query,
  setQuery,
  setMobileSearchVisible,
}) => {
  const router = useRouter();
  return (
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
  );
};

export default MobileSearch;
