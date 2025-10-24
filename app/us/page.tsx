import Divider from "@/components/Divider";
import Hero from "./hero/page";
import OurCreators from "@/components/creators";
import ReusableSection from "@/components/ReusableSection";
import ContentCreators from "@/components/content-creators";
import Clients from "@/components/clients";
import Link from "next/link";
import PricingComparator from "@/components/pricing-comparator";

export default function Us() {
  return (
    <>
      <Divider
        title="US"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/us">Us</Link>
          </>
        }
      />

      <ReusableSection
        // tag="Us"
        highlight1="Leading "
        title=" the Next Wave of"
        highlight="Content"
        title2="In mena "
        // highlight2="UGC Panda"
        description="At UGC Panda, we believe creators are the heartbeat of the Middle East’s digital future. We’re not just building a platform — we’re building a movement where local voices shape global stories"
        description1="Our mission is to empower creators across MENA to turn their passion into income, while helping brands connect with audiences through content that feels authentic, relatable, and culturally relevant. From Riyadh to Cairo to Dubai, we’re creating space for real people to inspire real impact."
        description2="We envision a thriving ecosystem where creativity flourishes, diversity is celebrated, and opportunities are shared. With trust, transparency, and collaboration at our core, UGC Panda is leading the next wave of content in MENA — powered by creators, built for brands, and designed to inspire."
        imageSrc="/us.png"
        imageAlt="UGC Panda"
        reverse={true} // true = image right, text left | false = image left, text right
      />

      <Hero />

      <OurCreators />

      <ContentCreators />

      <PricingComparator />
    </>
  );
}
