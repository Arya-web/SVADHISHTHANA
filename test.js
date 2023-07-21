import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import IndividualProblem from "./IndividualProblem";
import ProbValues from "./ProbValues";

const Problems = () => {
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
        stagePadding: 150,
        margin: 0,
      },
    },
  };
  return (
    <>
      <div className="py-10" name="problems">
        <div className="flex justify-center">
          <div>
            <p className="font-body text-green-800 font-semibold tracking-wider text-center py-4">
              PROBLEMS
            </p>
            <h2 className="text-5xl font-head">
              Problems with existing Structure
            </h2>
          </div>
        </div>
        <div className="pt-12">
          <OwlCarousel
            className="owl-theme"
            loop
            items={3}
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
            {ProbValues.map((problemValue) => (
              <IndividualProblem
                title={problemValue.title}
                body={problemValue.body}
                key={problemValue.id}
                id={problemValue.id}
              />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Problems;
