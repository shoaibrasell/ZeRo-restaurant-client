import React from "react";
import '../Featured/Featured.css'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-20 pt-10">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="Featured Image" />
        </div>
        <div className="md:ml-10">
          <p>May 7 , 2024</p>
          <p className="uppercase"> where can i get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            repellendus, totam quibusdam iste nisi corporis soluta natus id
            dolore ducimus doloremque qui quos consequuntur commodi. Dolorum a
            deleniti quisquam inventore amet at hic totam, veniam natus nihil
            dolorem, ullam consectetur.dolorem, ullam consectetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
