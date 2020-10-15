import React from 'react';

//components
import HomeSlider from '../../blocks/home';
import Fruits from '../../shared/Fruits';
import Tubers from '../../shared/Tubers';
import Cereals from '../../shared/Cereals';
import Vegetables from '../../shared/Vegetables';

const HomePage = () => {
    return (
        <section className="home-page">
            <div className="home-page-slider">
                <HomeSlider />
            </div>
            <div className="home-page-content">
                <div className="container">
                    <Cereals />
                    <Vegetables />
                    <Fruits />
                    <Tubers />
                </div>
            </div>
        </section>
    )
};

export default HomePage;