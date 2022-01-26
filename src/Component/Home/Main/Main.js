import React from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';
const Main = () => {
    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3">
                <Blogs />
                <Sidebar />
            </div>
        </div>
    );
};

export default Main;