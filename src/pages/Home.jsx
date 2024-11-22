import Banner from "../components/Banner";
import Contact from "../components/contact/Contact";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <section className="space-y-6">
      <Banner id="home" />
      <Faq id="faq" />
      <Contact />
    </section>
  );
};

export default Home;
