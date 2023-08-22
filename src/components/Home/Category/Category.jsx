import React from "react";
import "./Category.css";

const category = [
  {
    name: "Bebe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  },
  {
    name: "Beba",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  },
  {
    name: "Nene",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  },
  {
    name: "Nena",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4",
  },
];

export default function Category() {
  return (
    <div className="d-flex justify-content-center mx-3 bg-white py-5">
      <div className="container-fluid row g-5 d-flex">
        {category.map((el) => (
          <section className="col-lg-6 col-sm-6 text-center p-0 px-1 bg-hero-image">
            <article className="d-flex align-items-center justify-content-center">
              <img src={el.image} alt="" className="" width="70%" />
            </article>
            <h5 className="py-4 fs-1">{el.name}</h5>
          </section>
        ))}
      </div>
    </div>
  );
}
