import Link from "next/link";
import { useState } from "react";

import cn from "classnames";
import Dropdown from "./dropdown";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full px-4  lg:pt-10 z-50">
      <div className="absolute right-10 top-5 hidden lg:block">
        <button
          className={`transition duration-500 ease-in-out bg-yellow border-2 border-dark_blue font-space_grotesk_bold text-xs relative px-3 py-1.5 hover:bg-dark_blue transform hover:text-yellow`}
        >
          LOGIN TO 1PORTAL
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-between lg: px-4  mx-auto lg:p-2 md:flex-no-wrap md:px-6 ">
        <div className="flex items-center">
          <img src="/logo.png" className="w-28 h-auto" />
        </div>

        <div className='flex items-center rounded-full h-16 w-16 px-1 py-6 border-2  border-dark_blue lg:hidden'>
          <button
            className="flex items-center rounded-full h-16 w-16 px-3 py-2 text-dark_blue border-2 bg-yellow border-dark_blue lg:hidden"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            <svg
              className="w-8 h-8 m-auto fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <ul
          className={cn(
            "lg:flex flex-col lg:flex-row lg:items-center lg:justify-center text-sm w-full lg:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          <Link href="/">
            <a
              style={{
                textUnderlinePosition: "under",
                textDecorationColor: "#00C9FF",
                textUnderlineOffset: "2px",
                textDecorationThickness: "3px",
              }}
              className="block text-dark_blue font-space_grotesk_semibold text-lg p-5  no-underline hover:underline focus:underline"
            >
              Our network
            </a>
          </Link>
          <Dropdown
            title={"Who we work with"}
            options={["Access", "Cloud", "Portal", "Security"]}
          />
          <Dropdown
            title={"Solutions"}
            options={["Access", "Cloud", "Portal", "Security"]}
          />
          <Dropdown
            title={"News"}
            options={["Access", "Cloud", "Portal", "Security"]}
          />
          <Dropdown
            title={"About us"}
            options={["Access", "Cloud", "Portal", "Security"]}
          />
          <Link href="/">
            <a
              style={{
                textUnderlinePosition: "under",
                textDecorationColor: "#00C9FF",
                textUnderlineOffset: "2px",
                textDecorationThickness: "3px",
              }}
              className="block text-dark_blue font-space_grotesk_semibold text-lg  p-5  no-underline hover:underline focus:underline"
            >
              Contact us
            </a>
          </Link>
        </ul>
      </div>
    </header>
  );
}
