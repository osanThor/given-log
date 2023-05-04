"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import BoardItem from "./BoardItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper";
import uuid from "react-uuid";

const Array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function SlideList({ list }: { list: Array<any> }) {
  return (
    <div className="w-full py-2 mb-10 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={32}
        className="w-full !py-6 mySwiper min-h-max"
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
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {list.map((el, idx) => (
          <SwiperSlide key={uuid()} className="max-w-max">
            <BoardItem item={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
