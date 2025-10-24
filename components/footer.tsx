import TopBarSocial from "@/app/header/topbarSocial";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import Image from "next/image";
import FooterLogo from "./logo";

export default function FooterSection() {
  return (
    <footer className="pt-18 pb-6 overflow-clip">
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 relative z-10">
          {/* Logo and Description Section */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <FooterLogo />
                </div>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-black">
              Whether you&apos;re a brand seeking to drive engagement or a
              creator ready to turn creativity into income, UGC Panda is your
              go-to marketplace for authentic user-generated content.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <TopBarSocial />
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-gradient">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/us"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Why us
                </Link>
              </li>
              <li>
                <Link
                  href="/us"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Column Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-transparent hidden md:block">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Our Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-gradient">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-black transition-colors hover:text-primary"
                >
                  Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3 px-2">
            <h3 className="mb-4 text-lg font-bold text-gradient">Newsletter</h3>
            <p className="mb-4 text-sm leading-relaxed text-black">
              Signup our newsletter to get update information, news, insight or
              promotions.
            </p>

            <div className="flex gap-0 pl-2 rounded-full bg-white overflow-clip inset-shadow-[0_0_1px_1px_#eaedf1]">
              <Input
                type="email"
                placeholder="Email"
                className="w-7/12 border-0 selection:bg-transparent focus-visible:ring-0"
              />

              <Button className="gradient-main px-6 w-5/12 text-white hover:bg-[#c026d3] rounded-l-0 rounded-b-0 rounded-r-full">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                SIGN UP
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 md:flex-row relative z-10">
          <p className="text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} UGC Panda All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-primary"
            >
              Term of use
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-primary"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        <Image
          src={"/logo-panda-borderless.svg"}
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute right-0 -bottom-10 opacity-5 z-[0] inline-block w-4xl lg:w-[380px] scale-[1.1] rotate-[20deg]"
        />
      </div>
    </footer>
  );
}
