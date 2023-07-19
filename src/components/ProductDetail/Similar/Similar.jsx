import React from "react";
import Card from "../../Card/Card";
import { useSelector } from "react-redux";

export default function Similar() {
  const product = useSelector((state) => state.productDetail);

  const allProducts = useSelector((state) => state.products);

  const products = allProducts.filter((el) => el.category === product.category);

  const productsToShow = products.slice(0, 4);

  return (
    <div className="col container pt-0 pt-sm-0">
      <h3 className="text-center">Productos relacionados</h3>
      <div className="col my-5">
        <div class="row row-cols-2 row-cols-md-4 g-4">
          {productsToShow.map((el, index) => (
            <Card image={el.image} id={el.id} name={el.name} price={el.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
