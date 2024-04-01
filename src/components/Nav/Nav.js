import React, { useEffect, useState } from "react";
import "./Nav.css";
import logoBlack from "../../Images/logo512-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { Link as OuterLink } from "react-router-dom";

const Nav = () => {
  const [Nav, setNav] = useState(true);
  const [Dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (!Nav) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "scroll");
    }
  }, [Nav]);

  const toggleHandler = (e) => {
    setNav(() => e);
  };

  const toggleDropDown = (e) => {
    setDropdown(() => e);
  };

  return (
    <>
      <div
        className={`z-50 px-4 md:px-8 lg:px-12 md:flex items-center justify-between w-full bg-white drop-shadow-lg`}
        style={{
          boxShadow: `rgba(0, 0, 0, 0.17) 0px 6px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        }}
      >
        <div
          className={`py-4 md:py-3 flex justify-between items-center h-20 md:h-16 lg:h-20`}
        >
          <div
            className={`lg:h-4/5 flex justify-center items-center h-4/5 cursor-pointer`}
          >
            <img src={logoBlack} alt="logo" className="h-full object-contain" />
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
          className={`md:gap-1 lg:gap-8 !visible md:!flex md:basis-auto font-body md:text-xs lg:text-lg pb-2 ps-0 md:pb-0 md:ps-2 z-50 bg-white h-[92vh] w-screen md:h-auto md:w-auto text-center fixed md:static left-0 md:left-auto md:pt-0 ${
            Nav ? "hidden" : ""
          } ${Dropdown ? "pt-16" : "pt-32"}`}
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded transition-all duration-200 ease-out hover:bg-green-500 hover:text-white bg-green-500 text-white`}
              to="#"
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
              WHY SOLAR?
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out `}
              to="whyUs"
              smooth={true}
              offset={-40}
              onClick={() => toggleHandler(true)}
            >
              WHY US?
            </Link>
          </div>
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
              to="process"
              smooth={true}
              offset={-10}
              onClick={() => toggleHandler(true)}
            >
              THE PROCESS
            </Link>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer group hover:text-green-600 py-2"
            onMouseEnter={() => toggleDropDown(true)}
            onMouseLeave={() => toggleDropDown(false)}
          >
            <div
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
              smooth={true}
              offset={-10}
            >
              PRODUCTS
            </div>
            <div
              className={`md:absolute flex flex-col gap-4 bg-white text-black px-4 py-4 mt-4 md:mt-12 rounded-md opacity-95 uppercase border-2 font-medium border-black-500 ${
                Dropdown ? "" : "hidden"
              }`}
            >
              <div>
                <OuterLink to="/products">SOLAR GUSTIX & OMNI GUSTIX</OuterLink>
              </div>
              <hr className="h-[2px] bg-black-500" />
              <div className="flex justify-center items-center">
                Solar lights{" "}
                <p className="ms-6 text-sm bg-red-500 text-white p-1 px-2 rounded-md">
                  PDF
                </p>
              </div>
            </div>
          </div>
          {/* <div className="cursor-pointer group hover:text-green-600 py-4">
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
          </div> */}
          <div className="cursor-pointer group hover:text-green-600 py-4">
            <Link
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out`}
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
              className={`font-medium p-2 rounded hover:bg-green-500 hover:text-white transition-all duration-200 ease-out `}
              to="contact"
              smooth={true}
              onClick={() => toggleHandler(true)}
            >
              CONTACT
            </Link>
          </div>
          <div className="cursor-pointer group py-4">
            <OuterLink
              className={`font-medium p-3 rounded bg-purple-500 text-white hover:bg-yellow-500 transition-all duration-200 ease-out`}
              to="/products"
              relative="path"
              smooth={true}
              offset={-10}
              onClick={() => toggleHandler(true)}
            >
              FREE QUOTE
            </OuterLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
