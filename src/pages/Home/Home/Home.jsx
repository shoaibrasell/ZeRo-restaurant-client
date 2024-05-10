import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBox from '../BistroBox/BistroBox';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import ContactInfo from '../ContactInfo/ContactInfo';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ZeRo | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <BistroBox/>
            <PopularMenu/>
            <ContactInfo/>
            <ChefRecommends/>
            <Featured/>
            <Testimonials/> 
        </div>
    );
};

export default Home;