import React from "react";
import Certification from "../Certification";
import Education from "../Education";
import Title from "../../utils/Title/Title";

const MyResume = () => {
  return (
    <div id="Resume">
      <Title title="resume" mytitle="my resume" />
      <div className="md:flex">
        {" "}
        <Education />
        <Certification />
      </div>
    </div>
  );
};

export default MyResume;
