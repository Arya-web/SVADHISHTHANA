import React, { useCallback, useEffect, useState } from "react";
import "./Nav.css";
import logoBlack from "../../Images/logo512-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import GetScrollY from "../../Customhooks/GetScrollY";
import GetDivY from "../../Customhooks/GetDivY";

const Nav = () => {
  return (
    <>
      <div
        className={`z-10 px-4 md:px-8 lg:px-24 md:flex items-center justify-between w-full`}
      >
        <div
          className={`py-4 md:py-3 flex justify-between items-center  ${
            NavScroller ? "h-16 md:h-12 lg:h-16" : "h-20 md:h-16 lg:h-20"
          }`}
        >
          <div
            className={`lg:h-4/5 flex justify-center items-center ${
              NavScroller ? "h-full" : "h-4/5"
            }`}
          >
            <img src={logoBlack} alt="logo" className="h-full object-contain" />
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
          className={`md:gap-4 lg:gap-10 lg:me-8 !visible md:!flex md:basis-auto font-body md:text-sm lg:text-base pb-2 ps-2 md:pb-0 md:ps-2 ${
            Nav ? "hidden" : ""
          }`}
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded transition-all duration-200 ease-out hover:bg-green-500 hover:text-white ${
                DivName === "home" ? "bg-green-500 text-white" : ""
              }`}
              to="home"
              smooth={true}
            >
              HOME
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "about" ? "bg-green-500 text-white" : ""
              }`}
              to="about"
              smooth={true}
              offset={-60}
            >
              ABOUT
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "problems" ? "bg-green-500 text-white" : ""
              }`}
              to="problems"
              smooth={true}
              offset={-40}
            >
              PROBLEMS
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "mission" ? "bg-green-500 text-white" : ""
              }`}
              to="mission"
              smooth={true}
              offset={-150}
            >
              MISSION
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "solution" ? "bg-green-500 text-white" : ""
              }`}
              to="solution"
              smooth={true}
              offset={-100}
            >
              SOLUTION
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "plan" ? "bg-green-500 text-white" : ""
              }`}
              to="plan"
              smooth={true}
              offset={-60}
            >
              PLAN
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "team" ? "bg-green-500 text-white" : ""
              }`}
              to="team"
              smooth={true}
              offset={-80}
            >
              TEAM
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out ${
                DivName === "contact" ? "bg-green-500 text-white" : ""
              }`}
              to="contact"
              smooth={true}
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
