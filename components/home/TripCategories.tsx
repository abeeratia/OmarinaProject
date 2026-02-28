import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import CategoryCard from "../ui/CategoryCard";
import { TRIP_CATEGORIES } from "../../constants/data";

const TripCategories = () => {
  return (
    <section className="py-6 overflow-hidden">
      <Container>
        <SectionHeading
          title="Trip Categories"
          subtitle="Explore trips that suit every mood and adventure"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Group into columns for specific layout requirement */}
          <div className="flex flex-col gap-5">
            <CategoryCard {...TRIP_CATEGORIES[0]} />
            <CategoryCard {...TRIP_CATEGORIES[1]} />
          </div>

          <div className="flex flex-col gap-5">
            <CategoryCard {...TRIP_CATEGORIES[2]} />
            <CategoryCard {...TRIP_CATEGORIES[3]} />
          </div>

          <div className="flex flex-col gap-5">
            <CategoryCard {...TRIP_CATEGORIES[4]} />
            <CategoryCard {...TRIP_CATEGORIES[5]} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TripCategories;
