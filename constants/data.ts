import { Trip, Category, Testimonial, NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Book Trip", href: "/book-trip" },
  { label: "Rent Boat", href: "/rent-boat" },
  { label: "Own a Vessel", href: "/own-vessel" },
];

export const HERO_DATA = {
  title: "Explore the Red Sea Like Never Before",
  searchPlaceholder: "Search for Trips, Boats",
  subtext:
    "From private boats to island trips, your sea adventure starts here.",
  ctaText: "Find Your Perfect Match",
};

export const LUXURY_TRIPS: Trip[] = [
  {
    id: 1,
    image: "/LuxuryTripsNearYou.svg",
    title: "VIP Trip",
    badge: "Top Rated",
    rating: "4.96",
    reviews: "572",
    time: "9 am : 1 am",
    features: ["Welcome Drink", "Lunch & Drink"],
    capacity: "8",
    location: "Orange Bay",
    price: "150",
  },
  {
    id: 2,
    image: "/LuxuryTripsNearYou.svg",
    title: "Classic Trip",
    badge: "Most Booked",
    rating: "4.86",
    reviews: "677",
    time: "9 am : 1 am",
    features: ["Welcome Drink", "Lunch & Drink"],
    capacity: "8",
    location: "Orange Bay",
    price: "150",
  },
  {
    id: 3,
    image: "/LuxuryTripsNearYou.svg",
    title: "VIP Trip",
    badge: "Top Rated",
    rating: "4.96",
    reviews: "572",
    time: "9 am : 1 am",
    features: ["Welcome Drink", "Lunch & Drink"],
    capacity: "8",
    location: "Orange Bay",
    price: "150",
  },
  {
    id: 4,
    image: "/LuxuryTripsNearYou.svg",
    title: "VIP Trip",
    badge: "Top Rated",
    rating: "4.96",
    reviews: "572",
    time: "9 am : 1 am",
    features: ["Welcome Drink", "Lunch & Drink"],
    capacity: "8",
    location: "Orange Bay",
    price: "150",
  },
  {
    id: 5,
    image: "/LuxuryTripsNearYou.svg",
    title: "Luxury Cruise",
    badge: "Top Rated",
    rating: "5.0",
    reviews: "120",
    time: "10 am : 6 pm",
    features: ["Welcome Drink", "Lunch & Drink"],
    capacity: "12",
    location: "El Gouna",
    price: "350",
  },
  {
    id: 6,
    image: "/LuxuryTripsNearYou.svg",
    title: "Sunset Sailing",
    badge: "Most Booked",
    rating: "4.98",
    reviews: "85",
    time: "4 pm : 8 pm",
    features: ["Welcome Drink", "Lunch & Drink"],
    capacity: "6",
    location: "Giftun Island",
    price: "90",
  },
];

export const TRIP_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Sunset Cruises",
    image: "/SunsetCruises.svg",
    height: "h-[260px]",
  },
  {
    id: 2,
    name: "Family Trips",
    image: "/FamilyTrips.svg",
    height: "h-[220px]",
  },
  {
    id: 3,
    name: "Fishing Tours",
    image: "/FishingTours.svg",
    height: "h-[330px]",
  },
  {
    id: 4,
    name: "Adventure Trips",
    image: "/AdventureTrips.svg",
    height: "h-[150px]",
  },
  {
    id: 5,
    name: "Party Boats",
    image: "/PartyBoats.svg",
    height: "h-[150px]",
  },
  {
    id: 6,
    name: "Relaxing Cruises",
    image: "/RelaxingCruises.svg",
    height: "h-[330px]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Leo",
    title: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magnaLorem ipsum dolor sit amet.",
    rating: 4,
  },
  {
    id: 2,
    name: "Leo",
    title: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magnaLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 3,
    name: "Leo",
    title: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magnaLorem ipsum dolor sit amet.",
    rating: 4,
  },
  {
    id: 4,
    name: "Leo",
    title: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magnaLorem ipsum dolor sit amet.",
    rating: 5,
  },
  {
    id: 5,
    name: "Leo",
    title: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magnaLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4,
  },
  {
    id: 6,
    name: "Leo",
    title: "It was a very good experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magnaLorem ipsum dolor sit amet.",
    rating: 5,
  },
];

// Boat data for RentBoat
export const BOATS = [1, 2, 3, 4, 5, 6];
