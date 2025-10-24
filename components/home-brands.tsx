import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

function HomeBrands() {
  return (
    <section className="relative w-full lg:pt-28 pt-14 ">
      <div className="container mx-auto">
        <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center">
          <div className="md:w-9/12 w-full lg:pr-8">
            

            <h2 className="section-title mb-4">
              Real <span className="text-gradient">Content</span>. Real{" "}
              <span className="text-gradient">Creators.</span> Ready{" "}
              <span className="text-gradient">for Your Brand</span>
            </h2>
          </div>

          <div className="md:w-3/12 w-full mt-4">
            
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 py-18 md:gap-[5%] gap-8 md:px-0 px-4">
          <Card className="relative p-[1.2px] gradient-main border-0 overflow-hidden transition-all shadow-none">
            <div className="rounded-xl bg-white flex w-full h-full">
              <CardContent className="relative z-[2] min-h-52 flex-col flex gap-20 w-full p-6">
                <Image
                  src="/icon-apps.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-20 inline-block"
                />

                <CardHeader className="p-0 gap-6">
                  <CardTitle className="text-2xl">Apps</CardTitle>
                  <CardDescription className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus asperiores deserunt cum inventore dolorum
                    distinctio odio maxime, a excepturi nostrum.
                  </CardDescription>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gradient"
                  >
                    View Now{" "}
                    <Image
                      src="/icon-arrow.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="icon"
                      className="size-3 inline-block"
                    />
                  </Link>
                </CardHeader>
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

          <Card className="relative p-[1.2px] gradient-main border-0 overflow-hidden transition-all shadow-none">
            <div className="rounded-xl bg-white flex w-full h-full">
              <CardContent className="relative z-[2] min-h-52 flex-col flex gap-20 w-full p-6">
                <Image
                  src="/icon-agency.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-20 inline-block"
                />

                <CardHeader className="p-0 gap-6">
                  <CardTitle className="text-2xl">Agencies</CardTitle>
                  <CardDescription className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus asperiores deserunt cum inventore dolorum
                    distinctio odio maxime, a excepturi nostrum.
                  </CardDescription>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gradient"
                  >
                    View Now{" "}
                    <Image
                      src="/icon-arrow.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="icon"
                      className="size-3 inline-block"
                    />
                  </Link>
                </CardHeader>
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

          <Card className="relative p-[1.2px] gradient-main border-0 overflow-hidden transition-all shadow-none">
            <div className="rounded-xl bg-white flex w-full h-full">
              <CardContent className="relative z-[2] min-h-52 flex-col flex gap-20 w-full p-6">
                <Image
                  src="/icon-ecom.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-20 inline-block"
                />

                <CardHeader className="p-0 gap-6">
                  <CardTitle className="text-2xl">E-commerce</CardTitle>
                  <CardDescription className="text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus asperiores deserunt cum inventore dolorum
                    distinctio odio maxime, a excepturi nostrum.
                  </CardDescription>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gradient"
                  >
                    View Now{" "}
                    <Image
                      src="/icon-arrow.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="icon"
                      className="size-3 inline-block"
                    />
                  </Link>
                </CardHeader>
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
  );
}

export default HomeBrands;
