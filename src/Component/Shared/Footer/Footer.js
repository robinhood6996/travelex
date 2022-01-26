import React from 'react';

const Footer = () => {
    return (
        <div className='border-t-2'>
            <div className=" container mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-4 mt-2 ">
                <div className='p-5'>
                    <div className="logo">
                        <h2 className='text-4xl text-violet-500 font-extrabold '>Travelex</h2>
                        <h3 className='text-black font-bold'>Explore the world!</h3>
                    </div>
                    <div className='mt-5'>
                        <h2>Follow Us-</h2>
                    </div>
                </div>
                <div>
                    <div className="destination p-5">
                        <h2 className='font-bold text-2xl text-violet-500'>Top Destination</h2>
                        <div className="footer-detination-menu mt-3">
                            <ul>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>New York City</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Paris</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Italy</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Japan</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>India</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Bangladesh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="interest p-5">
                        <h2 className='font-bold text-2xl text-violet-500'>Travel Interest</h2>
                        <div className="travel-interest-menu mt-3">
                            <ul>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Adventure Travel</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Family Holidays</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Honeymoon & Romance</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Travel on Budget</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Wildlife & Nature</a></li>
                                <li className='pt-3'><a href="" className='font-semibold text-gray-500'>Road Trips</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;