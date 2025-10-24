import Link from "next/link";
import CreatorsMarquee from "@/components/creators-marquee";

export default function ProfilePortfolio() {
  return (
    <>
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-8/12 w-full text-center">
              <Link href="/" className="btn-pill lg:w-36 w-5/12">
                Portfolio
              </Link>

              <h2 className="section-title mb-8">
                <span className="text-primary">Jane</span> Doe Portfolio
              </h2>
            </div>
          </div>
        </div>
      </section>

      <CreatorsMarquee />
    </>
  );
}
