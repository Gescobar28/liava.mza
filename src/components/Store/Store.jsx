import React from "react";
import Products from "./Products/Products";
import InfoImage from "./InfoImage/InfoImage";

export default function Store() {
  return (
    <div className="bg-white ">
      <div className="col container-fluid-lg">
        <InfoImage />
        <Products />
      </div>
    </div>
  );
}
