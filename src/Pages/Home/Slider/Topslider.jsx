import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/image/Image-1.jpg'
import img2 from '../../../assets/image/img-6.jpg'
import img3 from '../../../assets/image/image 3.jpg'
import img4 from '../../../assets/image/image-4.jpg'
import img5 from '../../../assets/image/image-5.jpg'


const Topslider = () => {
    return (
        <div>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt="" />
        <p>Do their practice Task </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <p>Group Work </p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        <p>Journey Starting here</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        <p>Learning at Classes</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        <p>Practice makes a best learner</p>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Topslider;