'use client'

import AboutMe from "./components/AboutMe/AboutMe.js";
import Banner from "./components/Banner/Banner";
import ClientReviews from "./components/ClientReviews/ClientReviews";
import ContactMe from "./components/ContactMe/ContactMe";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
import MyAllSkills from "./components/MyAllSkills/MyAllSkills";
import MyResume from "./components/MyResume/MyResume";
import MyServices from "./components/MyServices/MyServices";
import MyWorks from "./components/MyWorks/MyWorks";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <MyAllSkills />
      <MyServices/>
      <MyResume/>
      <MyWorks/>
      <ClientReviews/>
      <LatestBlogs/>
      <ContactMe/>
    </div>
  );
}
