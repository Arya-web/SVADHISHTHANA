import React, { useCallback, useEffect, useState } from "react";
import "./FakeNav.css";
import logoBlack from "../../Images/logo512-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import GetScrollY from "../../Customhooks/GetScrollY";
import GetDivY from "../../Customhooks/GetDivY";

const FakeNav = () => {
  const [Nav, setNav] = useState(true);
  const [NavScroller, setNavScroller] = useState(false);
  const scrollPosition = GetScrollY();
  const DivName = GetDivY();

  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;

  const NavScrollHandler = useCallback(() => {
    scrollPosition > window.innerHeight - 200
      ? setNavScroller(true)
      : setNavScroller(false);
  }, [scrollPosition]);

  const handleToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (!Nav) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "scroll");
    }
  }, [Nav]);

  useEffect(() => {
    NavScrollHandler();
  }, [NavScrollHandler]);

  const toggleHandler = () => {
    console.log("triggered");
    setNav((Nav) => !Nav);
  };

  return (
    <>
      <div
        className={`fixed bg-white top-0 w-full z-50 shadow-lg ${
          NavScroller ? "" : "hidden"
        }`}
      >
        <div
          className={`z-10 px-4 md:px-8 lg:px-24 md:flex items-center justify-between w-full`}
        >
          <div
            className={`py-4 md:py-3 flex justify-between items-center h-16 md:h-12 lg:h-16`}
          >
            <div className={`lg:h-4/5 flex justify-center items-center h-full`}>
              <img
                src={logoBlack}
                alt="logo"
                className="h-full object-contain"
              />
              <p className="text-xl md:text-lg lg:text-xl font-semibold px-2 font-logo tracking-widest">
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
            className={`md:gap-1 lg:gap-10 lg:me-8 !visible md:!flex md:basis-auto font-body md:text-xs lg:text-base pb-2 ps-0 md:pb-0 md:ps-2 h-[92vh] z-50 bg-white w-screen md:h-auto md:w-auto text-center fixed md:static left-0 md:left-auto pt-32 ${
              Nav ? "hidden" : ""
            }`}
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <div
              className="cursor-pointer group hover:text-green-600 py-4"
              onClick={toggleHandler}
            >
              <Link
                className={`font-medium p-2 rounded transition-all duration-200 ease-out hover:bg-green-500 hover:text-white ${
                  DivName === "home" ? "bg-green-500 text-white" : ""
                }`}
                onClick={() => {
                  handleToTop();
                  toggleHandler();
                }}
                smooth={true}
              >
                HOME
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "about" ? "bg-green-500 text-white" : ""
                }`}
                to="about"
                smooth={true}
                offset={-60}
                onClick={toggleHandler}
              >
                ABOUT
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "problems" ? "bg-green-500 text-white" : ""
                }`}
                to="problems"
                smooth={true}
                offset={-40}
                onClick={toggleHandler}
              >
                PROBLEMS
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "mission" ? "bg-green-500 text-white" : ""
                }`}
                to="mission"
                smooth={true}
                offset={-150}
                onClick={toggleHandler}
              >
                MISSION
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "solution" ? "bg-green-500 text-white" : ""
                }`}
                to="solution"
                smooth={true}
                offset={-100}
                onClick={toggleHandler}
              >
                SOLUTION
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "plan" ? "bg-green-500 text-white" : ""
                }`}
                to="plan"
                smooth={true}
                offset={-60}
                onClick={toggleHandler}
              >
                PLAN
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "team" ? "bg-green-500 text-white" : ""
                }`}
                to="team"
                smooth={true}
                offset={-80}
                onClick={toggleHandler}
              >
                TEAM
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "contact" ? "bg-green-500 text-white" : ""
                }`}
                to="contact"
                smooth={true}
                onClick={toggleHandler}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FakeNav;
