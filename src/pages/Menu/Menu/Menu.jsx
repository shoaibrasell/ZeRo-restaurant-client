import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImag from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hook/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "popular");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>ZeRo | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImag} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't miss Offer"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu Items */}
      <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
      <div className="grid place-items-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 mb-4">
        ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      <div className="grid place-items-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 mb-4">
        ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      <div className="grid place-items-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 mb-4">
        ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
      
      <div className="grid place-items-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 mb-4">
        ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default Menu;
