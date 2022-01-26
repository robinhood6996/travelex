import React from 'react';
import Blog from '../../Component/Blog/Blog';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const SingleBlog = () => {
    return (
        <>
            <Navigation />
            <Blog />
            <Footer />
        </>
    );
};

export default SingleBlog;