import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-scroll";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        await axios({
          method: "get",
          url: "https://www.googleapis.com/drive/v3/files?q='1S_2gwASpU2PeqrMMS9IoRpbNXrs875bU' in parents&key=AIzaSyC0l5avnKRvtPv_8PfBnDpN0YB9LFtfv_I",
        })
          .then((res) => {
            console.log(res.data.files);
            setImages(res.data.files);
          })
          .catch(console.error);
      } catch (error) {
        console.log(error);
      }
    };
    
    getImages();
  }, []);

  return (
    <>
      <div
        className="h-[90vh] flex flex-col md:flex md:flex-row justify-center shadow-lg gap-8"
        name="home"
      >
        <div className="order-2 md:order-1 md:w-[30%]">
          <div className="flex justify-center items-center h-full md:ps-10 lg:ps-20">
            <div className="flex">
              <div className="px-8 md:px-0">
                <div className="text-center">
                  <h2 className="text-3xl md:text-2xl lg:text-5xl font-head tracking-wide">
                    Svadhisthana Green Energies Pvt. Ltd.
                  </h2>
                  <h2 className="font-bold text-lg md:text-lg lg:text-2xl font-body tracking-widest text-green-500 uppercase py-4">
                    <q> Take a ride on the Green Side </q>
                  </h2>
                </div>
                <div className="pt-4 md:pt-8 flex justify-center items-center">
                  <Link
                    type="button"
                    className="bg-green-500 font-semibold text-white p-4 px-6 rounded-md font-body cursor-pointer"
                    to="about"
                    smooth={true}
                    offset={-150}
                  >
                    KNOW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-[70%]">
          <div className="flex justify-center items-center px-4">
            <OwlCarousel
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
                <div className="" key={image.id}>
                  <img
                    src={`https://lh3.googleusercontent.com/d/${image.id}`}
                    alt=""
                    className="md:h-[18rem] lg:h-[36rem] object-contain"
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
