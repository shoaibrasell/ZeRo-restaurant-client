import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad from "../../../assets/home/04.jpg";

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="flex justify-center mx-4 py-10 gap-6">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img
              src={salad}
              alt="Salad"
              className="rounded-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">Caesar Salad</h2>
            <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="grid place-items-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img
              src={salad}
              alt="Salad"
              className="rounded-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">Caesar Salad</h2>
            <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="grid place-items-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img
              src={salad}
              alt="Salad"
              className="rounded-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">Caesar Salad</h2>
            <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="grid place-items-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
