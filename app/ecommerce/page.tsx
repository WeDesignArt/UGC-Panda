import ContentSlider from '@/components/content-slider'
import CreatorsMarquee from '@/components/creators-marquee'
import PricingComparator from '@/components/pricing-comparator'
import ReusableSection from '@/components/ReusableSection'
import React from 'react'
import ContentCard from './cards/cards'
import Divider from '@/components/Divider'
import Link from "next/link";

import { Form } from './form/form'

function eCommerce() {
  return (
    <>

      <Divider
        title="eCommerce"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/contact">Services</Link>
          </>
        }
      />
      <ReusableSection
        // tag="UGC ADS, B2ACKED BY PERFORMANCE DATA"
        highlight1="UGC Videos "
        title=" for agencies, built on"
        highlight="performance data"
        //    title2="In mena "
        description="Scale high-performing UGC across client
         campaigns with vetted creators, data-powered briefs, 
         and batch-friendly workflows built for ROAS and CAC."
         listItems={[
          "Create a new revenue stream by reselling UGC to clients",
          "Source UGC yourself—skip client delays",
          "Streamline and scale your entire UGC workflow"]}
        //                 description1=" Our mission is to empower creators across MENA to turn their
        //    passion into income, while helping brands connect with audiences
        //    through content that feels authentic, relatable, and culturally
        //    relevant. From Riyadh to Cairo to Dubai, we’re creating space
        //    for real people to inspire real impact."
        imageSrc="/hero-ecom.png"
        imageAlt="UGC Panda"
        blurTopLeft

        reverse={true} // true = image right, text left | false = image left, text right
        buttonText="Discover exclusive agency offers"
        buttonLink="/"
      />



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
        imageSrc="/us.png"
        imageAlt="UGC Panda"
        blurTopRight

        reverse={false} // true = image right, text left | false = image left, text right
        buttonText="Read More"
        buttonLink="/"
      />

      <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">

        <div className="max-w-7xl text-center">


          <h2 className="section-title mb-8">
            Interested in our <span className="text-gradient">exclusive offers </span> for{" "}
            <span className="text-gradient">marketing</span> agencies?{" "}            
          </h2>
          <p className="mb-4">
            Flexible video creation that scales with your needs, no matter your size or industry.
          </p>
        </div>

        <div className="w-full max-w-sm md:max-w-6xl">
          <Form />
        </div>


      </div>




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

       <section className="relative w-full">
        
        <ContentCard />
      </section>





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

export default eCommerce
