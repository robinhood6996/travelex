import React from 'react';

import Signup from '../../Component/Authentication/Signup';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const SignupPage = () => {
    return (
        <>
            <Navigation />
            <Signup />
            <Footer />
        </>
    );
};

export default SignupPage;