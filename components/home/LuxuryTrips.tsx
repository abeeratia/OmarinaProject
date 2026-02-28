"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TripCard from "../ui/TripCard";
import CustomSwiper from "../ui/CustomSwiper";
import { LUXURY_TRIPS } from "../../constants/data";

const LuxuryTrips = () => {
  return (
    <section className="py-6 overflow-hidden">
      <Container>
        <SectionHeading
          title="Luxury Trips Near You"
          subtitle="Sail, relax, and enjoy unforgettable moments"
        />

        <div className="px-1">
          <CustomSwiper navigation={false} pagination={false}>
            {LUXURY_TRIPS.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </CustomSwiper>
        </div>
      </Container>
    </section>
  );
};

export default LuxuryTrips;
CustomSwiper;
