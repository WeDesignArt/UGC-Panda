import React from "react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full relative text-center lg:py-12 mb-14">
      <article className="inline-flex gap-6 flex-col items-center justify-center w-full xl:w-[65vw] relative px-4 lg:px-0 z-10">
        <h1 className="lg:text-[4.1vw] text-5xl font-bold uppercase leading-none">
          Where Brands and <span className="text-gradient">Creators</span> Meet
          to Tell <span className="text-gradient">Authentic</span> Stories
        </h1>

        <p className="w-full lg:w-1/2">
          Discover UGC Panda - The Leading UGC Platform in the Middle East where we connect advertisers with talented content creators.
        </p>

        <div className="flex justify-center md:justify-end gap-2 md:gap-3 w-xs mx-auto">
          <div className="rounded-full p-[1.2px] gradient-main w-1/2 inline-flex">
            <Button
              className="rounded-full w-full  bg-white text-black transition text-xs md:text-sm hover:text-white gradient-main-hover"
              asChild
            >
              <Link href="/account-type">Join Us</Link>
            </Button>
          </div>
          <Button
            className=" rounded-full w-1/2 inline-flex text-white gradient-main hover:opacity-90 transition text-xs md:text-sm"
            asChild
          >
            <Link href="/account-type">Explore Creators</Link>
          </Button>
        </div>
      </article>

      <section className="pt-20 relative w-full">
        <div className="lg:w-[220px] lg:h-[430px] lg:scale-105 lg:top-auto frame absolute top-0 left-1/2 z-10 -translate-x-1/2  h-[640px] w-[330px] mx-auto scale-[.7]">
          <div className="w-[95%] h-full relative mx-auto rounded-[40px] overflow-clip shadow-[0_0_15px_2px_rgb(0,0,0,35%)]">
            <video
              src="/hero-video.mp4"
              poster="/poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg img-full"
            />
          </div>

          <div className="absolute left-0 top-0 w-full h-full z-10">
            <Image
              src="/mobileFrame.png"
              alt="frame"
              sizes="100vw"
              width={0}
              height={0}
              className="img-full"
            />
          </div>
        </div>

        <Image
          src="/mobile_shadow.png"
          alt="shadow"
          sizes="100vw"
          width={0}
          height={0}
          className="absolute z-[2] left-1/2 -translate-x-1/2 lg:top-[70px] top-[80px] w-[500px] lg:w-[600px] lg:h-[490px] h-[500px] opacity-90 blur-md"
        />

        <InfiniteSlider gap={66}>
          <Image
            src="/image-8.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px]"
            sizes="100vw"
          />
          <Image
            src="/image-9.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px] mt-14"
            sizes="100vw"
          />
          <Image
            src="/image-10.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px]"
            sizes="100vw"
          />
          <Image
            src="/image-11.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px] mt-14"
            sizes="100vw"
          />
          <Image
            src="/image-12.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px]"
            sizes="100vw"
          />
          <Image
            src="/image-13.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px] mt-14"
            sizes="100vw"
          />
          <Image
            src="/image-8.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px]"
            sizes="100vw"
          />
          <Image
            src="/image-9.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px] mt-14"
            sizes="100vw"
          />
          <Image
            src="/image-10.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px]"
            sizes="100vw"
          />
          <Image
            src="/image-11.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px] mt-14"
            sizes="100vw"
          />
          <Image
            src="/image-12.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px]"
            sizes="100vw"
          />
          <Image
            src="/image-13.png"
            alt="img"
            width={0}
            height={0}
            className="w-[200px] h-[380px] mt-14"
            sizes="100vw"
          />
        </InfiniteSlider>
      </section>

      <div className="absolute left-1/6 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
      <div className="absolute rightt-1/6 top-1/2 inline-flex radial-blur lg:size-80 z-0"></div>
    </section>
  );
}

export default Hero;
