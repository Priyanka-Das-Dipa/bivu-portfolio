import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Main = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Navbar />
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
