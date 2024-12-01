import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/contact/Contact";
const Main = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Navbar />
          <Outlet></Outlet>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
