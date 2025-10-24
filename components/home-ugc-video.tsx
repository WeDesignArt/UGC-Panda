import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

function HomeUgcVideo() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative w-full lg:pt-18 overflow-clip">
      <div className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-8 py-8 md:gap-[5%] gap-8 md:px-0 px-4 items-center pt-18">
          <div className="lg:col-span-5 col-span-1 relative">
            <Image
              src="/logo-panda-borderless.svg"
              alt="img"
              width={0}
              height={0}
              className="absolute lg:-right-7 lg:-top-24 -top-12 -right-3 scale-x-[-1] rotate-[15deg] lg:size-40 size-20 z-10"
            />
            <Image
              src="/left-img.jpg"
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
            <div
              onClick={() => setOpen(true)}
              className="play cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 z-[3]"
            >
              <Image
                src="/icon-play.svg"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="img-full"
              />
            </div>

            {/* Lightbox with YouTube */}
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              plugins={[Video]}
              slides={[
                {
                  type: "video",
                  width: 1280,
                  height: 720,
                  poster: "/left-img.jpg", // preview image before play
                  sources: [
                    {
                      src: "/hero-video.mp4", // ✅ local file
                      type: "video/mp4",
                    },
                  ],
                },
              ]}
              render={{
                buttonPrev: () => null, // always hide left arrow
                buttonNext: () => null, // always hide right arrow
              }}
            />

            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-white to-transparent z-0"></div>
          </div>

          <div className="lg:col-span-3 col-span-1">
            <h2 className="section-title mb-4">
              UGC <span className="text-gradient">Videos</span> at Scale,{" "}
              <span className="text-gradient">Powered</span> by{" "}
              <span className="text-gradient">Data</span>
            </h2>

            <p className="mb-4">
              We help agencies scale high-performing UGC across client campaigns
              with vetted creators, data-driven briefs, and workflows optimized
              for ROAS and CAC.
            </p>

            <Button
              className="btn-fill gradient-main px-5 py-1 md:px-10 md:py-2 rounded-full text-white gradient-main hover:opacity-90 transition-[opacity] text-xs md:text-sm mt-6"
              asChild
            >
              <Link href="/">Discover More</Link>
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HomeUgcVideo;
