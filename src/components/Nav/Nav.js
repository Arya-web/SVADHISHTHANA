import React, { useState } from "react";
import "./Nav.css";
import logo from "../../Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Nav = () => {
  const [Nav, setNav] = useState(true);

  const toggleHandler = () => {
    console.log(Nav);
    setNav((Nav) => !Nav);
  };

  return (
    <>
      <div className="px-4 md:px-12 lg:px-24 md:flex items-center justify-between">
        <div className="py-4 md:py-3 flex justify-between items-center h-20 md:h-16 lg:h-20">
          <div className="h-full flex justify-center items-center">
            <img src={logo} alt="logo" className="h-full object-contain" />
            <p className="text-green-600 text-xl md:text-lg lg:text-xl font-medium px-2   font-body tracking-wide">
              SVADHISHTHANA
            </p>
          </div>
          <button
            className="block w-10 scale-110 border-2 rounded-full py-1 bg-transparent px-2 text-neutral-700 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 md:hidden"
            type="button"
            onClick={toggleHandler}
          >
            {Nav && <FontAwesomeIcon icon={faBars} />}
            {!Nav && <FontAwesomeIcon icon={faXmark} />}
          </button>
        </div>
        <div
          className={`md:gap-8 lg:gap-16 lg:me-8 !visible md:!flex md:basis-auto font-body pb-2 ps-2 md:pb-0 md:ps-0 ${
            Nav ? "hidden" : ""
          }`}
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className="font-medium bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out"
              to="home"
              smooth={true}
            >
              HOME
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className="font-medium bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out"
              to="about"
              smooth={true}
              offset={-150}
            >
              ABOUT
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className="font-medium bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out"
              to="services"
              smooth={true}
              offset={-50}
            >
              SERVICES
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className="font-medium bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out"
              to="contact"
              smooth={true}
            >
              CONTACT
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <p className="font-medium bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
              FAQ
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
