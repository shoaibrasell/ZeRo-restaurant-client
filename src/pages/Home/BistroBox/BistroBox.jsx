import React from "react";
import chef from "../../../assets/home/chef-service.jpg";
const BistroBox = () => {
  return (
    <div className="relative mt-10 mb-10 ">
      <img
        src={chef}
        alt="Bistro Image"
        className="block mx-auto"
        style={{ maxWidth: "100%" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-center text-black text-3xl uppercase">
          Bistro Boss
        </h1>
        <p className="text-center text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.{" "}
        </p>
      </div>
    </div>
  );
};

export default BistroBox;
