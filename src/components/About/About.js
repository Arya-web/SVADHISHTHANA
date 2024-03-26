import React from "react";
import "./About.css";
// import about from "../../Images/about.jpg";
import AboutValues from "./AboutValues";

const About = () => {
  var k = 0;
  return (
    <>
      <div
        className="flex flex-col pt-10 md:pt-0 md:flex md:flex-row lg:px-10 about-main bg-white"
        name="about"
      >
        <div className="order-1 md:order-2 lg:py-16">
          <div className="flex justify-center items-center h-full">
            <div className="flex">
              <div className="px-8 md:px-8 lg:px-10 py-8">
                <div className="text-center ">
                  <p className="font-body tracking-wider font-semibold text-green-600 pb-4 uppercase">
                    Solar is the future!
                  </p>
                  <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider uppercase">
                    Why switch to Solar
                  </h2>
                </div>
                <div className="pt-4 lg:pt-6">
                  {/* <p className="text-md md:text-xs lg:text-lg text-justify font-body">
                    We are a start up offering products that leverage renewable
                    energy technologies. Our portfolio includes hybrid energy
                    harvester, generators and energy storage system. These
                    cutting-edge products are designed to harness the abundant
                    and freely available energy from our nature and use
                    renewable energy to convert into clean and reliable power
                    for residential, commercial, and industrial applications.
                    The ultimate goal of our energy harvesting system is to
                    achieve perpetual operation. Our ambition is to stand out as
                    a prominent figure in our industry by our commitment to
                    quality, reliability, affordability and sustainability. We
                    are dedicated to create patented innovative products which
                    would sustain natural disasters and can be customized to
                    energy usage. Additionally, using hybrid source will ensure
                    enhanced energy capture, energy storage flexibility and
                    scalability. Besides to our commitment towards renewable
                    energy, we are dedicated to promote energy education and
                    awareness by our innovative products, exceptional services
                    and fostering a culture of sustainability.
                  </p> */}
                  {/* <p className="text-md lg:text-lg text-justify font-body pt-4">
                    Join us in our ideology of “Renew, Sustain and Generate
                    again” and shape a cleaner, brighter tomorrow.
                  </p> */}
                  <div className="md:grid md:grid-cols-3 gap-16 lg:py-8">
                    {AboutValues.map((AboutValue) => (
                      <div
                        className="py-4 lg:py-0"
                        data-aos="fade-up"
                        data-aos-delay={`${(k++)*100}`}
                        data-aos-duration="600"
                      >
                        <div className="flex justify-center items-center">
                          <img
                            src={require(`../../Images/s${AboutValue.id}.png`)}
                            alt="AboutImg"
                            className="h-[100px] lg:h-[130px] object-contain"
                          />
                        </div>
                        <div className="pt-4 px-2">
                          <h2 className="text-xl md:text-xl py-1 text-center">
                            {AboutValue.title}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="order-2 md:order-1 md:w-[30%]">
          <div className="landingDiv flex justify-center items-center h-full">
            <img src={about} alt="" className="object-contain m-auto" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
