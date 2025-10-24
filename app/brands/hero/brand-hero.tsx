"use client";
import Image from "next/image";

const steps = [
  {
    icon: "/brands/icon-mail.svg",
    text: "Post a brief with your requirements.",
  },
  {
    icon: "/brands/icon-eye.svg",
    text: "Browse and review creator portfolios.",
  },
  {
    icon: "/brands/icon-group.svg",
    text: "Select and start collaborating with your chosen creator.",
  },
  {
    icon: "/brands/icon-send.svg",
    text: "Receive your UGC content sample for review.",
  },
];

export default function BrandHero() {
  return (
    <>
      <div className="flex flex-col">
        <div className="container mx-auto text-center px-4 mt-10">
          <div className="uppercase">
            <h1 className="max-w-4xl mx-auto text-center text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Real{" "}
              <span className="gradient-main bg-clip-text text-transparent">
                CONTENT.{" "}
              </span>
              Real{" "}
              <span className="gradient-main-reverse bg-clip-text text-transparent">
                Creators.{" "}
              </span>
              Ready for{" "}
              <span className="gradient-main-reverse bg-clip-text text-transparent">
                your brand
              </span>
            </h1>
          </div>

          <div className="mt-10">
            <p className="text-sm mb-2 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              From Saudi Arabia to Egypt to UAE, discover storytellers who know
              how to turn everyday moments into powerful authentic branded
              content.
            </p>
            <p className="text-sm max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
              It’s quick and simple and in just 4 steps to launch you can launch
              your campaign
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pt-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-pink-600">
                <Image
                  src={steps[0].icon}
                  alt="Step 1"
                  width={32}
                  height={32}
                />
              </div>
              <p className="mt-3 text-center text-gray-700 max-w-[200px]">
                {steps[0].text}
              </p>
            </div>
            <div className="flex justify-center items-center my-6 md:my-0 md:mx-6">
              <Image
                src="/arrow1.svg"
                alt="Arrow 1"
                width={100}
                height={60}
                className="rotate-90 md:-translate-y-18 md:rotate-0 py-10 md:py-0"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-pink-600">
                <Image
                  src={steps[1].icon}
                  alt="Step 2"
                  width={32}
                  height={32}
                />
              </div>
              <p className="mt-3 text-center text-gray-700 max-w-[200px]">
                {steps[1].text}
              </p>
            </div>
            <div className="flex justify-center items-center my-6 md:my-0 md:mx-6 ">
              <Image
                src="/arrow2.svg"
                alt="Arrow 2"
                width={100}
                height={60}
                className="rotate-90 md:-rotate-0 py-10 md:py-0"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-pink-600">
                <Image
                  src={steps[2].icon}
                  alt="Step 3"
                  width={32}
                  height={32}
                />
              </div>
              <p className="mt-3 text-center text-gray-700 max-w-[200px]">
                {steps[2].text}
              </p>
            </div>
            <div className="flex justify-center items-center my-6 md:my-0 md:mx-6">
              <Image
                src="/arrow3.svg"
                alt="Arrow 3"
                width={100}
                height={60}
                className="rotate-90 md:-translate-y-12 md:rotate-0 py-10 md:py-0"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-pink-600">
                <Image
                  src={steps[3].icon}
                  alt="Step 4"
                  width={32}
                  height={32}
                />
              </div>
              <p className="mt-3 text-center text-gray-700 max-w-[200px]">
                {steps[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm mb-2 max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
          With our marketplace, you don’t just launch campaigns — you also get
          the tools to measure their impact. Track performance with our built-in
          analytics, including ROAS, views, engagement, and more, so you can see
          exactly how your brand is performing.
        </p>
      </div>
    </>
  );
}
