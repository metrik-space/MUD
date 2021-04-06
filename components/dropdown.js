import React from "react";
import { createPopper } from "@popperjs/core";
import {FiChevronDown} from 'react-icons/fi/index';

const Dropdown = ({ title, options }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                  (dropdownPopoverShow ? 'border-t border-l border-r border-black rounded-t-lg shadow-lg' : '') +
                "flex text-dark_blue font-space_grotesk_semibold text-lg p-5 hover: underline"
              }
              type="button"
              ref={btnDropdownRef}
              onMouseOver={() => openDropdownPopover()}
              onMouseLeave={() => closeDropdownPopover()}
            >
              {title}
              {/* <FiChevronDown /> */}
            </button>
            <div
              ref={popoverDropdownRef}
              onMouseOver={() => openDropdownPopover()}
              onMouseLeave={() => closeDropdownPopover()}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base w-full z-50 border-l border-r border-b border-black bg-white float-left py-2 list-none text-left rounded-b-lg shadow-lg"
              }
            >
              {options.map((option, key) => {
                return (
                  <a
                  style={{
                    textUnderlinePosition: "under",
                    textDecorationColor: "#00C9FF",
                    textUnderlineOffset: "2px",
                    textDecorationThickness: "3px",
                  }}
                    key={key}
                    href="/"
                    className={
                      "text-base py-2 px-4 text-dark_blue font-space_grotesk_regular block w-full whitespace-nowrap bg-transparent no-underline hover:underline focus:underline "
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    {option}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
