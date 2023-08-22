import React from "react";
import Carousel from "react-elastic-carousel";
import "./ProductCarousel.css";
import Card from "../../Card/Card";
import { useSelector } from "react-redux";

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false, showArrows:false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false, showArrows:false },
  { width: 850, itemsToShow: 4, pagination: false },
  { width: 1150, itemsToShow: 5, pagination: false },
];


export default function ProductCarousel() {
  const state = useSelector(state => state);
  const { products } = state.productReducer;

  return (
    <div className=" bg-white py-5">
      <div className="style-carousel">
        <Carousel
          enableAutoPlay
          autoPlaySpeed={3000}
          breakPoints={breakPoints}
          className=""
        >
          {products.map((el, index) => {
            return (
              <div className="mx-md-2">
                <Card 
                image={el.image} 
                id={el.id} 
                name = {el.name}
                price = {el.price}
                className = "carouselHeight"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
