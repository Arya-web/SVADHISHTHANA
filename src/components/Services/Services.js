import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import IndividualService from "./IndividualService";

const Services = () => {
  const state = {
    responsive: {
      0: {
        stagePadding: 10,
        margin: 0,
      },
      640: {
        stagePadding: 150,
        margin: 100,
      },
      1024: {
        stagePadding: 350,
        margin: 200,
      },
    },
  };
  return (
    <>
      <div className="py-10" name="services">
        <div className="flex justify-center">
          <h2 className="text-5xl font-bold">Services</h2>
        </div>
        <div className="pt-12">
          <OwlCarousel
            className="owl-theme"
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
            responsive={state.responsive}
          >
            <IndividualService />
            <IndividualService />
            <IndividualService />
            <IndividualService />
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Services;
