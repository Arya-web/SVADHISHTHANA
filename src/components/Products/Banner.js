import React from "react";
import background from "../../Images/solar3.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="h-[50vh] md:h-[80vh] flex flex-col md:flex md:flex-row justify-left shadow-lg gap-8"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: `100% 100%`,
          boxShadow: `inset 2000px 0 0 0 rgba(0, 0, 0, 0.25)`,
        }}
        name="home"
      >
        <div className="flex justify-center items-center md:items-start h-full md:ps-10 lg:ps-10 lg:pt-36 font-body md:w-[60%]">
          <div className="flex">
            <div
              className="px-8 md:px-0 text-center md:text-start
            "
            >
              <h2
                className="text-3xl md:text-2xl lg:text-7xl text-white py-4 tracking-wider font-semibold"
                style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <p className="">SOLAR GUSTIX </p>
                <p className="">& OMNI GUSTIX</p>
              </h2>
              <h2
                className="font-medium text-lg md:text-lg lg:text-2xl font-body tracking-wide text-white py-4"
                style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="800"
              >
                {/* <q> */}
                With Solar Gustix and Omni Gustix you can run your organisation
                factories, entity with hybrid innovative sustaining solution and
                take back the maximum return of investment
                {/* </q> */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
