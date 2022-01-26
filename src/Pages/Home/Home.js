import React from 'react';
import Carousel from '../../Component/Home/Carousel/Carousel';
import Main from '../../Component/Home/Main/Main';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <Carousel />
            <Main></Main>
            <Footer />
        </>
    );
};

export default Home;