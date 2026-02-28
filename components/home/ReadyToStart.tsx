import Image from "next/image";
import Container from "../ui/Container";

const ReadyToStart = () => {
  return (
    <section className="py-6">
      <Container>
        <div className="bg-dark rounded-sm overflow-hidden relative min-h-[450px] flex items-center">
         
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />

     
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/readyToGetStarted.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-12 py-16 gap-12">
            {/* Content */}
            <div className="flex flex-col gap-6 max-w-lg">
              <h2 className="text-4xl md:text-4xl font-light text-white">
                Ready To Get Started?
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Download The App Now And Enjoy A Fast And Easy Experience
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Image
                  src="/AppleStore.svg"
                  alt="App Store"
                  width={160}
                  height={48}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                />
                <Image
                  src="/GooglePlay.svg"
                  alt="Google Play"
                  width={160}
                  height={48}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            </div>

            {/* Phone  */}
            <div className="relative w-full lg:w-1/2 aspect-video max-w-md lg:max-w-none">
              <Image
                src="/ThreeMobiles.svg"
                alt="Mobile App"
                fill
                className="object-contain object-right transform lg:scale-125 origin-right"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReadyToStart;
