"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import BoatCard from "../ui/BoatCard";
import CustomSwiper from "../ui/CustomSwiper";
import { BOATS } from "../../constants/data";

const RentBoat = () => {
  return (
    <section className="py-12 overflow-hidden">
      <Container>
        <SectionHeading
          title="Rent a Boat for Your Next Sea Trip"
          subtitle="Private and group trips tailored to your journey"
        />

        <div className="px-1">
          <CustomSwiper
            className="boat-swiper"
            autoplayDelay={3500}
            navigation={false}
            pagination={false}
          >
            {BOATS.map((id) => (
              <BoatCard key={id} id={id} />
            ))}
          </CustomSwiper>
        </div>
      </Container>
    </section>
  );
};

export default RentBoat;
