import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import InfoImage from "./InfoImage/InfoImage";
import Pagination from "./Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";

export default function Store() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-white ">
      <div className="col container-fluid-lg">
        <InfoImage />
        <Products />
      </div>
    </div>
  );
}
