import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, EffectFade } from "swiper";
import './banner.css'


const Banner = () => {
    return (
        <Swiper
            pagination={{
                type: "bullets",
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper" >
            <SwiperSlide className="swiper__slide"><img className="swiper__image" src={"https://images.hdqwalls.com/download/the-last-of-us-part-2-4k-game-mo-2560x1700.jpg"} alt="ss" /></SwiperSlide>
            <SwiperSlide className="swiper__slide"><img className="swiper__image" src={'https://images.stopgame.ru/news/2020/04/04/RkWPIPV.jpg'} alt="ss" /></SwiperSlide>
            <SwiperSlide className="swiper__slide"><img className="swiper__image" src={"https://img.championat.com/s/1350x900/news/big/j/r/test-kto-ty-v-mire-the-last-of-us-ii_15917339412092588456.jpg"} alt="ss" /></SwiperSlide>
        </Swiper>
    )

}

export default Banner