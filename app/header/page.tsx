"use client";

import TopBarButtons from "./topBarButtons";
import WebLogo from "./webLogo";
import WebNav from "./webNav";

import MobileMenu from "./mobileMenu";

export default function Header() {
  return (
    <>
      <header className="w-full relative">
        <div className="container mx-auto hidden xl:block">
          <div className="lg:grid grid-cols-1 md:grid-cols-1 items-center py-4 gap-3 hidden">
            

            
            
          </div>
        </div>

        {/* Divider
        <div className="hidden lg:block h-[1.4px] w-full bg-gradient-to-r from-[#CE8CDA] to-[#CE8CDA]"></div> */}

        <div className="container mx-auto hidden xl:block">
          {/* Main Nav */}
          <div className="flex justify-between items-center py-3 gap-3">
            {/* Logo */}
            <WebLogo />

            {/* Nav Links */}
            <WebNav />

            {/* Right - Buttons */}
            <TopBarButtons />
          </div>
        </div>

        <section className="lg:hidden flex items-center justify-between px-4 py-3 mb-5">
          {/* mobile nav */}
          <MobileMenu />
        </section>
      </header>
    </>
  );
}
