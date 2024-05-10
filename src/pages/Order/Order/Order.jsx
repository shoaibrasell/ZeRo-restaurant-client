import React, { useState } from "react";
import orderCoverImage from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from './../../../Hook/useMenu';
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex , setTabIndex] = useState(0);
  const [menu] =useMenu();
  const desserts = menu.filter((item) => item.category === "popular");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Cover img={orderCoverImage} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center uppercase mt-4">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-3 mt-5 mb-10 m px-20 gap-4">
          {
            salad.map(item => <FoodCard
            key={item._id}
            item={item}
            ></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
