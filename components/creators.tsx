

import CreatorsMarquee from "@/components/creators-marquee";








export default function OurCreators(){
    return(
        <>

{/* creators */}
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-8/12 w-full text-center">
              {/* <Link href="/" className="btn-pill lg:w-36 w-5/12">
                Our Creators
              </Link> */}

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
      </>



    );
}