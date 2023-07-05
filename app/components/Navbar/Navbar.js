"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa';

import "./Navbar.css";
import Button from "../../utils/Button/Button";
import Drawer from "./Drawer";
import DrawerData from "./DrawerData";
// import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [glossy, setGlass] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
const menu = [
  {
    id:1,
    title:"HOME",
    to: "Home"

  },
  {
    id:2,
    title:"ABOUT",
     to: "About"

  },
  {
    id:3,
    title:"RESUME",
     to: "Resume"

  },
  {
    id:4,
    title:"WORK",
     to: "Work"

  },
  {
    id:5,
    title:"BLOG",
     to: "Blog"

  },
  {
    id:6,
    title:"CONTACT",
     to: "Contact"

  },
]


  return (
    <div className={glossy ? "glossy " : "yy"}>
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="">
          
            <div className="block md:hidden">
              <FaBars
                className="block h-8 w-8"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <DrawerData/>
            </Drawer>
            </div>
            
          </div>
          <a href="/" className="ml-3 text-4xl md:text-5xl font-bold text-[#72E2AE]">
            ANAM.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              menu.map(item=><li key={item.i}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={1000}
                  className="mr-3 hover-underline-animation font-medium text-sm text-white"
                >
                  <span className="text-[#72E2AE] ">0{item.id}.</span> {item.title}
                </Link>
              </li>)
            }
            
            </ul>
        </div>
        <div className="navbar-end items-center">
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
