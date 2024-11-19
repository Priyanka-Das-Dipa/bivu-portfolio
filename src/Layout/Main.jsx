import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Main = () => {
  return (
    <>
    <div className=" min-h-screen max-w-[1200px] mx-auto">
      <div className="container">
        <Navbar />
        <Outlet></Outlet>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Main;
