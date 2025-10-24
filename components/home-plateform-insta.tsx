import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function HomePlateformInsta() {
  return (
    <section className="relative w-full lg:pt-18 pt-24 ">
      <div className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 py-8 md:gap-[2%] gap-8 md:px-0 px-4 items-center pt-18 relative">
          <div className="relative z-10">
            <Image
              src="/insta-img.png"
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>

          <div className="relative z-10">
            <Image
              src="/icon-insta.svg"
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="size-20 mb-6"
            />
            <h2 className="sub-title mb-4">Instagram influencer</h2>
            <p className="mb-4">
              Stand out with authentic Reels and Stories that blend seamlessly
              into the feed and connect with your community.
            </p>
            <Button
              className="btn-fill gradient-main px-5 py-1 md:px-10 md:py-2 rounded-full text-white gradient-main hover:opacity-90 transition-[opacity] text-xs md:text-sm mt-6"
              asChild
            >
              <Link href="/">Discover More</Link>
            </Button>
          </div>

          <Image
            src="/logo-panda-borderless.svg"
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            className="inline-block absolute lg:w-[50%] w-[80%] lg:h-[50%] lg:left-[44%] lg:top-54 top-7/12 rotate-[15deg] z-0 opacity-5"
          />
        </section>
      </div>

      <div className="absolute left-3/12 top-9/12 inline-flex radial-blur lg:size-70 size-40 z-0"></div>
    </section>
  );
}

export default HomePlateformInsta;
