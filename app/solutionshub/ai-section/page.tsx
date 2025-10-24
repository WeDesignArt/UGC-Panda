import Image from "next/image";

export default function Ai() {
  return (
    <>
      <section className="relative w-full lg:pt-28">
        <div className="container mx-auto">
          <div className="section-wrapper flex flex-col md:flex-row md:px-0 px-4 items-center">
            <div className="md:w-1/2 w-full md:order-2">
              <Image
                src="/us.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
            </div>

            <div className="md:w-1/2 w-full lg:pr-8">
              <h2 className="section-title mb-4">
                AI + <span className="text-gradient"> Human </span> Screening
                <span className="text-gradient"> </span>
              </h2>

              <p className="mb-4">
                Smart AI recommendations match you with the right creators,
                while our human team ensures quality control and brand fit.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>
      </section>
    </>
  );
}
