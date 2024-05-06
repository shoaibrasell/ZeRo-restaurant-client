import React from "react";

const MenuItem = ({ item }) => {
  // here we destructure the item object
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-3 px-16">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[105px] "
        src={image}
        alt="Logo"
      />
      <div>
        <h3 className="uppercase">{name}--------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-green-500">${price}</p>
    </div>
  );
};

export default MenuItem;
