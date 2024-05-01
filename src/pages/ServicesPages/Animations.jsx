import React, { useState } from "react";
import transition from "../../transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { projects } from "../../constants";
import Modal from "../../components/Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Animations = () => {
  const { name, portfolio } = projects[1];

  // Making State for the image of the modal to be used so as we use them according to our need
  const [modalImage, setModalImage] = useState(null);

  // opening this model and setting the image
  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  // closing this model and removing the image
  const closeModal = () => {
    setModalImage(null);
  };

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
        {portfolio.map((picture, index) => (
          <SwiperSlide key={index}>
            <img
              src={picture}
              alt={picture}
              className="hover:scale-y-100 cursor-pointer"
              onClick={() => openModal(picture)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {modalImage && <Modal imageUrl={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default transition(Animations);
