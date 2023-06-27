import AboutMe from "./Components/AboutMe/AboutMe";
import Banner from "./Components/Banner/Banner";
import ClientReviews from "./Components/ClientReviews/ClientReviews";
import ContactMe from "./Components/ContactMe/ContactMe";
import LatestBlogs from "./Components/LatestBlogs/LatestBlogs";
import MyAllSkills from "./Components/MyAllSkills/MyAllSkills";
import MyResume from "./Components/MyResume/MyResume";
import MyServices from "./Components/MyServices/MyServices";
import MyWorks from "./Components/MyWorks/MyWorks";

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
      {/* <ContactMe/> */}
    </div>
  );
}
