"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiSnapchatFill,
  RiTiktokFill,
  RiShoppingBag4Fill,
  RiYoutubeFill,
} from "@remixicon/react";
import Image from "next/image";

function WebNav() {
  return (
    <NavigationMenu className="relative z-[9999]">
      <NavigationMenuList className="gap-5 items-center">
        {/* 1️⃣ Home Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className="text-lg whitespace-nowrap">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 2️⃣ Us Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/us" className="text-lg whitespace-nowrap">
              Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 3️⃣ Services Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="z-50 p-6">
            <div className="grid grid-cols-2 gap-10 w-[850px]">
              {/* ✅ Column 1: By Business Type */}
              <div>
                <h3 className="font-semibold text-gray-500 text-lg mb-5">
                  By Business Type
                </h3>
                <ul className="space-y-5">
                  <li>
                    <Link href="/ecommerce" className="block">
                      <div className="flex items-center gap-3">
                        <Image
                          src={"/icon-ecommerce.svg"}
                          alt="ecommerce"
                          width={35}
                          height={35}
                        />
                        <span className="text-xl font-medium text-gray-900">
                          eCommerce
                        </span>
                      </div>
                      <p className="text-sm text-gray-500  mt-2 pl-12">
                        High-converting UGC videos tailored for online stores.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/agencies" className="block">
                      <div className="flex items-center gap-3">
                        <Image
                          src={"/icon-agency.svg"}
                          alt="agency"
                          width={30}
                          height={30}
                        />
                        <span className="text-xl font-medium text-gray-900">
                          Agencies
                        </span>
                      </div>
                      <p className="text-sm text-gray-500  mt-2 pl-12">
                        Scalable creative production for multiple brands.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/apps" className="block">
                      <div className="flex items-center gap-3">
                        <Image
                          src={"/icon-apps.svg"}
                          alt="apps"
                          width={30}
                          height={30}
                        />
                        <span className="text-xl font-medium text-gray-900">
                          Apps
                        </span>
                      </div>
                      <p className="text-sm text-gray-500  mt-2 pl-12">
                        Engaging app-focused UGC ads that drive downloads.
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ✅ Column 2: By Platform */}
              <div>
                <h3 className="font-semibold text-gray-500 text-lg mb-5">
                  By Platform
                </h3>


                <ul className="space-y-3">
                  <li>
                    <Link href="/tiktok-ads" className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <RiTiktokFill className="w-6 h-6 text-pink-500" />
                        <span className="text-xl font-medium text-gray-900">
                          TikTok
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2 pl-8">
                        Create native-style videos that perform organically.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/facebook-ads" className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <RiFacebookFill className="w-6 h-6 text-pink-500" />
                        <span className="text-xl font-medium text-gray-900">
                          Facebook
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2 pl-8">
                        Engage audiences with shareable ad creatives.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/instagram-ads" className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <RiInstagramFill className="w-6 h-6 text-pink-500" />
                        <span className="text-xl font-medium text-gray-900">
                          Instagram
                        </span>
                      </div>
                      <p className="text-md text-gray-500 mt-2 pl-8">
                        Build stunning reels and stories that convert.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/snapchat-ads" className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <RiSnapchatFill className="w-6 h-6 text-pink-500" />
                        <span className="text-xl font-medium text-gray-900">
                          Snapchat
                        </span>
                      </div>
                      <p className="text-md text-gray-500 mt-2 pl-8">
                        Fun, quick, impactful video ads for younger audiences.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shopify-ads" className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <RiShoppingBag4Fill className="w-6 h-6 text-pink-500" />
                        <span className="text-xl font-medium text-gray-900">
                          Shopify
                        </span>
                      </div>
                      <p className="text-md text-gray-500 mt-2 pl-8">
                        Convert visitors into buyers with strong creatives.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/youtube-ads" className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <RiYoutubeFill className="w-6 h-6 text-pink-500" />
                        <span className="text-xl font-medium text-gray-900">
                          YouTube
                        </span>
                      </div>
                      <p className="text-md text-gray-500 mt-2 pl-8">
                        Long-form storytelling for maximum retention.
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ✅ Static Links */}
        {[
          { name: "Prices", href: "/prices" },
          { name: "Creators", href: "/creators" },
        ].map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="text-lg whitespace-nowrap hover:text-pink-600 transition"
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* ✅ Book A Call (new tab) */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md whitespace-nowrap hover:text-pink-600 transition"
            >
              Book A Call
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* ✅ Contact Us */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contactus"
              className="text-md whitespace-nowrap hover:text-pink-600 transition"
            >
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default WebNav;
