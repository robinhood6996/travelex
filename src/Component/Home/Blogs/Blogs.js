import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;
    const activePost = blogs.filter(blog => blog.status !== 'Pending')

    useEffect(() => {
        axios.get(`https://travelexss.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => {
                setBlogs(res.data.blogs)
                const count = res.data.count
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            }).catch(err => alert(err.message))
    }, [page])


    return (
        <div className='col-span-2'>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                        <h2 className="text-2xl font-extrabold text-gray-900">Blogs</h2>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            {activePost.map((blog) => (
                                <div key={blog._id} className="group relative">
                                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src={blog.image}
                                            alt="Tour Scene"
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <p className='text-sm text-gray-500'>{blog.category}</p>
                                    <h3 className=" text-2xl font-semibold text-gray-900 ">
                                        <Link to={`blog/${blog._id}`}>
                                            <span className="absolute inset-0" />
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    {/* <p className="text-md text-gray-800">{callout.description.slice(0, 150)}</p> */}
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="budget">
                                            <h3 className='font-bold text-sm'>Budget</h3>
                                            <h2 className='font-extrabold text-xl text-violet-700'>${blog.budget}</h2>
                                        </div>
                                        <div className="rating">
                                            <h3 className='font-base text-sm'>Rating</h3>
                                            <h2 className='font-bold text-md text-violet-700'>
                                                <Rating initialRating={blog.rating} emptySymbol="far fa-star text-yellow-500" fullSymbol="fas fa-star text-yellow-500" readonly />
                                            </h2>
                                        </div>
                                        <div className='mt-3 '>
                                            <h2 className='font-base'>Location: <span className='font-bold'>{blog.location}</span></h2>
                                        </div>
                                        <div className='mt-3 '>
                                            <h2 className='font-base'>Traveler: <span className='font-bold'>{blog.author}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination mt-10">
                            <h2 className='mb-2 font-bold text-violet-500'>More Blogs..</h2>
                            {
                                [...Array(pageCount).keys()]
                                    .map(number => <button
                                        className={number === page ? 'active mx-4 p-2 font-bold bg-violet-500 text-white ' : 'mx-4 p-2 font-bold bg-gray-500 text-white'}
                                        key={number}
                                        onClick={() => setPage(number)}
                                    >{number + 1}</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;