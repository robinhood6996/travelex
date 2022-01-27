import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const callouts = [
    {
        name: 'Desk and Office',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum autem minus similique accusamus hic necessitatibus beatae numquam labore, aspernatur quam dolor quaerat quia corporis facilis ipsum saepe repellendus, unde, sequi itaque esse error magni! Quod impedit accusamus id dolorem voluptate illum nesciunt quam atque optio, dolorum, quia aliquid praesentium.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
        author: 'Robin'
    },
    {
        name: 'Self-Improvement',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum autem minus similique accusamus hic necessitatibus beatae numquam labore, aspernatur quam dolor quaerat quia corporis facilis ipsum saepe repellendus, unde, sequi itaque esse error magni! Quod impedit accusamus id dolorem voluptate illum nesciunt quam atque optio, dolorum, quia aliquid praesentium.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
        author: 'Robin'
    },
    {
        name: 'Travel',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum autem minus similique accusamus hic necessitatibus beatae numquam labore, aspernatur quam dolor quaerat quia corporis facilis ipsum saepe repellendus, unde, sequi itaque esse error magni! Quod impedit accusamus id dolorem voluptate illum nesciunt quam atque optio, dolorum, quia aliquid praesentium.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        author: 'Robin'
    },
    {
        name: 'Travel d',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum autem minus similique accusamus hic necessitatibus beatae numquam labore, aspernatur quam dolor quaerat quia corporis facilis ipsum saepe repellendus, unde, sequi itaque esse error magni! Quod impedit accusamus id dolorem voluptate illum nesciunt quam atque optio, dolorum, quia aliquid praesentium.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        author: 'Robin'
    },
]

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5099/blogs')
            .then(res => {
                setBlogs(res.data);
            }).catch(err => alert(err.message))
    }, [])
    return (
        <div className='col-span-2'>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                        <h2 className="text-2xl font-extrabold text-gray-900">Blogs</h2>

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            {blogs.map((blog) => (
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
                                                <ReactStars
                                                    count={blog.rating}
                                                    size={24}
                                                    activeColor="#ffd700"
                                                />
                                            </h2>
                                        </div>
                                        <div className='mt-3 '>
                                            <h2 className='font-base'>Location: <span className='font-bold'>{blog.location}</span></h2>
                                        </div>
                                        <div className='mt-3 '>
                                            <h2 className='font-base'>Author: <span className='font-bold'>{blog.author}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;