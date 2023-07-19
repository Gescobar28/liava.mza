import React, { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import Category from "./Category/Category";
import InfoSeparator from "./InfoSeparator/InfoSeparator";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import Brands from "./Brands/Brands";
import Susbcribe from "./Subscribe/Subscribe";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <InfoSeparator />
      <Category />
      <Brands />
      <ProductCarousel />
      <Susbcribe />
    </>
  );
}
