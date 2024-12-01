import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import BannerCard from "../components/BannerCard";
import Expertise from "../components/Expertise";
import Faq from "../components/Faq";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

const Home = () => {
  return (
    <section className="space-y-6">
      <Banner id="home" />
      <BannerCard />
      <Expertise />
      <Services />
      <Faq id="faq" />
      <Portfolio />
      <AboutMe />
      {/* <Contact /> */}
    </section>
  );
};

export default Home;
