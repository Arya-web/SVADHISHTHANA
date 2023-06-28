import React from 'react';
import serviceImg from "../../Images/service.jpg";

const IndividualService = () => {
  return (
    <>
      <div className="item">
        <div className="">
          <img src={serviceImg} alt="serviceImg" className="" />
          <div className="pt-4 px-4">
            <h2 className="font-bold text-2xl py-1 text-center">
              This is the title
            </h2>
            <p className="text-justify mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quod amet cum, id tempore excepturi maxime odit illo sed rem
              necessitatibus totam cumque expedita enim incidunt officiis neque
              quia. Est rerum, repudiandae dolor numquam tenetur officia non
              consectetur unde voluptatibus? Exercitationem harum totam
              molestias molestiae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualService