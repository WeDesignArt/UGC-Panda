import Link from "next/link";
import FeedbackSlider from "@/components/feedback-slider";

export default function Clients() {
  return (
    <>
      {/* clients */}
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-8/12 w-full text-center">
              <Link href="/" className="btn-pill lg:w-36 w-5/12">
                Our Clients
              </Link>

              <h2 className="section-title mb-8">
                Client <span className="text-gradient">Reviews</span> &amp;{" "}
                <span className="text-gradient">Feedback</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* feedback slider */}
      <section className="relative w-full lg:pb-24 pb-14 pt-14">
        <div className="container mx-auto relative z-[5]">
          <FeedbackSlider />
        </div>

        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 size-40 z-0"></div>
      </section>
    </>
  );
}
