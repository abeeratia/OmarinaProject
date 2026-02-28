"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import CustomSwiper from "../ui/CustomSwiper";
import { TESTIMONIALS } from "../../constants/data";

const Testimonials = () => {
  return (
    <section className="pt-6 pb-20 overflow-hidden">
      <Container>
        <SectionHeading
          title="What Our Clients Say About Us"
          subtitle="Hear from our satisfied customers and see why they love our services"
        />

        <div className="px-1 py-10">
          <CustomSwiper
            navigation={true}
            pagination={true}
            centeredSlides={true}
            className="testimonial-swiper"
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 15 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </CustomSwiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
