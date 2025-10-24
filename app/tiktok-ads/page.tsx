import ContentSlider from '@/components/content-slider'
import CreatorsMarquee from '@/components/creators-marquee'
import PricingComparator from '@/components/pricing-comparator'
import ReusableSection from '@/components/ReusableSection'
import React from 'react'
import ContentCard from './cards/cards'
import Divider from '@/components/Divider'
import Link from "next/link";
import LogoCloud from '@/components/logo-cloud'

function Tiktok() {
  return (
    <>

      <Divider
        title="Tik Tok"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/contact">Services</Link>
          </>
        }
      />
      <ReusableSection
        tag="TIKTOK UGC ADS, B2ACKED BY PERFORMANCE DATA"
        highlight1="TikTok Video "
        title=" ADS, Optimized to"
        highlight="Convert"
        //    title2="In mena "
        description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo 
                                consequat. Duis aute irure and dolor in reprehenderit."
        //                 description1=" Our mission is to empower creators across MENA to turn their
        //    passion into income, while helping brands connect with audiences
        //    through content that feels authentic, relatable, and culturally
        //    relevant. From Riyadh to Cairo to Dubai, we’re creating space
        //    for real people to inspire real impact."
        imageSrc="/hero-tiktok.png"
        imageAlt="UGC Panda"
        blurTopLeft

        reverse={true} // true = image right, text left | false = image left, text right
        buttonText="Explore Creator For Free"
        buttonLink="/"
      />

      <LogoCloud />

      <ReusableSection

        highlight1="Leading "
        title=" the Next Wave of"
        highlight="Content"
        title2="In mena "
        description="At UGC Panda, we believe creators are the heartbeat of the Middle
         East’s digital future. We’re not just building a platform — we’re building a 
         movement where local voices shape global stories"
        description1=" Our mission is to empower creators across MENA to turn their
                   passion into income, while helping brands connect with audiences
                   through content that feels authentic, relatable, and culturally
                   relevant. From Riyadh to Cairo to Dubai, we’re creating space
                   for real people to inspire real impact."
        imageSrc="/talk.png"
        imageAlt="UGC Panda"
        blurTopRight

        reverse={true} // true = image right, text left | false = image left, text right
        buttonText="Read More"
        buttonLink="/"
      />


      <section className="relative w-full">
        <div className="absolute left-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div> 
             <ContentCard />
      </section>








      {/* creators */}
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-10/12 w-full text-center">


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


      <section className="relative z-0 w-full">
        <div className="absolute left-0 bottom-0 inline-flex radial-blur lg:size-80 -z-10"></div> 
      <ContentSlider />
        </section>

      <section className="relative w-full">
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>
      <PricingComparator />
        </section>





    </>
  )
}

export default Tiktok