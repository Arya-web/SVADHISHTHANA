import React from "react";
import "./Home.css";
import landing from "../../Images/landing.jpg";

const Home = () => {
  return (
    <>
      <div
        className="h-screen flex flex-col pt-20 md:pt-0 md:flex md:flex-row justify-center shadow-lg"
        name="home"
      >
        <div className="order-2 md:order-1 md:w-[50%]">
          <div className="flex justify-center items-center h-full md:ps-10 lg:ps-20">
            <div className="flex">
              <div className="px-8 md:px-8 lg:px-20">
                <div className="">
                  <h2 className="text-3xl md:text-2xl lg:text-5xl font-body font-extralight">
                    Svadhisthana Green Energies Pvt. Ltd.
                  </h2>
                  <h2 className="font-bold text-lg md:text-lg lg:text-3xl pt-1 font font-head tracking-wider">
                    <span className="text-green-600">&</span> OMET LIM
                    CONSECETUR
                  </h2>
                </div>
                <div className="pt-4 lg:pt-8">
                  <p className="text-md lg:text-lg font-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing. Earum,
                    exercitationem tenetur molestias fugiat asdsda assumenda
                    amet incidunt, maiores natus esse illo...
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    className="bg-green-600 text-white p-2 px-4 rounded-full font-body"
                  >
                    KNOW MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-[50%] md:pe-16">
          <div className="landingDiv">
            <img
              src={landing}
              alt=""
              className="md:h-screen object-contain scale-75"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
