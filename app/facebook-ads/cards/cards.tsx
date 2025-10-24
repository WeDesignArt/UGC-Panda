import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ContentCard() {
  return (
    <>
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">

          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-12/12 w-full text-center">


               <h2 className="section-title mb-4">
              More clicks, <span className="text-gradient">more sales,</span> zero guesswork{" "}
            </h2>

            <p className="mb-4 px-28 text-center">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua.
              Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
            </p>
            </div>

          </div>
          <section className="grid grid-cols-1 md:grid-cols-3 py-18 md:gap-[5%] gap-8 md:px-0 px-4">
            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-70 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/icon-profile.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-15 w-15 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Content people trust
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Build trust with content from real people
                      that feels natural and connects with your
                      audience.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein
                  <div className="flex justify-center">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-gradient"
                    >
                      <span className="underline underline-offset-4">
                        View Now
                      </span>
                      <Image
                        src="/icon-arrow.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="icon"
                        className="size-3 inline-block"
                      />
                    </Link>
                  </div> */}
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-6 rotate-12 opacity-4 z-[0] inline-block w-[110%] lg:w-7/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/icon-stats.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-15 w-15 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Built on real ad results
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Every step, from casting to creatives, is
                      informed by insights from 150,000+
                      video ads worth of performance data.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein
                  <div className="flex justify-center">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-gradient"
                    >
                      <span className="underline underline-offset-4">
                        View Now
                      </span>
                      <Image
                        src="/icon-arrow.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="icon"
                        className="size-3 inline-block"
                      />
                    </Link>
                  </div> */}
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-6 rotate-12 opacity-4 z-[0] inline-block w-[110%] lg:w-7/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/icon-video.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-15 w-15 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Effortless production
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      No studio shoots, no long timelines. Just
                      authentic creator ads, delivered fast and
                      ready to use.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein
                  <div className="flex justify-center">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-gradient"
                    >
                      <span className="underline underline-offset-4">
                        View Now
                      </span>
                      <Image
                        src="/icon-arrow.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="icon"
                        className="size-3 inline-block"
                      />
                    </Link>
                  </div> */}
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-6 rotate-12 opacity-4 z-[0] inline-block w-[110%] lg:w-7/12"
                />
              </div>
            </Card>

          </section>
        </div>
      </section>
    </>
  );
}
