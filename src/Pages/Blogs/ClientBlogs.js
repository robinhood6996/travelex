import React from 'react';
import AllBlogs from '../../Component/Blogs/AllBlogs';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const ClientBlogs = () => {
    return (
        <>
            <Navigation />
            <AllBlogs />
            <Footer />
        </>
    );
};

export default ClientBlogs;