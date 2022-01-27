import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
const Blog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://travelexss.herokuapp.com/blog/${id}`)
            .then(res => setBlog(res.data))
    }, [])


    return (
        <>
            <div className="blog container mx-auto p-4 mt-5">
                <div className="blog-title">
                    <h1 className='font-bold text-3xl'>{blog.title}</h1>
                </div>
                <div className="blog-img mt-4">
                    <img className='' src={blog.image} alt="" />
                </div>
                <div className="author grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>{blog.category}</h2>
                    <h2 className='font-bold text-md text-black'>By: <span className='text-violet-500'>{blog.author}</span></h2>
                </div>
                <div className="budget grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>Budget: <span className='font-bold text-lg text-violet-500'>${blog.budget}</span></h2>
                    <h2 className='font-bold text-md text-black'>Location: <span className='text-violet-500'>{blog.location}</span></h2>
                </div>
                <div className="budget grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>Date: <span className='font-semibold text-lg'>{blog.date}</span></h2>
                    <h2 className='font-bold text-md text-black'>Rating:    <Rating initialRating={blog.rating} emptySymbol="far fa-star text-yellow-500" fullSymbol="fas fa-star text-yellow-500" readonly /></h2>
                </div>
                <div className="blog-details mt-10">
                    <p className='text-xl font-base'>
                        {blog.description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blog;