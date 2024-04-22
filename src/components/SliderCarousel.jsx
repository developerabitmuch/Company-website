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
      state: { name: project.name, portfolio: project.portfolio }, // pora project hi send krdia hai hmne as a state aur location mein get krrhe hain hm whn pe yh project
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
          <SwiperSlide key={project.name}>
            <div
              onClick={() => handleClickToNavigate(project)}
              className="py-5 min-w-fit m-20 flex flex-col items-center justify-center xl:min-h-[800px] lg:min-h-[600px] bg-gradient-to-t from-blue-800 to-purple-800 rounded-md shadow-lg"
            >
              <div className="block-container xl:h-[450px] lg:h-[400px] md:h-[450px] sm:h-[430px] px-4 flex items-center justify-center ">
                {/* <div className={`btn-bac rounded-xl ${project.theme}`} /> */}
                <div className="btn-fro rounded-xl flex h-[100%] items-center justify-center shadow-md">
                  <img
                    src={project.coverImg}
                    alt="Project Icon"
                    className="object-contain rounded-lg p-4"
                  />
                </div>
              </div>
              <div className="mt-2 mx-2 text-center flex flex-col  items-center justify-center">
                <h4 className="lg:text-2xl md:text-xl font-poppins font-semibold mt-8 text-white">
                  {project.name}
                </h4>
                <p className="flex text-center md:mx-2 xl:mx-16 mt-2 text-white">
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
