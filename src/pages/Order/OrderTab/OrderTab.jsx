import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 mt-5 mb-10 m px-20 gap-4">
          {
            items.map(item => <FoodCard
            key={item._id}
            item={item}
            ></FoodCard>)
          }
        </div>
    );
};

export default OrderTab;