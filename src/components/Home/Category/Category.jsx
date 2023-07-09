import React from "react";
import "./Category.css";

export default function Category() {
  return (
    <div className="d-flex justify-content-center mx-3 bg-white py-5">
      <div className="container-fluid row g-5 d-flex">
        <section className="col-lg-3 col-sm-6 text-center p-0 px-1 bg-hero-image">
          <article className="d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4"
              alt=""
              className="w-100"
            />
          </article>
          <article className="bg-primary text-white">
            <h5 className="py-4">Bebés</h5>
          </article>
        </section>
        <section className="col-lg-3 col-sm-6 text-center p-0 px-1 ">
          <article className="d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4"
              alt=""
              className="w-100"
            />
          </article>
          <article className="bg-success text-white">
            <h5 className="py-4">Bebés</h5>
          </article>
        </section>
        <section className="col-lg-3 col-sm-6 text-center p-0 px-1">
          <article className="d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4"
              alt=""
              className="w-100"
            />
          </article>
          <article className="bg-warning text-white">
            <h5 className="py-4">Bebés</h5>
          </article>
        </section>
        <section className="col-lg-3 col-sm-6 text-center p-0 px-1">
          <article className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4"
              alt=""
              className="w-100"
            />
          </article>
          <article className="bg-danger text-white">
            <h5 className="py-4">Bebés</h5>
          </article>
        </section>
      </div>
    </div>
  );
}
