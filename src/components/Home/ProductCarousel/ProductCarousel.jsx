import React from "react";
import Carousel from "react-elastic-carousel";
import "./ProductCarousel.css";
import Card from "../../Card/Card";
import { useSelector } from "react-redux";

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 4, pagination: false },
  { width: 1150, itemsToShow: 5, pagination: false },
];

export default function ProductCarousel() {
  const products = useSelector((state) => state.allProducts);

  return (
    <div className=" bg-white">
      <div className="style-carousel py-5 px-3 mb-5">
        <Carousel
          enableAutoPlay
          autoPlaySpeed={4000}
          breakPoints={breakPoints}
          className=""
        >
          {products.map((el, index) => {
            return (
              <div className="mx-2 ">
                <Card 
                image={el.image} 
                id={el.id} 
                name = {el.name}
                price = {el.price}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
