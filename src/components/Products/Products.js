import React, { useEffect } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Details from "./Details";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <Navbar />
      <Banner />
      <Details />
    </>
  );
};

export default Products;
