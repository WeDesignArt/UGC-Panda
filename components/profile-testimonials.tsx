import Link from "next/link";
import FeedbackSlider from "@/components/feedback-slider";

export default function ProfileTestimonial() {
  return (
    <>
      {/* Clients Section */}
      <section className="relative w-full lg:pt-28 pt-14">
        <div className="container mx-auto">
          <div className="section-wrapper flex flex-col md:flex-row items-center justify-center md:px-0 px-4">
            <div className="w-full lg:max-w-8/12 text-center">
              <Link
                href="/"
                className="btn-pill inline-block lg:w-36 w-5/12 mb-6"
              >
                Our Clients
              </Link>

              <div className="text-center max-w-8xl mx-auto">
                <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider mb-4">
                  Testimonials
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Slider Section */}
      <section className="relative w-full lg:pb-24 pb-14 pt-14">
        <div className="container mx-auto relative z-[5]">
          <FeedbackSlider />
        </div>

        {/* Background blur decoration */}
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 size-40 z-0"></div>
      </section>
    </>
  );
}
