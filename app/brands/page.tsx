import Divider from "@/components/Divider";
import ContentCreators from "@/components/content-creators";
import BrandsCard from "@/components/brandscard";
import Clients from "@/components/clients";
import Link from "next/link";
import BrandHero from "./hero/brand-hero";

export default function Brands() {
  return (
    <>
      <Divider
        title="Brands"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/brands">Brands</Link>
          </>
        }
      />

      <BrandHero />

      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <BrandsCard />
        </div>
      </section>

      <ContentCreators />

      <Clients />
    </>
  );
}
