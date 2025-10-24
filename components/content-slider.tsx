


import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export default function ContentSlider() {
  return (
    <section className="relative flex flex-col items-center justify-end w-full md:h-[780px] h-[352px] overflow-x-clip z-10  text-center">
            <div className="inline-block md:w-[1000px] width-full md:h-auto h-[80vw] lg:translate-x-[10%] absolute -bottom-[1px] z-[2]">
              <Image
                src="/content-creator.png"
                alt="img"
                width={0}
                height={0}
                className="img-full"
                sizes="100vw"
              />
            </div>
    
            <div className="right-marquee gradient-main md:min-h-[280px] min-h-[150px] absolute left-0 bottom-[1] text-white z-0 w-full  lg:pt-18 pt-2">
              <InfiniteSlider gap={12} reverse>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase tracking-wider">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
                <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                  Content Creators{" "}
                  <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
                </div>
              </InfiniteSlider>
            </div>
    
            <InfiniteSlider
              gap={12}
              className="text-white absolute z-[5] left-0 bottom-11"
            >
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
    
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
              <div className="inline-flex items-center font-bold gap-4 pl-1 lg:text-6xl text-4xl uppercase">
                Content Creators{" "}
                <span className="inline-flex bg-white rounded-full size-3.5 mt-2"></span>
              </div>
            </InfiniteSlider>
          </section>
  )
}
