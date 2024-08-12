import React, { useState } from "react";
import Product from "./Product.jsx";
import Right from "./Right.jsx";

function Home() {
  const [cart, setCart] = useState([]);

  const addCart = (shoes) => {
    setCart([...cart, shoes]);
  };

  return (
    <div className="w-full px-12 py-7 flex gap-8">
      <div className="w-3/5 grid grid-cols-2 gap-8 ">
        <Product idx={0} addItem={addCart} />
        <Product idx={1} addItem={addCart} />
        <Product idx={2} addItem={addCart} />
        <Product idx={3} addItem={addCart} />
        <Product idx={4} addItem={addCart} />
        <Product idx={5} addItem={addCart} />
        <Product idx={6} addItem={addCart} />
        <Product idx={7} addItem={addCart} />
        <Product idx={8} addItem={addCart} />
        <Product idx={9} addItem={addCart} />
      </div>
      <Right items={cart} />
    </div>
  );
}

export default Home;