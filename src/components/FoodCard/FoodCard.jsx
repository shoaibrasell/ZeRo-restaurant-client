import React from "react";

const FoodCard = ({ item }) => {
  const {name, image , price , recipe} =item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img 
          src={image}
          alt="Shoes"
          style={{ maxWidth: "100%", height: "auto" }} 
        />
      </figure>
      <p className="absolute bg-slate-900 text-white right-0 mr-10 mt-8 px-4 p-1">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end  mx-auto">
          <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-200 border-orange-400">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
