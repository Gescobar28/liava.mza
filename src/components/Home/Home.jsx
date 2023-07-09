import React from "react";
import Carousel from "./Carousel/Carousel";
import Category from "./Category/Category";
import InfoSeparator from "./InfoSeparator/InfoSeparator";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import Brands from "./Brands/Brands";



export default function Home() {
  return (
    <>
      <Carousel />
      <InfoSeparator />
      <Category />
      <Brands />
      <ProductCarousel />
    </>
  );
}
