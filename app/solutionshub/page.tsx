import Divider from "@/components/Divider";
import Hero from "./hero/page";
import Content from "./content-section/page";
import ReusableSection from "@/components/ReusableSection";
import ContentCreators from "@/components/content-creators";
import Link from "next/link";

export default function SolutionsHub() {
  return (
    <>
      <Divider
        title="Solutions Hub"
        breadcrumb={
          <>
            <Link href="/">Home</Link> /{" "}
            <Link href="/solutionshub">Solutions Hub</Link>
          </>
        }
      />

      <Hero />

      <ReusableSection
        title="Product"
        highlight="Reviews"
        title2="&amp;"
        highlight2="Testimonials"
        description="Authentic reviews and testimonials filmed by real consumers, designed to build trust and increase purchase intent."
        extraText=""
        imageSrc="/us.png"
        imageAlt="UGC Panda"
        reverse={true} // true = image right, text left | false = image left, text right
        blurBottomRight
      />

      {/* mobile-frame */}
      <ReusableSection
        title="Unboxing &amp;"
        highlight="How"
        title2="To"
        highlight2="Videos"
        description="Step-by-step product showcases that highlight value and usability. Perfect for e-commerce, online products, and app demos."
        extraText=""
        imageSrc="/mobile-frame.png"
        imageAlt="UGC Panda"
        reverse={false} // true = image right, text left | false = image left, text right
        blurTopLeft
        blurBottomRight
      />

      <Content />

      <ReusableSection
        title="AI +" // pehla part title ka
        highlight="Human"
        title2="Screening"
        // highlight2="Testimonials"
        description="Smart AI recommendations match you with the right creators, while our human team ensures quality control and brand fit."
        extraText=""
        imageSrc="/us.png"
        imageAlt="UGC Panda"
        reverse={true} // true = image right, text left | false = image left, text right
        blurBottomRight
      />

      {/* mobile-frame 2*/}
      <ReusableSection
        title=""
        highlight="Mobile App"
        title2="Content"
        highlight2=""
        description=""
        listItems={[
          "In-depth app reviews and user-experience breakdowns.",
          "Comparisons with similar apps to highlight strengths and effectiveness.",
          "Designed to increase installs and engagement.",
        ]}
        extraText=""
        imageSrc="/mobile-frame.png"
        imageAlt="UGC Panda"
        reverse={false} // true = image right, text left | false = image left, text right
        blurBottomLeft
      />

      <ContentCreators />
    </>
  );
}
