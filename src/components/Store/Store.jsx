import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import InfoImage from "./InfoImage/InfoImage";
import Pagination from "./Pagination/Pagination";

export default function Store() {
  return (
    <div className="bg-white ">
      <div className="col container-fluid-lg">
        <InfoImage />
        <Products />
        <Pagination />
      </div>
    </div>
  );
}
