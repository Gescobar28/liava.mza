import React from "react";
import Card from '../../Card/Card'

const products = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
];

export default function Similar() {
  return (
    <div className="col container pt-0 pt-sm-0">
      <h3 className="text-center">Productos relacionados</h3>
      <div className="col my-5">
        <div class="row row-cols-2 row-cols-md-4 g-4">
        {products.map((el, index) => (
          <Card 
            image = {el}
            id = {index}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
