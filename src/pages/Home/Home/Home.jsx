import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBox from '../BistroBox/BistroBox';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBox/>
            <PopularMenu/>
            <ChefRecommends/>
            <Featured/>
            <Testimonials/> 
        </div>
    );
};

export default Home;