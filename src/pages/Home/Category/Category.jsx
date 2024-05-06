import React from "react";
//import from the swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

//import image
import slide01 from "../../../assets/home/slide1.jpg";
import slide02 from "../../../assets/home/slide2.jpg";
import slide03 from "../../../assets/home/slide3.jpg";
import slide04 from "../../../assets/home/slide4.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>

      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"order online"}
      ></SectionTitle>

      <Swiper
        autoplay
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <img src={slide01} />
          <h3
            className="text-4xl uppercase text-center -mt-16  -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide02} />
          <h3
            className="text-4xl uppercase text-center -mt-16  -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide03} />
          <h3
            className="text-4xl uppercase text-center -mt-16  -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide04} />
          <h3
            className="text-4xl uppercase text-center -mt-16 -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide01} />
          <h3
            className="text-4xl uppercase text-center -mt-16  -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide02} />
          <h3
            className="text-4xl uppercase text-center -mt-16  -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide03} />
          <h3
            className="text-4xl uppercase text-center -mt-16  -ml-12 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
