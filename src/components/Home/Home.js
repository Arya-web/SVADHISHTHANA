import React from "react";
// import { useState, useEffect } from "react";
import "./Home.css";
// import { Link } from "react-scroll";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import axios from "axios";
import background from "../../Images/solar1.jpg";

const Home = () => {
  // const [Images, setImages] = useState([]);
  // const [Loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const getImages = async () => {
  //     try {
  //       await axios({
  //         method: "get",
  //         url: "https://www.googleapis.com/drive/v3/files?q='1S_2gwASpU2PeqrMMS9IoRpbNXrs875bU' in parents&key=AIzaSyC0l5avnKRvtPv_8PfBnDpN0YB9LFtfv_I",
  //       })
  //         .then((res) => {
  //           const newData = res.data.files;
  //           newData.forEach((element) => {
  //             setImages((prevData) => [...prevData, element.id]);
  //           });
  //           setLoading(false);
  //         })
  //         .catch(console.error);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   setLoading(true);
  //   getImages();
  // }, []);

  return (
    <>
      <div
        className="h-[60vh] md:h-[90vh] flex flex-col md:flex md:flex-row justify-left shadow-lg gap-8"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: `100% 100%`,
          boxShadow: `inset 2000px 0 0 0 rgba(0, 0, 0, 0.15)`,
        }}
        name="home"
      >
        <div className="flex justify-center items-center md:items-start h-full md:ps-10 lg:ps-10 lg:pt-36 font-head md:w-[45%]">
          <div className="flex">
            <div className="px-8 md:px-0">
              <div className="">
                <h2
                  className="text-3xl md:text-2xl lg:text-7xl text-white py-4 tracking-widest"
                  style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <p className="lg:text-6xl">TAKE A RIDE ON</p>
                  <p className="font-semibold">THE GREEN SIDE</p>
                </h2>
                <hr
                  className="h-[6px] bg-white"
                  style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="800"
                />
                <h2
                  className="font-medium text-lg md:text-lg lg:text-2xl font-body tracking-wide text-white py-4"
                  style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="800"
                >
                  {/* <q> */}
                  Svadhishthana Green Energies (P) ltd with SCM (P) ltd is
                  aiming to Provide Solar Solutions
                  {/* </q> */}
                </h2>
              </div>
              {/* <div className="pt-4 md:pt-8 flex justify-center items-center">
                  <Link
                    type="button"
                    className="bg-green-500 font-semibold text-white p-4 px-6 md:p-2 md:px-4 lg:p-4 lg:px-6  rounded-md font-body cursor-pointer"
                    to="about"
                    smooth={true}
                    offset={-150}
                  >
                    KNOW MORE
                  </Link>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="order-1 md:order-2 md:w-[70%]">
          <div className="flex justify-center items-center px-4 h-full">
            {Loading && (
              <>
                <div className="flex md:h-[18rem] lg:h-[36rem] w-full justify-center items-center">
                  <div>
                    <img src={require("../../Images/loading.gif")} alt="" />
                  </div>
                </div>
              </>
            )}
            {!Loading && (
              <OwlCarousel
                id="imagesSection"
                className="owl-theme py-2"
                loop
                items={1}
                mouseDrag={true}
                touchDrag={true}
                nav={false}
                dots={true}
                autoplay={true}
                autoplayTimeout={4000}
                // autoplayHoverPause={true}
                autoplaySpeed={1000}
              >
                {Images.map((image) => (
                  <div className="" key={image}>
                    <img
                      src={`https://lh3.googleusercontent.com/d/${image}`}
                      alt=""
                      className="md:h-[18rem] lg:h-[36rem] object-contain"
                    />
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div> */}
    </>
  );
};

export default Home;
