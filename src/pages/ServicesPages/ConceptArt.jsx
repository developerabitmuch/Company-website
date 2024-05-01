import React from "react";
import transition from "../../transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { projects } from "../../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

const ConceptArt = () => {
  const { name, portfolio } = projects[0];

  return (
    <div className=" mx-auto px-4 min-h-screen pt-12">
      {/* Heading of the portfolio */}
      <h1 className="pt-24 pb-2 xl:text-5xl lg:text-4xl text-xl text-center font-poppins font-semibold  mb-10 blue-gradient_text">
        {name}
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
        {portfolio.map((picture) => (
          <SwiperSlide key={picture}>
            <Link to={"/contact"}>
              <img src={picture} alt={picture} className="hover:scale-y-100" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default transition(ConceptArt);
