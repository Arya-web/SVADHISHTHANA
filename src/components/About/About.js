import React from "react";
import './About.css';
import about from "../../Images/about.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col pt-10 md:pt-0 md:flex md:flex-row lg:px-20 bg-[#E8FBF5] about-main" name="about">
        <div className="order-1 md:order-2 md:w-[50%]">
          <div className="flex justify-center items-center h-full">
            <div className="flex">
              <div className="px-8 md:px-8 lg:px-20">
                <div className="">
                  <p className="font-body tracking-wider font-semibold text-green-800 py-2">ABOUT US</p>
                  <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider">
                    We are Amazing
                  </h2>
                  {/* <h2 className="font-bold text-lg md:text-lg lg:text-3xl pt-1">
                    <span className="text-green-600">&</span> OMET LIM
                    CONSECETUR
                  </h2> */}
                </div>
                <div className="pt-4 lg:pt-6">
                  <p className="text-md lg:text-lg text-justify font-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod enim, harum, culpa eveniet autem perferendis, ut ullam
                    alias quis explicabo officia vero architecto nisi nostrum
                    odio quia deserunt dicta minima veritatis doloribus modi
                    tenetur! Ipsam similique voluptate sunt harum? Tempore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 md:order-1 md:w-[50%]">
          <div className="landingDiv">
            <img src={about} alt="" className="object-contain scale-75" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
