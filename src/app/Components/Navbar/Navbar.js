"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";
import Button from "../../utils/Button/Button";
// import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [glossy, setGlass] = useState(false);

  // const scrollValue = document.documentElement.scrollTop;
  let scrollValue

  const changeScroll = () => {
    if (scrollValue > 50) {
      setGlass(true);
    } else {
      setGlass(false);
    }
  };
  // window.addEventListener("scroll", changeScroll);

  const menuItems = (
    <>
      <li>
        <Link
          to="Header"
          spy={true}
          smooth={true}
          offset={-130}
          duration={1000}
          className="mr-3 hover-underline-animation  font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">01.</span> HOME
        </Link>
      </li>
      <li>
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">02.</span> ABOUT
        </Link>
      </li>
      <li>
        <Link
          to="Resume"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">03.</span> RESUME
        </Link>
      </li>
      <li>
        <Link
          to="Work"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">04.</span> WORK
        </Link>
      </li>
      <li>
        <Link
          to="Blog"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">05.</span> BLOG
        </Link>
      </li>
      <li>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">06.</span> CONTACT
        </Link>
      </li>
    </>
  );

  return (
    <div className={glossy ? "glossy " : "yy"}>
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="/" className="ml-3 text-5xl font-bold text-[#72E2AE]">
            ANAM.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://www.linkedin.com/in/rafiulaanam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Hire me" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
