"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CustomSwiperProps {
  children: ReactNode[];
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  autoplayDelay?: number;
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  centeredSlides?: boolean;
  className?: string;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number | "auto";
      spaceBetween?: number;
    };
  };
}

const CustomSwiper = ({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  autoplayDelay = 3000,
  navigation = false,
  pagination = false,
  loop = true,
  centeredSlides = false,
  className = "",
  breakpoints = {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}: CustomSwiperProps) => {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={
          navigation
            ? {
                nextEl: `.swiper-next-${className.replace(/\s+/g, "-")}`,
                prevEl: `.swiper-prev-${className.replace(/\s+/g, "-")}`,
              }
            : false
        }
        pagination={
          pagination
            ? {
                clickable: true,
                el: `.swiper-pagination-${className.replace(/\s+/g, "-")}`,
              }
            : false
        }
        loop={loop}
        centeredSlides={centeredSlides}
        autoplay={
          autoplayDelay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        grabCursor={true}
        className={`!pb-0 ${className}`}
        breakpoints={breakpoints}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {(navigation || pagination) && (
        <div className="flex items-center justify-center gap-6 mt-20">
          {navigation && (
            <button
              className={`swiper-prev-${className.replace(
                /\s+/g,
                "-"
              )} cursor-pointer text-gray-500  hover:text-primary transition-colors`}
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {pagination && (
            <div
              className={`swiper-pagination-${className.replace(
                /\s+/g,
                "-"
              )} !static !w-auto !flex !items-center !justify-center !gap-2 !m-0`}
            ></div>
          )}

          {navigation && (
            <button
              className={`swiper-next-${className.replace(
                /\s+/g,
                "-"
              )} cursor-pointer text-gray-400 hover:text-primary transition-colors`}
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSwiper;
