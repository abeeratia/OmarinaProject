"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex justify-center items-start  overflow-hidden pt-36 md:pt-44">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/ExploreTheRedSeaLikeNeverBefore.svg"
          alt="Red Sea Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content  */}
      <div className="relative pt-8 z-10 w-full max-w-[2000px] px-6 text-center text-white flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-lg max-w-[1200px] tracking-tighter">
          Explore the Red Sea Like Never <br className="hidden md:block" />{" "}
          Before
        </h1>

        <div className="w-full max-w-[650px] flex flex-col items-center gap-5 mb-8">
          {/* Search  */}
          <div className="w-full bg-white rounded-full p-1 flex items-center shadow-xl">
            <input
              type="text"
              placeholder="Search for Trips, Boats"
              className="flex-1 bg-transparent border-none text-dark px-4 sm:px-6 py-2 outline-none placeholder:text-gray-400 text-xs sm:text-sm font-medium"
            />
            <button className="bg-primary text-white px-6 sm:px-8 py-2.5 rounded-full font-medium text-[11px] sm:text-[12px] tracking-widest hover:bg-primary/90 transition-all ">
              Search
            </button>
          </div>

          <p className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide drop-shadow-md opacity-80">
            From private boats to island trips, your sea adventure starts here.
          </p>
        </div>

        {/*  Button */}
        <button className="bg-primary text-white px-8 sm:px-10 py-3 rounded-full text-xs sm:text-sm font-medium shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
          Find Your Perfect Match
        </button>
      </div>
    </section>
  );
};

export default Hero;
