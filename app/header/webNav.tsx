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
      <NavigationMenuList className="gap-1">
        {/* 1️⃣ Home Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className="text-md whitespace-nowrap">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 2️⃣ Us Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/us" className="text-md whitespace-nowrap">
              Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

       {/* 3️⃣ Services Dropdown */}
<NavigationMenuItem className="bg-transparent">
  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
  <NavigationMenuContent className="z-50 p-6">
    <div className="grid grid-cols-2 gap-10 w-[650px]">
      
      {/* ✅ Column 1: By Business Type */}
      <div>
        <h3 className="font-semibold text-gray-800 text-2xl mb-3">By Business Type</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/ecommerce" className="block">
              <div className="flex items-center gap-2">
                <Image src={"/icon-ecommerce.svg"} alt="ecommerce" width={40} height={40} />
              <span className="text-xl font-medium text-gray-900">eCommerce</span>
              </div>
              <p className="text-md text-gray-500">
                High-convertinmdUGC videos tailored for online stores.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/agencies" className="block">
             <div className="flex items-center gap-2">
                <Image src={"/icon-agency.svg"} alt="agency" width={40} height={40} />
              <span className="text-xl font-medium text-gray-900">Agencies</span>
              </div>
              <p className="text-md text-gray-500">
                Scalable creatmde production for multiple brands and clients.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/apps" className="block">
             <div className="flex items-center gap-2">
                <Image src={"/icon-apps.svg"} alt="apps" width={40} height={40} />
              <span className="text-xl font-medium text-gray-900">Apps</span>
              </div>
              <p className="text-md text-gray-500">
                Engaging app-fmdused UGC ads that drive downloads and installs.
              </p>
            </Link>
          </li>
        </ul>
      </div>

      {/* ✅ Column 2: By Platform */}
      <div>
        <h3 className="font-semibold text-gray-800 text-2xl mb-3">By Platform</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/tiktok-ads" className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiTiktokFill className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-medium text-gray-900">TikTok</span>
              </div>
              <p className="text-md text-gray-500">
                Create native-style videos that perform organically on TikTok.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/facebook-ads" className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiFacebookFill className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-medium text-gray-900">Facebook</span>
              </div>
              <p className="text-md text-gray-500">
                Engage audiences with authentic and shareable ad creatives.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/instagram-ads" className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiInstagramFill className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-medium text-gray-900">Instagram</span>
              </div>
              <p className="text-md text-gray-500">
                Build visually stunning reels and stories that convert.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/snapchat-ads" className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiSnapchatFill className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-medium text-gray-900">Snapchat</span>
              </div>
              <p className="text-md text-gray-500">
                Fun, quick, and impactful video ads for younger audiences.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/shopify-ads" className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiShoppingBag4Fill className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-medium text-gray-900">Shopify</span>
              </div>
              <p className="text-md text-gray-500">
                Convert visitors into buyers with data-backed video creatives.
              </p>
            </Link>
          </li>
          <li>
            <Link href="/youtube-ads" className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiYoutubeFill className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-medium text-gray-900">YouTube</span>
              </div>
              <p className="text-md text-gray-500">
                Long-form storytelling designed for maximum viewer retention.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </NavigationMenuContent>
</NavigationMenuItem>


        
        {[
          { name: "Prices", href: "/prices" },
          // { name: "Blogs", href: "/blogs" },
          { name: "Creators", href: "/creators" },
          { name: "Book A Call", href: "https://calendly.com/" },
          { name: "Contact Us", href: "/contactus" },
        ].map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild className="text-md whitespace-nowrap">
              <Link href={link.href}>{link.name}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// function ListItem({ title, children, href }: { title: string; href: string; children: React.ReactNode }) {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link href={href} className="block rounded-md p-2 ">
//           <div className="text-sm font-medium text-gray-900">{title}</div>
//           <p className="text-sm text-gray-500 line-clamp-2">{children}</p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }

export default WebNav;
