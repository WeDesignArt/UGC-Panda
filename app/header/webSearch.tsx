import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function WebSearch() {
  return (
    <div className="flex justify-center md:justify-end items-center gap-2 w-40 md:w-64">
      <div className="rounded-full p-[1px] gradient-main">
        <div className="flex items-center w-full h-8 md:h-10 rounded-full bg-white px-2 md:px-3">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-xs md:text-sm w-full"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="h-8 w-8 inline-flex items-center justify-center p-0 cursor-pointer bg-transparent hover:bg-transparent"
      >
        <Image
          src="/search-panda.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="search"
          className="w-full h-full object-cover"
        />
      </Button>
    </div>
  );
}

export default WebSearch;
