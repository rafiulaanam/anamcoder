"use client";
import Image from "next/image";
import React from "react";

const SkillIcon = ({ img }) => {
  return (
    <div>
      <div className="avatar">
        <div className="w-16 md:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image alt="" src={img} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
