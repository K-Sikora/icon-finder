import React from "react";
import { RadioGroup } from "@headlessui/react";
const RadioSelect = ({ selectedIcons, setSelectedIcons, isLoading }) => {
  return (
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
              checked ? "bg-indigo-950 text-indigo-500" : "border-transparent"
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
            checked ? "bg-indigo-950 text-indigo-500" : "border-transparent"
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
            checked ? "bg-indigo-950 text-indigo-500" : "border-transparent"
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
            checked ? "bg-indigo-950 text-indigo-500" : "border-transparent"
          }  relative px-3 sm:px-7 md:px-10 sm:text-base py-1.5 lg:w-48 lg:h-11  font-bold text-sm lg:text-lg   duration-500 cursor-pointer rounded-[inherit] hover:bg-indigo-950`}
          >
            Outline
          </button>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export default RadioSelect;
