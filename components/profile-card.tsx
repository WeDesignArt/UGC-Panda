import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <>
      {/* brands */}
      <section className="relative w-full lg:pt-28 pt-14 ">
        <div className="container mx-auto">
          <div className="text-center ">
            <h1 className="uppercase section-title font-bold font-roboto-condensed tracking-wider">
              Projects
            </h1>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 py-18 md:gap-[5%] gap-8 md:px-0 px-4">
            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/project-logo.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-30 w-40 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
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
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-10/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/project-logo.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-30 w-40 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
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
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-10/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/project-logo.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-30 w-40 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
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
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-10/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/project-logo.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-30 w-40 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
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
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-10/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/project-logo.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-30 w-40 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
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
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-10/12"
                />
              </div>
            </Card>

            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none">
              <div className="rounded-xl bg-white flex w-full h-full">
                <CardContent className="relative z-[2] min-h-52 flex flex-col gap-6 w-full p-10">
                  {/* Logo center mein */}
                  <div className="flex justify-center">
                    <Image
                      src="/project-logo.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-30 w-40 inline-block"
                    />
                  </div>

                  {/* Title and Description left aligned */}
                  <CardHeader className="p-0 flex flex-col text-cente gap-2 items-center">
                    <CardTitle className="text-2xl r w-full text-center font-roboto-condensed">
                      Lorem Ipsum
                    </CardTitle>
                    <CardDescription className="text-black font-lato text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                  </CardHeader>

                  {/* "View Now" center mein */}
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
                  </div>
                </CardContent>

                <Image
                  src={"/logo-panda-borderless.svg"}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute -right-7 -bottom-7 rotate-12 opacity-5 z-[0] inline-block w-[110%] lg:w-10/12"
                />
              </div>
            </Card>
          </section>
        </div>
      </section>
    </>
  );
}
