import React from 'react';
import CreatePost from '../../Component/Addpost/CreatePost';
import Footer from '../../Component/Shared/Footer/Footer';
import Navigation from '../../Component/Shared/Navigation/Navigation';

const AddPost = () => {
    return (
        <div>
            <Navigation />
            <CreatePost />
            <Footer />
        </div>
    );
};

export default AddPost;