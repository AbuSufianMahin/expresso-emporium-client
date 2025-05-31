import React from 'react';
import HeroSection from '../HomepageLayout/HeroSection';
import FeaturesSection from '../HomepageLayout/FeaturesSection';
import PopularProducts from '../HomepageLayout/PopularProducts';



const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default HomePage;