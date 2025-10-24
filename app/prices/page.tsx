"use client";

import Divider from "@/components/Divider";
import ContentCreators from "@/components/content-creators";
import Link from "next/link";
import OurCreators from "@/components/creators";
import PricingCards from "./pricingcards/PricingCards";

export default function Prices() {
  return (
    <>
      <Divider
        title="Pricing Plans"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/brands">Prices</Link>
          </>
        }
      />
      <section>
        <div className="absolute left-0 top-126 inline-flex radial-blur lg:size-80 z-0"></div>
        <PricingCards />
      </section>

      <section>
        <OurCreators />
      </section>

      <ContentCreators />
    </>
  );
}
