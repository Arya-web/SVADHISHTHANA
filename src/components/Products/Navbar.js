import React from "react";
import logoBlack from "../../Images/logo512-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link as OuterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className={`z-50 px-4 md:px-8 lg:px-20 md:flex items-center w-full bg-white drop-shadow-lg`}
        style={{
          boxShadow: `rgba(0, 0, 0, 0.17) 0px 6px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        }}
      >
        <div
          className={`md:py-3 flex justify-between items-center h-20 md:h-16 lg:h-20`}
        >
          <div
            className={`lg:h-4/5 flex justify-center items-center h-4/5 cursor-pointer`}
          >
            <OuterLink to="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="scale-150 text-zinc-800 me-8"
              />
            </OuterLink>
            <img
              src={logoBlack}
              alt="logo"
              className="h-3/5 md:h-full object-contain"
            />
            <p className="text-2xl md:text-lg lg:text-2xl font-semibold px-2 font-logo tracking-widest">
              SVADHISHTHANA
            </p>
          </div>
        </div>
        <div className="w-full hidden md:flex justify-center">
          <p className="font-body text-3xl tracking-widest uppercase">
            Our Products
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
