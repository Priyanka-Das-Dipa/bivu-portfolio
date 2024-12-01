import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "#home"; // Default section

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="navbar">
    //   <div className="navbar-start">
    //     {/* medium device icon */}
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //       >
    //         <li>
    //           <a>Item 1</a>
    //         </li>
    //         <li>
    //           <a>Parent</a>
    //           <ul className="p-2">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a>Item 3</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <p className=" text-xl">
    //       <span className="text-2xl text-[#181818] font-bold ">Bivuti </span>
    //       <br />
    //       <span className="text-2xl bg-gradient-to-r from-[#6a0dad] to-[#3951f2] bg-clip-text text-transparent font-bold pl-5 -pt-5">
    //         Vussion
    //       </span>
    //     </p>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="flex gap-10 menu-horizontal px-1 text-[#181818]">
    //       <li className="relative group">
    //         <NavLink
    //           to="/#home"
    //           className={({ isActive }) =>
    //             isActive
    //               ? "font-medium text-blue-500"
    //               : "font-medium text-[#181818]"
    //           }
    //         >
    //           Home
    //         </NavLink>
    //         {/* <a href="#banner" className="font-medium">
    //           Home
    //         </a> */}
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //       <li className="relative group">
    //         <a className="font-medium">About</a>
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //       <li className="relative group">
    //         <a className="font-medium">Services</a>
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //       <li className="relative group">
    //         <a className="font-medium">Reviews</a>
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //       <li className="relative group">
    //         <a className="font-medium">Portfolio</a>
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //       <li className="relative group">
    //         <a className="font-medium">Pricing</a>
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //       <li className="relative group">
    //         <NavLink
    //           to="/#faq"
    //           className={({ isActive }) =>
    //             isActive
    //               ? "font-medium text-blue-500"
    //               : "font-medium text-[#181818]"
    //           }
    //         >
    //           FAQ
    //         </NavLink>
    //         <span className="absolute bottom-[-3px] left-0 w-0 h-1 bg-primary-gradient transition-all duration-300 group-hover:w-full"></span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <button className="bg-primary-gradient px-6 py-2 rounded-lg text-white font-medium text-base">
    //       Contact me
    //     </button>
    //   </div>
    // </div>
    <div className="bg-[#F5F4FB] border-b-2">

    <section className="max-w-[1200px] mx-auto ">
      <div className="navbar">
        <div className="navbar-start">
          <p className=" text-xl">
            <span className="text-2xl text-[#181818] font-bold ">Bivuti </span>
            <br />
            <span className="text-2xl bg-gradient-to-r from-[#6a0dad] to-[#3951f2] bg-clip-text text-transparent font-bold pl-5 -pt-5">
              Vussion
            </span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 menu-horizontal px-1 text-[#181818]">
            {[
              { title: "Home", path: "" },
              { title: "About", path: "#about" },
              { title: "Services", path: "#services" },
              { title: "Reviews", path: "#reviews" },
              { title: "Portfolio", path: "#portfolio" },
              { title: "Pricing", path: "price" },
              { title: "FAQ", path: "#faq" },
              { title: "Contact", path: "#contact" },
            ].map((link, index) => (
              <li className="relative group" key={index}>
                <NavLink
                  to={link.path}
                  className={`font-medium ${
                    activeSection === link.path
                      ? "text-blue-500"
                      : "text-[#181818]"
                  }`}
                  onClick={() => setActiveSection(link.path)}
                >
                  {link.title}
                </NavLink>
                <span
                  className={`absolute bottom-[-3px] left-0 h-1 bg-primary-gradient transition-all duration-300 ${
                    activeSection === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <button className="bg-primary-gradient px-6 py-2 rounded-lg text-white font-medium text-base">
            Contact me
          </button>
        </div> */}
      </div>
    </section>
    </div>
  );
};

export default Navbar;
