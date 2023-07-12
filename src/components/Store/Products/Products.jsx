import React from "react";
import "./Products.css";
import Sidebar from "../Sidebar/Sidebar";
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

export default function Products() {
  return (
    <div className="col mx-lg-4 bg-white mb-lg-2">
      <div className="d-flex pt-5">
        {/* <div className="col-6 d-flex justify-content-end container">
        </div> */}
        <div className="col d-flex pe-2 justify-content-center justify-content-md-end mb-5 mb-lg-0">
          <div className="">
          <Sidebar/>

          </div>
          <div class="d-flex w-80 border btn ms-2">
            <i class="bi bi-arrow-down-up "></i>
            <select class="form-select " aria-label="Default select example">
              <option selected>Más Recientes</option>
              <option value="1">Precio mas alto</option>
              <option value="2">Precio mas bajo</option>
            </select>
            
          </div>
        </div>
      </div>

      <div className="container">
        <small className="ms-3 text-secondary">
          <strong>{products.length}</strong> productos
        </small>
      </div>
      <div className="col container">
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4 py-4">
          {products.map((el,index) => (
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
