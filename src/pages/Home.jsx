import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import BannerCard from "../components/BannerCard";
import Contact from "../components/contact/Contact";
import Expertise from "../components/Expertise";
import Faq from "../components/Faq";
import Services from "../components/Services";

const Home = () => {
  return (
    <section className="space-y-6">
      <Banner id="home" />
      <BannerCard />
      <Expertise />
      <Services />
      <Faq id="faq" />
      <AboutMe />
      <Contact />
    </section>
  );
};

export default Home;
