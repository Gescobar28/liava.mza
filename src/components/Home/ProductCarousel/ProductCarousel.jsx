import React from "react";
import Carousel from "react-elastic-carousel";
import "./ProductCarousel.css";
import Card from "../../Card/Card";

const products = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 4, pagination: false },
  { width: 1150, itemsToShow: 5, pagination: false },
];

export default function ProductCarousel() {
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
              <div className="mx-2">
                <Card image={el} id= {index} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
