"use client"
import React from 'react';
import './Button.css'
import Image from 'next/image';


const Button = ({text,img}) => {
    return (
        <>
        <button className="inline-flex items-center btnn black bg-[#72E2AE] border-0 py-3 px-5 focus:outline-none hover:bg-white  rounded font-medium text-sm  text-black mt-4 md:mt-0">
          {text}
          {img&&
           <Image src={img} alt="github" width={20} height={20} className='ml-2'/>
          }
        </button>
      </>
    );
};

export default Button;