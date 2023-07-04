import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import ClientReviews from "./components/ClientReviews/ClientReviews";
import ContactMe from "./components/ContactMe/ContactMe";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
import MyAllSkills from "./components/MyAllSkills/MyAllSkills";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
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
      {/* <MyPortfolio/> */}
      <ClientReviews/>
      <LatestBlogs/>
      <ContactMe/>
    </div>
  );
}
