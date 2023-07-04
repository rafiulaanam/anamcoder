import React from "react";
import "../../globals.css";
import Button from "@/app/utils/Button/Button";

const portfolio =[
  {
    name:"CAR RENTAL 🚗",
    description:'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    image_url:'/assets/car.png',
    live_link:{href:"https://car-rental-ten.vercel.app/"},
    github_link:{href:"https://github.com/rafiulaanam"},
    tags:[ 'NextJs','TailWind CSS','DaisyUi'],
    flex:'flex-row-reverse',
    box:"box1"
  },
  {
    name:"DevWave Programmer",
    description:'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    image_url:'/assets/car.png',
    live_link:{href:"https://devwaveprogrammer.vercel.app/"},
    github_link:{href:"https://github.com/rafiulaanam"},
    tags:[ 'NextJs','TailWind CSS','DaisyUi'],
    flex:'!flex-row-reverse',
    box:"box2"
  },
  {
    name:"GYMATE 🏋️",
    description:' A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.',
    image_url:'/assets/car.png',
    live_link:{href:"https://gymate-iota.vercel.app/"},
    github_link:{href:"https://github.com/rafiulaanam"},
    tags:[ 'NextJs','TailWind CSS','DaisyUi'],
    flex:'flex-row-reverse',
    box:"box3"
  },
  {
    name:"RAOUF ECOMMERCE 🛒",
    description:' With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.',
    image_url:'/assets/car.png',
    live_link:{href:"https://minimalist-e-commerce.vercel.app/"},
    github_link:{href:"https://github.com/rafiulaanam"},
    tags:[ 'NextJs','TailWind CSS','DaisyUi'],
    flex:'!flex-row-reverse',
    box:"box4"
  }
]

export default function MyPortfolio() {
  return (
    <>
    {
      
      portfolio.map(item=><div key={item.i} className=" container md:w-[80%] mx-auto mt-16 text-white">
        <div className= {`card  lg:card-side  bg-base-100 shadow-xl lg:${item.flex}`}>
          <div className={`m-5 p-5 lg:w-[50%] rounded-2xl box h-72 md:h-96 ${item.box} `}></div>

          <div className="card-body text-center lg:w-[50%]">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p>
            A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center">
              <div className="flex mb-10 ">
                <div className="badge ml-10 mr-10 badge-primary md:p-3 md:font-bold">
                  NextJS
                </div>
                <div className="badge badge-secondary mr-10 md:p-3 md:font-bold">
                  TailwindCSS
                </div>
                <div className="badge badge-accent mr-10 md:p-3 md:font-bold">
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
      </div>)
    }
      
      
    </>
  );
}
