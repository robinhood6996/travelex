import React from 'react';
import img from '../../../Images/carousel/3.jpg';
import ReactStars from "react-rating-stars-component";
const Sidebar = () => {
    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl p-2 bg-violet-600 text-white'>Top Rated Spot</h2>
            <div className="spot-collection">
                {/* Single Spot */}
                <div className="spot grid grid-cols-3 mt-5 ml-2 border-b-2 p-2">
                    <div className="spot-details col-span-2">
                        <h2 className='font-bold text-xl'>Newyork has wonder beauty</h2>
                        <h3 className='font-base'>Locaion: <span className='font-semibold'>USA</span></h3>
                        <h3 className='font-base'>Budget: <span className='font-semibold'>$500</span></h3>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="spot-img ">
                        <img src={img} style={{ width: '120px', borderRadius: '5px' }} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;