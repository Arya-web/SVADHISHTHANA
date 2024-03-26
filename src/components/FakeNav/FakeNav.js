import React, { useCallback, useEffect, useState } from "react";
import "./FakeNav.css";
import logoBlack from "../../Images/logo512-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import GetScrollY from "../../Customhooks/GetScrollY";
import GetDivY from "../../Customhooks/GetDivY";
import { Link as OuterLink } from "react-router-dom";

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

  const toggleHandler = (e) => {
    setNav(() => e);
  };

  return (
    <>
      <div
        className={`fixed bg-white top-0 w-full z-50 ${
          NavScroller ? "" : "hidden"
        }`}
        style={{
          boxShadow: `rgba(0, 0, 0, 0.17) 0px 12px 12px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        }}
      >
        <div
          className={`z-10 px-4 md:px-8 lg:px-24 md:flex items-center justify-between w-full`}
        >
          <div
            className={`py-4 md:py-3 flex justify-between items-center h-16 md:h-12 lg:h-20`}
          >
            <div
              className={`lg:h-4/5 flex justify-center items-center h-full cursor-pointer`}
              onClick={() => {
                handleToTop();
                toggleHandler(true);
              }}
              smooth={true}
            >
              <img
                src={logoBlack}
                alt="logo"
                className="h-full object-contain"
              />
              <p className="text-xl md:text-lg lg:text-2xl font-semibold px-2 font-logo tracking-widest">
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
            className={`md:gap-1 lg:gap-10 !visible md:!flex md:basis-auto font-body md:text-xs lg:text-lg pb-2 ps-0 md:pb-0 md:ps-2 h-[92vh] z-50 bg-white w-screen md:h-auto md:w-auto text-center fixed md:static left-0 md:left-auto pt-32 md:pt-0 ${
              Nav ? "hidden" : ""
            }`}
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded transition-all duration-200 ease-out hover:bg-green-500 hover:text-white ${
                  DivName === "home" ? "bg-green-500 text-white" : ""
                }`}
                onClick={() => {
                  handleToTop();
                  toggleHandler(true);
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
                onClick={() => toggleHandler(true)}
              >
                WHY SOLAR?
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "whyUs" ? "bg-green-500 text-white" : ""
                }`}
                to="whyUs"
                smooth={true}
                offset={-20}
                onClick={() => toggleHandler(true)}
              >
                WHY US?
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "process" ? "bg-green-500 text-white" : ""
                }`}
                to="process"
                smooth={true}
                offset={-10}
                onClick={() => toggleHandler(true)}
              >
                THE PROCESS
              </Link>
            </div>
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <OuterLink
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
                to="/products"
                relative="path"
                smooth={true}
                offset={-10}
                onClick={() => toggleHandler(true)}
              >
                PRODUCTS
              </OuterLink>
            </div>
            {/* <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "solution" ? "bg-green-500 text-white" : ""
                }`}
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
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "plan" ? "bg-green-500 text-white" : ""
                }`}
                to="plan"
                smooth={true}
                offset={-60}
                onClick={() => toggleHandler(true)}
              >
                PLAN
              </Link>
            </div> */}
            <div className="cursor-pointer group hover:text-green-600 py-4">
              <Link
                className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                  DivName === "team" ? "bg-green-500 text-white" : ""
                }`}
                to="team"
                smooth={true}
                offset={-60}
                onClick={() => toggleHandler(true)}
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
                onClick={() => toggleHandler(true)}
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
