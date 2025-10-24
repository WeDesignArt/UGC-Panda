"use client";

import Hero from "./hero/page";

import MarqueeSection from "./marquee/page";


import CreatorsMarquee from "@/components/creators-marquee";


import ReusableSection from "@/components/ReusableSection";
import HomeBrands from "@/components/home-brands";
import HomeUgcVideo from "@/components/home-ugc-video";
import HomePlateformTiktok from "@/components/home-plateform-tiktok";
import HomePlateformInsta from "@/components/home-plateform-insta";
import HomePlateformYT from "@/components/home-plateform-yt";
import PricingComparator from "@/components/pricing-comparator"
import ContentSlider from "@/components/content-slider";

export default function Home() {
  return (
    <main>
      {/* hero  */}
      <Hero />

      {/* marquee */}
      <MarqueeSection />

      {/* us  */}
      <ReusableSection
        
        highlight1="Leading "
        title=" the Next Wave of"
        highlight="Content"
        title2="In mena "
        description="At Content Creators, we believe creators are the heartbeat of
                the Middle East’s digital future. We’re not just building a
                platform — we’re building a movement where local voices shape
                global stories"
        description1=" Our mission is to empower creators across MENA to turn their
                passion into income, while helping brands connect with audiences
                through content that feels authentic, relatable, and culturally
                relevant. From Riyadh to Cairo to Dubai, we’re creating space
                for real people to inspire real impact."
        imageSrc="/us.png"
        imageAlt="UGC Panda"
        blurTopLeft
        blurBottomRight
        reverse={true} // true = image right, text left | false = image left, text right
      />

      {/* 
      <section className="relative w-full lg:pt-28">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center">
            <div className="md:w-1/2 w-full md:order-2">
              <Image
                src="/us.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
            </div>

            <div className="md:w-1/2 w-full lg:pr-8">
              <Link href="/" className="btn-pill">
                Us
              </Link>

              <h2 className="section-title mb-4">
                <span className="text-gradient">Leading</span> the Next Wave of{" "}
                <span className="text-gradient"> Content</span> in MENA
              </h2>

              <p className="mb-4">
                At Content Creators, we believe creators are the heartbeat of
                the Middle East’s digital future. We’re not just building a
                platform — we’re building a movement where local voices shape
                global stories
              </p>

              <p>
                Our mission is to empower creators across MENA to turn their
                passion into income, while helping brands connect with audiences
                through content that feels authentic, relatable, and culturally
                relevant. From Riyadh to Cairo to Dubai, we’re creating space
                for real people to inspire real impact.
              </p>

              <Button
                className="btn-fill gradient-main px-5 py-1 md:px-10 md:py-2 rounded-full text-white gradient-main hover:opacity-90 transition-[opacity] text-xs md:text-sm mt-6"
                asChild
              >
                <Link href="/">Read More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 size-40 z-0"></div>
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 size-40 z-0"></div>
      </section> 
      */}

      {/* brands */}
      <HomeBrands />

      {/* content right */}
      <HomeUgcVideo />

      {/* plateform */}
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-8/12 w-full text-center">
              

              <h2 className="section-title mb-4">
                Get ahead <span className="text-gradient">the game</span> with{" "}
                <span className="text-gradient">influencer</span> marketing{" "}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* tiktok  */}
      <HomePlateformTiktok />

      {/* instagram */}
      <HomePlateformInsta />

      {/* youtube  */}
      <HomePlateformYT />

      {/* creators */}
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-12/12 w-full text-center">


              <h2 className="section-title mb-8">
                Create <span className="text-gradient">Content</span>. Build{" "}
                <span className="text-gradient">Connections</span>. Earn{" "}
                <span className="text-gradient">Income</span>
              </h2>
              <p className="mb-4">
                You bring the creativity, we bring the brands. At UGC Panda,
                creators across the Middle East can turn their passion for
                content into steady income by producing videos, photos, and
                stories for leading regional and global brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CreatorsMarquee />

      <ContentSlider />

      {/* feedback slider */}
      {/* <Clients /> */}

      <PricingComparator />
    </main>
  );
}
