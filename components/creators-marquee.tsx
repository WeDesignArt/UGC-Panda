import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


function CreatorsMarquee() {
  return (
    <section className="relative w-full lg:pt-24 pt-18">
      <div className="absolute left-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-[2]"></div>
      <div className="absolute right-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-[2]"></div>
      <InfiniteSlider gap={66} speedOnHover={20} className="relative z-[1]">
        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-03.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px]"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-04.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px] mt-24"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-02.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px]"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-04.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px] mt-24"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-03.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px]"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-04.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px] mt-24"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-02.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px]"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-clip relative flex flex-col gap-4 ">
          <div className="relative w-full">
            <Image
              src="/cb-04.png"
              alt="img"
              width={0}
              height={0}
              className="w-[300px] h-[550px] mt-24"
              sizes="100vw"
            />

            <span className="absolute left-1/2 top-1/2 -translate-1/2 z-[2] rounded-full overflow-clip size-16">
              <Link href="/">
                <Image
                  src="/icon-play-black.svg"
                  alt="img"
                  width={0}
                  height={0}
                  className="img-full"
                  sizes="100vw"
                />
              </Link>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="inline-flex items-center gap-2 text-black font-medium text-sm">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Samual</AvatarFallback>
              </Avatar>

              <span className="inline-block">Samual</span>
            </div>

            <div className="inline-flex items-center gap-1 text-black font-semibold text-sm">
              <span className="inline-block">5</span>
              <Image
                src="/icon-star.svg"
                alt="img"
                width={0}
                height={0}
                className="size-4"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </InfiniteSlider>
      <div className="absolute right-0 top-0 inline-flex radial-blur lg:size-60 size-40 z-[3]"></div>

      
    </section>
  );
}

export default CreatorsMarquee;
