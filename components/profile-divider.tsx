import Image from "next/image";
import { ReactNode } from "react";

import React from "react";

export type DividerProps = {
  title: string;
  breadcrumb: ReactNode;
  profileImage?: string; // optional prop
};
function ProfileDivider({ title, breadcrumb, profileImage }: DividerProps) {
  return (
    <section className="relative w-full h-[250px] md:h-[400px] bg-[#FE0181] bg-[url('/contact-divider-2.png')] bg-repeat-x bg-center mb-20">
      <div className="container mx-auto relative h-full px-4">
        {/* Title center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold font-roboto-condensed tracking-wider leading-tight">
            {title}
          </h1>
        </div>

        {/* Profile + breadcrumb */}
        {profileImage && (
          <div className="absolute -bottom-12 left-35 md:-bottom-30  md:left-0 -translate-x-1/2 sm:translate-x-0 flex items-center justify-center sm:justify-start gap-4 sm:gap-6 text-left">
            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-8 border-[#FE0181] overflow-hidden shrink-0">
              <Image
                src={profileImage}
                alt="Profile"
                width={350}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Breadcrumb */}
            <div className="max-w-xl ">
              <h6 className="text-md sm:text-lg md:text-xl font-lato text-white leading-snug">
                {breadcrumb}
              </h6>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProfileDivider;
