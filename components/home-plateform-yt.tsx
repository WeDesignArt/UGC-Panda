import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function HomePlateformYT() {
  return (
    <section className="relative w-full lg:pt-28 pt-24">
      <div className="container mx-auto">
        <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center relative">
          <div className="md:w-1/2 w-full md:order-2">
            <Image
              src="/yt-img.png"
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>

          <div className="md:w-1/2 w-full lg:pr-8 relative">
            <div className="relative z-[5]">
              <Image
                src="/icon-yt.svg"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="size-20 mb-6"
              />
              <h2 className="sub-title mb-4">YouTube influencer</h2>
              <p className="mb-4">
                Tap into creators who deliver in-depth product videos and
                engaging Shorts that inspire and convert.
              </p>
              <Button
                className="btn-fill gradient-main px-5 py-1 md:px-10 md:py-2 rounded-full text-white gradient-main hover:opacity-90 transition-[opacity] text-xs md:text-sm mt-6"
                asChild
              >
                <Link href="/">Discover More</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/logo-panda-borderless.svg"
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            className="inline-block absolute lg:w-[65%] w-[80%] lg:h-[65%] lg:-left-[20%] lg:top-30 top-7/12 rotate-[-15deg] z-0 opacity-5"
          />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 inline-flex radial-blur lg:size-80 size-40 z-0"></div>
    </section>
  );
}

export default HomePlateformYT;
