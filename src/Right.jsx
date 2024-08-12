import Button from "./Button";
import { useState } from "react";

export default function Right({ items }) {
  let [totalPrice, setPrice] = useState(0);
  
  let height = 6
  items.forEach(item => {
    totalPrice = Math.ceil(totalPrice += item.price);
    height+=4;
  });


  const onUpdatePrice = (newPrice) => {
    console.log(newPrice);
    console.log(totalPrice);
    
    
    setPrice(totalPrice+Math.ceil(newPrice));
  };

  return (
    <div className="w-2/5 bg-slate-400 text-white  rounded-xl p-4 text-xl flex flex-col" style={{height:`${height}rem`}}>
      <h3 className="text-2xl h-8">Cart</h3>
      <div className="w-full">
        {items.map((item) => {
          return(
          <div className="w-full h-16 mb-1 flex bg-white text-black rounded-lg shadow-lg  items-center px-2 gap-[1vw] py-1">
            <img
              src={item.image}
              alt=""
              className="w-[15%] h-full rounded-md"
            />
            <div className="w-[67%]">
              <p>{item.shoesName}</p>
              <p className="text-sm">${item.price}</p>
            </div>
            <Button send={item} onUpdatePrice={onUpdatePrice}/>
          </div>
          )
        })}
      </div>
      <p className="text-center text-2xl h-8 ">
        Total: $<span>{totalPrice}</span>
      </p>
    </div>
  );
}
