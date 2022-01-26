import React from 'react';
import Login from '../../Component/Authentication/Login';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const LoginPage = () => {
    return (
        <>
            <Navigation />
            <Login />
            <Footer />
        </>
    );
};

export default LoginPage;