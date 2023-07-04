import React from "react";
import "../../globals.css";
import Button from "@/app/utils/Button/Button";

export default function MyPortfolio() {
  return (
    <>
      <div className=" w-[80%] mx-auto mt-16 text-white">
        <div className="card  lg:card-side bg-base-100 shadow-xl">
          <div className="m-5 p-5 md:w-[50%] rounded-2xl box box1 h-72 md:h-96 "></div>

          <div className="card-body text-center md:w-[50%]">
            <h2 className="text-2xl font-bold">CAR RENTAL 🚗</h2>
            <p>
            A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center">
              <div className="flex mb-10 ">
                <div className="badge ml-10 mr-10 badge-primary p-3 font-bold">
                  Next JS
                </div>
                <div className="badge badge-secondary mr-10 p-3 font-bold">
                  Tailwind CSS
                </div>
                <div className="badge badge-accent mr-10 p-3 font-bold">
                  DaisyUI
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/rafiulaanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Code" img="/assets/github.svg" />
              </a>
              <a
                href="https://car-rental-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-5">
                  <Button text="Live demo" img="/assets/link.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto mt-16">
        <div className="card  lg:card-side bg-base-100 shadow-xl">
          <div className="card-body text-center md:w-[50%] text-white">
            <h2 className="text-2xl font-bold">DevWave Programmer</h2>
            <p>
            A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center">
              <div className="flex mb-10 ">
                <div className="badge ml-10 mr-10 badge-primary p-3 font-bold">
                  Next JS
                </div>
                <div className="badge badge-secondary mr-10 p-3 font-bold">
                  Tailwind CSS
                </div>
                <div className="badge badge-accent mr-10 p-3 font-bold">
                  DaisyUI
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/rafiulaanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Code" img="/assets/github.svg" />
              </a>
              <a
                href="https://devwaveprogrammer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-5">
                  <Button text="Live demo" img="/assets/link.svg" />
                </span>
              </a>
            </div>
          </div>
          <div className="m-5 p-5 md:w-[50%] rounded-2xl box box2 h-72 md:h-96 "></div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto mt-16 text-white">
        <div className="card  lg:card-side bg-base-100 shadow-xl">
          <div className="m-5 p-5 md:w-[50%] rounded-2xl box box3 h-72 md:h-96 "></div>

          <div className="card-body text-center md:w-[50%]">
            <h2 className="text-2xl font-bold">GYMATE 🏋️</h2>
            <p>
            A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.
            </p>
            <div className="flex justify-center">
              <div className="flex mb-10 ">
                <div className="badge ml-10 mr-10 badge-primary p-3 font-bold">
                  Next JS
                </div>
                <div className="badge badge-secondary mr-10 p-3 font-bold">
                  Tailwind CSS
                </div>
                <div className="badge badge-accent mr-10 p-3 font-bold">
                  DaisyUI
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/rafiulaanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Code" img="/assets/github.svg" />
              </a>
              <a
                href="https://coindom-crypto-search.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-5">
                  <Button text="Live demo" img="/assets/link.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto mt-16">
        <div className="card  lg:card-side bg-base-100 shadow-xl">
          <div className="card-body text-center md:w-[50%] text-white">
            <h2 className="text-2xl font-bold">RAOUF ECOMMERCE 🛒</h2>
            <p>
            With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
            </p>
            <div className="flex justify-center">
              <div className="flex mb-10 ">
                <div className="badge ml-10 mr-10 badge-primary p-3 font-bold">
                  Next JS
                </div>
                <div className="badge badge-secondary mr-10 p-3 font-bold">
                  Tailwind CSS
                </div>
                <div className="badge badge-accent mr-10 p-3 font-bold">
                  DaisyUI
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/rafiulaanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Code" img="/assets/github.svg" />
              </a>
              <a
                href="https://minimalist-e-commerce.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-5">
                  <Button text="Live demo" img="/assets/link.svg" />
                </span>
              </a>
            </div>
          </div>
          <div className="m-5 p-5 md:w-[50%] rounded-2xl box box4 h-72 md:h-96 "></div>
        </div>
      </div>
    </>
  );
}
