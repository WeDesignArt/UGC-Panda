import React from "react";
import Image from "next/image";

function TopBarPhone() {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start items-center text-xs md:text-sm">
      <Image
        src="/icon-phone.svg"
        width={0}
        height={0}
        sizes="100vw"
        className="size-6"
        alt="icon"
      />
      <a href="tel:+123456789" className="text-[18px]">
        +1 (234)-56-78-9
      </a>

      {/* vertical separator */}
      <div className="w-[1.3px] h-5 bg-gradient-to-b from-[#7928CA] to-[#FF0080]"></div>

      <a href="tel:+123456789" className="text-[18px]">
        +1 (234)-56-78-9
      </a>
    </div>
  );
}

export default TopBarPhone;
