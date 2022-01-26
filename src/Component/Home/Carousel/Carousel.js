import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Carousel.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation, Parallax
} from 'swiper';
//Images
import b1 from '../../../Images/carousel/1.jpg';





// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, Parallax]);

const Carousel = () => {
    return (
        <>
            <Swiper spaceBetween={30} centeredSlides={true} parallax={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide className=" parallax-bg slide1">
                    {/* <div className="title" data-swiper-parallax="-300">Slide 1</div>
                    <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                            magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                            quis feugiat.</p>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide className=" parallax-bg slide2"></SwiperSlide>
                <SwiperSlide className=" parallax-bg slide3"></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;