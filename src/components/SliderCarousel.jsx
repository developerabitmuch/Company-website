import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const SliderCarousel = ({ projects }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("projects portfolio", projects[1].portfolio);
  }, [projects]);

  // Define handleClickToNavigate function outside of the component
  const handleClickToNavigate = (project) => {
    navigate("/portfolio", {
      state: { project: project }, // pora project hi send krdia hai hmne as a state aur location mein get krrhe hain hm whn pe yh project
    });
  };

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
      <div className="flex flex-col items-center justify-center">
        {projects.map((project) => (
          <SwiperSlide
            key={project.name}
            onClick={() => handleClickToNavigate(project)}
          >
            <div className="min-w-fit m-20 flex flex-col items-center justify-center min-h-[800px] bg-gradient-to-t from-blue-800 to-purple-800 rounded-md shadow-lg">
              <div className="block-container h-[500px] w-[400px] rounded-full">
                <div className={`btn-bac rounded-xl ${project.theme}`} />
                <div className="btn-fro rounded-xl flex items-center justify-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col py-4 items-center justify-center">
                <h4 className="text-2xl font-poppins font-semibold mt-8 text-white">
                  {project.name}
                </h4>
                <p className="flex text-center mx-16 mt-6 text-white">
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default SliderCarousel;
