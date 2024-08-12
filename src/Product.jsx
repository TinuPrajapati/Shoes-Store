import React from 'react';
import shoes1 from "./assets/shoes-1.jpg"
import shoes2 from "./assets/shoes-2.jpg"
import shoes3 from "./assets/shoes-3.jpg"
import shoes4 from "./assets/shoes-4.jpg"
import shoes5 from "./assets/shoes-5.jpg"
import shoes6 from "./assets/shoes-6.jpg"
import shoes7 from "./assets/shoes-7.jpg"
import shoes8 from "./assets/shoes-8.jpg"
import shoes9 from "./assets/shoes-9.jpg"
import shoes10 from "./assets/shoes-10.jpg"

function Product({idx,addItem}) {
  const shoes = [
    {
      shoesName: "Nike Air Max",
      image: shoes1,
      price: 120.99,
    },
    {
      shoesName: "Adidas Superstar",
      image: shoes2,
      price: 99.99,
    },
    {
      shoesName: "Converse Chuck Taylor",
      image: shoes3,
      price: 60.99,
    },
    {
      shoesName: "Vans Old Skool",
      image: shoes4,
      price: 70.99,
    },
    {
      shoesName: "New Balance 574",
      image: shoes5,
      price: 80.99,
    },
    {
      shoesName: "Reebok Classic Leather",
      image: shoes6,
      price: 50.99,
    },
    {
      shoesName: "Puma Suede",
      image: shoes7,
      price: 90.99,
    },
    {
      shoesName: "Air Jordan 1",
      image: shoes8,
      price: 150.99,
    },
    {
      shoesName: "Nike Presto",
      image: shoes9,
      price: 100.99,
    },
    {
      shoesName: "Adidas Yeezy Boost",
      image: shoes10,
      price: 200.99,
    },
  ];

  return (
    <div className="rounded-xl h-96 flex flex-col border-2 overflow-hidden shadow-xl">
            <img
              src={shoes[idx].image}
              alt={shoes[idx].shoesName}
              className="h-3/5 w-full object-cover"
            />
            <div className="flex flex-col justify-evenly items-center h-2/5 bg-yellow-500 text-white text-xl font-bold">
              <h2 className="font-serif">{shoes[idx].shoesName}</h2>
              <p>
                Price:<span className="border-b-2">${shoes[idx].price}</span>
              </p>
              <button
                className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg font-mono active:scale-95"
                onClick={()=>{
                  addItem(shoes[idx])
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
  );
}

export default Product;