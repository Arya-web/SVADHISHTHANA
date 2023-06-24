import React from "react";
import serviceImg from "../../Images/service.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
            <div className="item">
              <div className="">
                <img src={serviceImg} alt="serviceImg" className="" />
                <div className="pt-4 px-4">
                  <h2 className="font-bold text-2xl py-1 text-center">
                    This is the title
                  </h2>
                  <p className="text-justify mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet quod amet cum, id tempore excepturi maxime odit illo
                    sed rem necessitatibus totam cumque expedita enim incidunt
                    officiis neque quia. Est rerum, repudiandae dolor numquam
                    tenetur officia non consectetur unde voluptatibus?
                    Exercitationem harum totam molestias molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="">
                <img src={serviceImg} alt="serviceImg" className="" />
                <div className="pt-4 px-4">
                  <h2 className="font-bold text-2xl py-1 text-center">
                    This is the title
                  </h2>
                  <p className="text-justify mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet quod amet cum, id tempore excepturi maxime odit illo
                    sed rem necessitatibus totam cumque expedita enim incidunt
                    officiis neque quia. Est rerum, repudiandae dolor numquam
                    tenetur officia non consectetur unde voluptatibus?
                    Exercitationem harum totam molestias molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="">
                <img src={serviceImg} alt="serviceImg" className="" />
                <div className="pt-4 px-4">
                  <h2 className="font-bold text-2xl py-1 text-center">
                    This is the title
                  </h2>
                  <p className="text-justify mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet quod amet cum, id tempore excepturi maxime odit illo
                    sed rem necessitatibus totam cumque expedita enim incidunt
                    officiis neque quia. Est rerum, repudiandae dolor numquam
                    tenetur officia non consectetur unde voluptatibus?
                    Exercitationem harum totam molestias molestiae.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="">
                <img src={serviceImg} alt="serviceImg" className="" />
                <div className="pt-4 px-4">
                  <h2 className="font-bold text-2xl py-1 text-center">
                    This is the title
                  </h2>
                  <p className="text-justify mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet quod amet cum, id tempore excepturi maxime odit illo
                    sed rem necessitatibus totam cumque expedita enim incidunt
                    officiis neque quia. Est rerum, repudiandae dolor numquam
                    tenetur officia non consectetur unde voluptatibus?
                    Exercitationem harum totam molestias molestiae.
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Services;
