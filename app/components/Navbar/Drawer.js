import React from "react";
import { GrClose } from 'react-icons/gr';
import Image from "next/image";

const Drawer = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="p-4 flex items-center">
          <a href="/" className="ml-3 text-4xl md:text-5xl font-bold text-[#72E2AE]">
            ANAM.
          </a>
            <GrClose
              className="block h-6 w-6"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
