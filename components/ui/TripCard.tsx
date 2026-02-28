import Image from "next/image";
import { Trip } from "../../types";
import { WelcomeDrink, LunchIcon } from "./FeatureIcons";

const TripCard = ({
  image,
  title,
  badge,
  rating,
  reviews,
  time,
  features,
  location,
  price,
}: Trip) => {
  return (
    <div className="bg-white rounded-card overflow-hidden border border-gray-100 shadow-bottom  transition-all group h-full">
      {/* Image & Badges Container */}
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Top Badge */}
        {badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-white z-20 ${
              badge === "Top Rated" ? "text-primary" : "text-secondary"
            }`}
          >
            {badge}
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-0 right-4 translate-y-1/2 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-xl shadow-black/5 border border-gray-100 z-30">
          <span className="text-yellow-400 text-xs mt-px">★</span>
          <span className="text-dark text-[11px] font-bold">{rating}</span>
          <span className="text-gray-400 text-[9px] font-light">
            ({reviews} reviews)
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between pt-6">
        <div>
          <h3 className="text-lg font-medium text-dark mb-1">{title}</h3>
          <p className="text-gray-400 text-xs font-light mb-4">From {time}</p>

          {/* Features Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, idx) => {
              const label = feature.toLowerCase();
              let icon = <div className="w-4 h-4 bg-primary/10 rounded-sm" />;

              if (label.includes("welcome drink"))
                icon = <LunchIcon size={20} className="text-gray-500" />;
              else if (label.includes("lunch"))
                icon = <WelcomeDrink size={20} className="text-gray-500" />;

              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-1"
                >
                  {icon}
                  <span className="text-[11px] font-medium text-gray-text capitalize">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Meta Info*/}
        <div className="flex items-center gap-4 text-gray-text text-xs font-light ">
          <span className="text-gray-500">8 People</span>
          <p className="flex items-center gap-1">
            <span className="text-gray-600 text-xl">•</span>
            <span className="text-gray-500">Arrival at {location}</span>
          </p>
        </div>

        {/* Price  */}
        <div className="flex items-end gap-1 mt-2 pt-1">
          <span className="text-xl font-bold text-[#F37021]">{price} €</span>
          <span className="text-sm text-gray-text py-1">/person half day</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
