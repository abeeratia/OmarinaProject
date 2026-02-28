import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LuxuryTrips from "@/components/home/LuxuryTrips";
import TripCategories from "@/components/home/TripCategories";
import RentBoat from "@/components/home/RentBoat";
import ReadyToStart from "@/components/home/ReadyToStart";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-dark overflow-x-hidden">
      <Navbar />

      <Hero />

      <div className="relative z-0 bg-white">
        <LuxuryTrips />
        <TripCategories />
        <RentBoat />
        <ReadyToStart />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
