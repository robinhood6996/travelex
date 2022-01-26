import React from 'react';
import Carousel from '../../Component/Home/Carousel/Carousel';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <Carousel />
            <Footer />
        </>
    );
};

export default Home;