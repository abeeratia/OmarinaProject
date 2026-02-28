import Image from "next/image";
import { Category } from "../../types";

const CategoryCard = ({ name, image, height }: Category) => (
  <div
    className={`relative rounded-xl overflow-hidden group cursor-pointer shadow-bottom ${height}`}
  >
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6">
      <h3 className="text-white font-light text-lg">{name}</h3>
    </div>
  </div>
);

export default CategoryCard;
