import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function TopBarButtons() {
  return (
    <div className="flex justify-center md:justify-end gap-2 md:gap-3">
      <div className="rounded-full p-[1.2px] gradient-main">
        <Button
          className="rounded-full px-3 py-1 md:px-5 md:py-2 bg-white text-black gradient-main-hover hover:text-white transition-all text-xs md:text-sm"
          asChild
        >
          <Link href="/account-type">Sign Up For Free</Link>
        </Button>
      </div>
      <Button
        className="px-5 py-1 md:px-10 md:py-2 rounded-full text-white gradient-main hover:opacity-90 transition-opacity text-xs md:text-sm"
        asChild
      >
        <Link href="/account-type">Login</Link>
      </Button>
    </div>
  );
}

export default TopBarButtons;
