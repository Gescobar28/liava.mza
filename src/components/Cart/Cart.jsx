import React from "react";

const cart = [
  {
    name: "Vestido estampado de flores",
    price: "4000",
    brand: "H&M",
    detail:
      "Vestido sin mangas en punto de algod�n con estampado. Costura fruncida en la cintura y falda con vuelo. 100% algodon",
    season: "Verano",
    size: "4 a 6 a�os",
    stock: "1",
    image: [
      "https://res.cloudinary.com/gescobar/image/upload/v1680981207/tiendarg/vestido_estampado_flores_1_eorjom.jpg",
      "https://res.cloudinary.com/gescobar/image/upload/v1680981207/tiendarg/vestido_estampado_flores_3_mikhfe.jpg",
    ],
    visible: "true",
    category: "Vestido",
    genre: "Ni�as",
    quantity: 1,
  },
  {
    name: "Vesti color azul estampado",
    price: "4000",
    brand: "H&M",
    detail:
      "Vestido sin mangas en punto de algod�n con estampado. Costura fruncida en la cintura y falda con vuelo. 100% algodon",
    season: "Verano",
    size: "2 a 4 a�os",
    stock: "1",
    image: [
      "https://res.cloudinary.com/gescobar/image/upload/v1680981208/tiendarg/vestido_estampado_azul_animalitos_4_oyvnd6.jpg",
      "https://res.cloudinary.com/gescobar/image/upload/v1680981208/tiendarg/vestido_estampado_azul_animalitos_3_qwcaxh.jpg",
      "https://res.cloudinary.com/gescobar/image/upload/v1680981208/tiendarg/vestido_estampado_azul_animalitos_2_actuv0.jpg",
    ],
    visible: "true",
    category: "Vestido",
    genre: "Ni�as",
    quantity: 1,
  },
  {
    name: "Vesti color azul estampado",
    price: "4000",
    brand: "H&M",
    detail:
      "Vestido sin mangas en punto de algod�n con estampado. Costura fruncida en la cintura y falda con vuelo. 100% algodon",
    season: "Verano",
    size: "4 a 6 a�os",
    stock: "1",
    image: [
      "https://res.cloudinary.com/gescobar/image/upload/v1680981208/tiendarg/vestido_estampado_azul_animalitos_4_oyvnd6.jpg",
      "https://res.cloudinary.com/gescobar/image/upload/v1680981208/tiendarg/vestido_estampado_azul_animalitos_3_qwcaxh.jpg",
      "https://res.cloudinary.com/gescobar/image/upload/v1680981208/tiendarg/vestido_estampado_azul_animalitos_2_actuv0.jpg",
    ],
    visible: "true",
    category: "Vestido",
    genre: "Ni�as",
    quantity: 1,
  },
];

let total;
cart.map(el =>  
    total += (el.price * el.quantity)
    )

export default function Cart() {
  return (
    <div className="container my-5 col d-flex flex-wrap">
      <div className=" col-md-8 bg-white pt-4 border rounded">
        {cart.map((el) => (
          <div class="card mb-3 border-0 rounded-0 container">
            <div class="col d-flex g-0 border-top border-bottom">
              <div class="col-2 d-flex container">
                <img
                  src={el.image[0]}
                  class="img-fluid align-self-center"
                  alt="..."
                  width="100"
                  height="60"
                />
              </div>
              <div class="col-8">
                <div class="">
                  <h5 class="card-title fs-6">{el.name}</h5>
                  <small class=" d-block">Talle: {el.size}</small>
                  <small class="">
                    {el.quantity} x {el.price}
                  </small>
                </div>
              </div>
              <div class="col-2  ">
                <small>${el.price * el.quantity}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" col-md-4 ">
        <div className="container bg-white mx-2 rounded border">
          <h5 className="fs-6 text-center mt-4">Resumen</h5>
          <p>Total: {total}</p>
        </div>
      </div>
    </div>
  );
}
