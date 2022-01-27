import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import axios from 'axios';
const Sidebar = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5099/blogs/admin')
            .then(res => {
                setBlogs(res.data);
            })
    }, []);
    const topRated = blogs.filter(blog => blog.rating > 3);
    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl p-2 bg-violet-600 text-white'>Top Rated Spot</h2>
            <div className="spot-collection">
                {/* Single Spot */}
                {
                    topRated.map(blog => <div key={blog._id} className="spot grid grid-cols-3 mt-5 ml-2 border-b-2 p-2">
                        <div className="spot-details col-span-2">
                            <h2 className='font-bold text-xl'>{blog.title}</h2>
                            <h3 className='font-base'>Locaion: <span className='font-semibold'>{blog.location}</span></h3>
                            <h3 className='font-base'>Budget: <span className='font-semibold'>${blog.budget}</span></h3>
                            <Rating initialRating={blog.rating} emptySymbol="far fa-star text-yellow-500" fullSymbol="fas fa-star text-yellow-500" readonly />
                        </div>
                        <div className="spot-img ">
                            <img src={blog.image} style={{ width: '120px', borderRadius: '5px' }} alt="" />
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Sidebar;