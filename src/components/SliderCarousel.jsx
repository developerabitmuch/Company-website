import React from "react";
// importing swiper components for carousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

import { NavLink } from "react-router-dom";
import { arrow } from "../assets/icons";
import {
  A11y,
  EffectCube,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const SliderCarousel = ({ projects }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* Projects to showcase */}
      <div className="flex flex-col  items-center justify-center">
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <NavLink
              to={{
                pathname: "/portfolio", // route krrhe hain hm yh
                state: { portfolio: project.portfolio }, //This is how we are actually sending the data
              }}
            >
              <div className=" min-w-fit m-20 flex flex-col items-center justify-center  min-h-[800px] bg-gradient-to-t from-blue-800  to-purple-800  rounded-md shadow-lg">
                <div className="block-container h-[500px] w-[400px] rounded-full">
                  <div className={`btn-bac rounded-xl ${project.theme}`} />
                  <div className="btn-fro rounded-xl flex items-center justify-center">
                    <img
                      src={project.iconUrl}
                      alt="Project Icon"
                      className=" object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* More information Regarding the project */}
                <div className="mt-5 flex flex-col py-4 items-center justify-center">
                  <h4 className="text-2xl font-poppins font-semibold mt-8 text-white">
                    {project.name}
                  </h4>
                  <p className="flex text-center  mx-16 mt-6 text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default SliderCarousel;
