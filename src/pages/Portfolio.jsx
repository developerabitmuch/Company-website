import React from "react";
import transition from "../transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { folioport } from "../constants";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./portfolio.css";

const Portfolio = (props) => {
  // yh hmare pass arha hai
  const { location } = props;
  const portfolio = location && location.state ? location.state.portfolio : [];

  console.log("Portfolio coming from projects:", portfolio);

  return (
    <div className=" max-w-screen-2xl mx-auto px-4 py-16 h-screen ">
      {/* Heading of the portfolio */}
      <h1 className="py-20 text-5xl text-center font-poppins font-semibold ">
        Creative Art
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        navigation
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {folioport.map((picture) => (
          <SwiperSlide key={picture} className="pb-28">
            <img src={picture} alt={picture} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper wala Slider bnarhe hain portfolio ko showcase krne ke liye*/}
    </div>
  );
};

export default transition(Portfolio);
