import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-8 py-8 md:gap-[5%] gap-8 md:px-0 px-4 items-center">
          <div className="col-span-4 relative">
            <Image
              src="/left-img.jpg"
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
            <div className="play absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 z-[3]">
              <Image
                src="/icon-play.svg"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="img-full"
              />
            </div>

            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-white to-transparent z-0"></div>
          </div>

          <div className="col-span-4">
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

            {/* 
              <ul className="list-disc">
               <li>Unlock a new revenue stream by reselling UGC to clients.</li>
               <li>Source UGC directly, without waiting on client delays.</li>
               <li>Streamline and scale your entire UGC production workflow.</li>
              </ul>
               */}

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
