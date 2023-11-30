import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logo from "../../Images/logo512-black.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="contact-main font-body" name="contact">
        <div className="lg:flex lg:flex-row pt-8 md:p-12 justify-around">
          <div className="lg:w-1/2 flex flex-row justify-around">
            <div className="w-full md:flex md:flex-row justify-around">
              <div className="px-4">
                <h2 className="text-xl font-semibold">OUR SERVICES</h2>
                <div className="py-2 gap-y-1 flex flex-col font-normal">
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Energy Consultancy</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Customised hybrid energy harvesters</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Installation and maintenance</p>
                  </div>
                </div>
              </div>
              <div className="px-4 md:w-80">
                <h2 className="text-xl font-semibold">USEFUL LINKS</h2>
                <div className="py-2 gap-y-1 flex flex-col">
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="home" smooth={true} offset={0}>
                        Home
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="about" smooth={true} offset={-60}>
                        About
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="problems" smooth={true} offset={-40}>
                        Problems
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="mission" smooth={true} offset={-150}>
                        Mission
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="solution" smooth={true} offset={-100}>
                        Solution
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="plan" smooth={true} offset={-60}>
                        Plan
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCircle} className="scale-50" />
                    </span>
                    <p className="font-medium cursor-pointer">
                      <Link to="team" smooth={true} offset={-80}>
                        Team
                      </Link>
                    </p>
                  </div>

                  <div className="flex justify-between px-2 pt-2">
                    <a
                      className="hover:opacity-50 hover:scale-90"
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100094992013454&mibextid=ZbWKwL"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="scale-150 text-blue-800"
                      />
                    </a>
                    <a
                      className="hover:opacity-50 hover:scale-90"
                      target="_blank"
                      href="https://www.linkedin.com/company/sgreenenergies-private-limited/"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="scale-150 text-blue-600"
                      />
                    </a>
                    <a
                      className="hover:opacity-50 hover:scale-90"
                      target="_blank"
                      href="https://twitter.com/SvadhishthanaGE"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="scale-150 text-blue-400"
                      />
                    </a>
                    <a
                      className="hover:opacity-50 hover:scale-90"
                      target="_blank"
                      href="https://www.youtube.com/@SvadhishthanaGreenEnergies/"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="scale-150 text-red-600"
                      />
                    </a>
                    <a
                      className="hover:opacity-50 hover:scale-90"
                      target="_blank"
                      href="https://www.instagram.com/svadhishthanage"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="scale-150 insta"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-4 w-80">
              <h2 className="text-xl font-semibold">CONTACT US</h2>
              <p className="pt-2">Office : +91 90787 83790</p>
              <p className="pt-1">Mobile : +91 90787 83790</p>
              <div className="pt-8">
                <h2 className="text-xl font-semibold">WRITE TO US</h2>
                <p className="pt-2 font-bold text-blue-800 underline text-xs md:text-sm pr-2 md:pr-0">
                  <a href="mailto:contact@svadhishthanagreen.com">
                    contact@svadhishthanagreen.com
                  </a>
                </p>
                <p className="pt-2">K3B 100, Kalinga Nagar</p>
                <p>Ghatikia, Bhubaneswar</p>
                <p>Near OUTR University</p>
                <p>Pincode - 751003</p>
              </div>
            </div>
          </div>
          <div className="px-4 pt-4 md:pt-0">
            <h2 className="text-xl font-semibold">GOOGLE MAP</h2>
            <div className="py-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.2086138437361!2d85.77395676729189!3d20.27608561024285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a73d7333f37b%3A0xa51562b4d93b9b84!2sK3B%20100%2CKalinga%20Nagar%2C%20Ghatikia%2C%20Bhubaneswar!5e1!3m2!1sen!2sin!4v1687500992152!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location"
                className="h-[200px] w-full md:h-[280px] md:w-full lg:h-[320px] lg:w-[540px]"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="pt-8 md:pt-0 pb-8 opacity-50">
          <div className="flex justify-center h-14">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-center pt-3 text-sm text-center px-4 font-semibold">
            <h2>
              Copyright &#169; 2019-2023 SVADHISHTHANA GREEN ENERGIES Pvt.
              Ltd&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All rights reserved.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
