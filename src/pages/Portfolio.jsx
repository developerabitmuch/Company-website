import React from "react";
import transition from "../transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./portfolio.css";
import { Link, useLocation } from "react-router-dom";

const Portfolio = () => {
  // useLocation hook se hmare pass data ajaega jo hm send krte hain useNavigate se
  const {
    state: { name, portfolio },
  } = useLocation();

  // const name = location.state.project.name;
  // const portfolio = location.state.project.portfolio;
  console.log("Name Coming :", name);
  console.log("Portfolio Coming :", portfolio);

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

export default transition(Portfolio);
