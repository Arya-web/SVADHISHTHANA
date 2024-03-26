import React from "react";
import logoBlack from "../../Images/logo512-black.png";
import aboutImg from "../../Images/about.jpg";

const WhyUs = () => {
  return (
    <>
      <div className="font-body py-12 lg:py-16 bg-white" name="whyUs">
        <div className="md:flex px-4 md:px-8 lg:px-10">
          <div className="md:w-[50%]">
            <div className="flex justify-center md:justify-left items-center">
              <div className="text-center md:text-left py-2 md:py-8">
                <p className="font-body tracking-widest font-semibold text-green-600 pb-4 uppercase">
                  Swadhisthana green energies!
                </p>
                <h2 className="text-3xl md:text-3xl lg:text-6xl font-head tracking-wider uppercase">
                  why choose us?
                </h2>
              </div>
            </div>
            <div className="flex">
              <ul className="font-body text-lg md:text-2xl text-zinc-600 text-justify">
                <li
                  className="flex my-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <img
                    src={logoBlack}
                    alt=""
                    className="object-contain h-8 mx-2 md:mx-4 mt-0.5 opacity-70"
                  />
                  Same solar business, same quality, just a new look. we are
                  still Svadhishthana & SCM, but now with a refreshed name and
                  appearance.
                </li>
                <li
                  className="flex my-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  {" "}
                  <img
                    src={logoBlack}
                    alt=""
                    className="object-contain h-8 mx-2 md:mx-4 mt-0.5 opacity-70"
                  />
                  Trusted and local, Svadhishthana & SCM have consistently been
                  at the forefront of solar energy installation and consulting
                  in Odisha.
                </li>
                <li
                  className="flex my-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  {" "}
                  <img
                    src={logoBlack}
                    alt=""
                    className="object-contain h-8 mx-2 md:mx-4 mt-0.5 opacity-70"
                  />
                  We have the experience and team to determine the best options
                  for your project, and then install them with the highest skill
                  and integrity.
                </li>
                <li
                  className="flex my-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  {" "}
                  <img
                    src={logoBlack}
                    alt=""
                    className="object-contain h-8 mx-2 md:mx-4 mt-0.5 opacity-70"
                  />
                  Here in our Entity , we care about the environment and our
                  impacts on it as individuals and a society. we strive to be a
                  part of a better direction.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-[50%]">
            <div className="flex justify-center items-center w-full h-full pt-8 lg:pt-16">
              <img src={aboutImg} alt="" className="object-fill scale-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
