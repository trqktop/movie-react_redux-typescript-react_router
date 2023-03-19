import { Swiper, SwiperSlide } from "swiper/react";
import Poster from "../Poster/Poster";
import { Pagination, Navigation, EffectFade, Grid } from "swiper";
import './filmsCompilation.css'


const FilmsCompilation = () => {
    return (
        <Swiper
            slidesPerView={window.innerWidth / 250}
            spaceBetween={30}
            pagination={{
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="films-compilation"
        >
            {[...new Array(15)].map((item, index) => <SwiperSlide><Poster /></SwiperSlide>)}
        </Swiper>
    )
}

export default FilmsCompilation