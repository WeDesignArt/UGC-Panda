import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Link from "next/link";
import React from "react";

function TopBarSocial() {
  return (
    <>
      <section className="flex justify-center gap-2 md:gap-4">
        <Link
          href="#"
          className="w-8 h-8 md:w-7.5 md:h-7.5 rounded-full bg-gradient-to-b from-[#7928CA] to-[#FF0080] flex items-center justify-center"
        >
          <RiFacebookFill className="text-white w-4 h-4 md:w-4 md:h-4" />
        </Link>
        <Link
          href="#"
          className="w-8 h-8 md:w-7.5 md:h-7.5 rounded-full bg-gradient-to-b from-[#7928CA] to-[#FF0080] flex items-center justify-center"
        >
          <RiTwitterXFill className="text-white w-4 h-4 md:w-4 md:h-4" />
        </Link>

        <Link
          href="#"
          className="w-8 h-8 md:w-7.5 md:h-7.5 rounded-full bg-gradient-to-b from-[#7928CA] to-[#FF0080] flex items-center justify-center"
        >
          <RiInstagramFill className="text-white w-4 h-4 md:w-4 md:h-4" />
        </Link>

        <Link
          href="#"
          className="w-8 h-8 md:w-7.5 md:h-7.5 rounded-full bg-gradient-to-b from-[#7928CA] to-[#FF0080] flex items-center justify-center"
        >
          <RiLinkedinFill className="text-white w-4 h-4 md:w-4 md:h-4" />
        </Link>
        <Link
          href="#"
          className="w-8 h-8 md:w-7.5 md:h-7.5 rounded-full bg-gradient-to-b from-[#7928CA] to-[#FF0080] flex items-center justify-center"
        >
          <RiYoutubeFill className="text-white w-4 h-4 md:w-4 md:h-4" />
        </Link>
      </section>
    </>
  );
}

export default TopBarSocial;
