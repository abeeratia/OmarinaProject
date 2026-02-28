export interface Trip {
  id: number;
  image: string;
  title: string;
  badge: "Top Rated" | "Most Booked";
  rating: string;
  reviews: string;
  time: string;
  features: string[];
  capacity: string;
  location: string;
  price: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  height: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Boat {
  id: number;
  name: string;
  image: string;
  badge?: string;
  type: string;
}
