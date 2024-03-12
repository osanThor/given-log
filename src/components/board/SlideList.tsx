"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import BoardItem from "./BoardItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper";
import { v4 as uuid } from "uuid";

export default function SlideList({ list }: { list: Array<any> }) {
  return (
    <div className="w-full h-full py-2 mb-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        className="w-full h-full !py-6 mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          465: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {list.map((el) => (
          <SwiperSlide key={uuid()} className="max-w-full h-full flex">
            <BoardItem item={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
