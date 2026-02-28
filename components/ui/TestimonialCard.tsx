import { Testimonial } from "../../types";

const TestimonialCard = ({ name, title, content, rating }: Testimonial) => (
  <div className="testimonial-card bg-white border border-gray-100 p-8 rounded-card-lg shadow-bottom flex flex-col gap-4 h-full">
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-full bg-gray-200" />
      <div>
        <p className="font-bold text-dark">{name}</p>
        <div className="flex gap-1 text-primary text-xs">
          {[...Array(5)].map((_, idx) => (
            <span
              key={idx}
              className={idx < rating ? "opacity-100" : "opacity-30"}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
    <h4 className="font-medium text-dark">{title}</h4>
    <p className="text-gray-text text-sm leading-relaxed">{content}</p>
  </div>
);

export default TestimonialCard;
