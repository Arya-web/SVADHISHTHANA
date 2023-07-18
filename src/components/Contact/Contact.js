import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './Contact.css';
import logo from "../../Images/logo.jpg";

const Contact = () => {
  return (
    <>
      <div className="contact-main font-body" name="contact">
        <div className="lg:flex lg:flex-row pt-8 md:p-12 justify-around">
          <div className="lg:w-1/2 flex flex-row justify-around">
            <div className="w-full md:flex md:flex-row justify-around">
              <div className="px-4">
                <h2 className="text-xl font-semibold">OUR SERVICES</h2>
                <div className="py-2 gap-y-1 flex flex-col font-semibold">
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Service 1</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Service 2</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Service 3</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Service 4</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Service 5</p>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <h2 className="text-xl font-semibold">USEFUL LINKS</h2>
                <div className="py-2 gap-y-1 flex flex-col">
                  <div>
                    <div className="flex gap-2">
                      <span className="scale-75">
                        <FontAwesomeIcon icon={faCaretRight} />
                      </span>
                      <p className="font-medium">Who We Are</p>
                    </div>
                    <p className="w-44 md:w-52 text-justify text-sm px-2">
                      Lorem ipsum dolor sit amet, consec tetur adipi sicing
                      elit. Libero harum natus vel it magnam. Op tio conse cte
                      tur disti nctio tempo ribus animi rerum placeat, pro
                      vident sed at sunt architecto!
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p className="font-medium">Services</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p className="font-medium">Clients</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="scale-75">
                      <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p className="font-medium">Contact Us</p>
                  </div>
                  <div className="flex justify-around px-2 pt-2">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="scale-125 text-blue-800"
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="scale-125 text-blue-600"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="scale-125 text-blue-400"
                    />
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="scale-125 text-red-600 "
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="scale-125 insta"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-4 w-80">
              <h2 className="text-xl font-semibold">CONTACT US</h2>
              <p className="pt-2">Office : 0222-548795</p>
              <p className="pt-1">Mobile : +91-7894561230</p>
              <div className="pt-8">
                <h2 className="text-xl font-semibold">WRITE TO US</h2>
                <p className="pt-2 font-bold">some@something.in</p>
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
        <div className="pt-8 md:pt-0 pb-8">
          <div className="flex justify-center h-14">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-center pt-3 text-slate-500 text-sm text-center">
            <h2>
              Copyright &#169; 2019-2023 SVADHISHTHANA TECHNOLOGIES Pvt. Ltd |
              All rights reserved.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
  