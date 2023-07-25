import React, { useEffect, useState } from "react";
import "./Nav.css";
import logoBlack from "../../Images/logo512-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Nav = () => {
  const [Nav, setNav] = useState(true);

  useEffect(() => {
    if (!Nav) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "scroll");
    }
  }, [Nav]);

  const toggleHandler = (e) => {
    setNav(() => e);
  };
  return (
    <>
      <div
        className={`z-10 px-4 md:px-8 lg:px-24 md:flex items-center justify-between w-full`}
      >
        <div
          className={`py-4 md:py-3 flex justify-between items-center   h-20 md:h-16 lg:h-20`}
        >
          <div className={`lg:h-4/5 flex justify-center items-center h-4/5`}>
            <img src={logoBlack} alt="logo" className="h-full object-contain" />
            <p className="text-xl md:text-lg lg:text-xl font-semibold px-2 font-logo tracking-widest">
              SVADHISHTHANA
            </p>
          </div>
          {Nav && (
            <button
              className="block w-10 scale-110 border-2 rounded-full py-1 bg-transparent px-2 text-neutral-700 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 md:hidden"
              type="button"
              onClick={() => toggleHandler(false)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
          {!Nav && (
            <button
              className="block w-10 scale-110 border-2 rounded-full py-1 bg-transparent px-2 text-neutral-700 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 md:hidden"
              type="button"
              onClick={() => toggleHandler(true)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
        <div
          className={`md:gap-1 lg:gap-10 lg:me-8 !visible md:!flex md:basis-auto font-body md:text-xs lg:text-base pb-2 ps-0 md:pb-0 md:ps-2 z-50 bg-white h-[92vh] w-screen md:h-auto md:w-auto text-center fixed md:static left-0 md:left-auto pt-32 md:pt-0 ${
            Nav ? "hidden" : ""
          }`}
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded transition-all duration-200 ease-out hover:bg-green-500 hover:text-white bg-green-500 text-white`}
              to="home"
              smooth={true}
              onClick={() => toggleHandler(true)}
            >
              HOME
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out `}
              to="about"
              smooth={true}
              offset={-60}
              onClick={() => toggleHandler(true)}
            >
              ABOUT
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out `}
              to="problems"
              smooth={true}
              offset={-40}
              onClick={() => toggleHandler(true)}
            >
              PROBLEMS
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
              to="mission"
              smooth={true}
              offset={-150}
              onClick={() => toggleHandler(true)}
            >
              MISSION
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out `}
              to="solution"
              smooth={true}
              offset={-100}
              onClick={() => toggleHandler(true)}
            >
              SOLUTION
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
              to="plan"
              smooth={true}
              offset={-60}
              onClick={() => toggleHandler(true)}
            >
              PLAN
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
              to="team"
              smooth={true}
              offset={-80}
              onClick={() => toggleHandler(true)}
            >
              TEAM
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out `}
              to="contact"
              smooth={true}
              onClick={() => toggleHandler(true)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
