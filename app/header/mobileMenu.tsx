"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  
} from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiSnapchatFill,
  RiTiktokFill,
  RiShoppingBag4Fill,
  RiYoutubeFill,
} from "@remixicon/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      {/* ✅ Logo Left Side */}
      <Link href="/" className="flex items-center">
        <Image src="/logo-web.svg" alt="Logo" width={160} height={35} priority />
      </Link>

      {/* ✅ Menu Button Right Side */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 text-primary sm-svg">
            <Menu className="h-8 w-8" />
          </button>
        </SheetTrigger>

        
        
        {/* <SheetClose asChild>
          <button className="p-2 text-primary">
            <Menu className="h-8 w-8" />
          </button>
        </SheetClose> */}

        <SheetContent side="right" className="w-64  overflow-y-scroll pb-6">
          <SheetHeader className="sr-only">
            <SheetTitle>Mobile Menu</SheetTitle>
          </SheetHeader>
          
         

          <nav className="mt-6 flex flex-col space-y-4 p-6">
            <button
              onClick={() => handleLinkClick("/")}
              className="text-left text-lg font-medium hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick("/us")}
              className="text-left text-lg font-medium hover:underline"
            >
              Us
            </button>

            {/* Services Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-left text-lg font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                {servicesOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {servicesOpen && (
                <div className="mt-3 space-y-6 pl-3">
                  {/* By Business Type */}
                  <div>
                    <h4 className="text-md font-semibold mb-2">
                      By Business Type
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <button
                          onClick={() => handleLinkClick("/ecommerce")}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src="/icon-ecommerce.svg"
                            alt="Ecommerce"
                            width={28}
                            height={28}
                          />
                          eCommerce
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/agencies")}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src="/icon-agency.svg"
                            alt="Agencies"
                            width={28}
                            height={28}
                          />
                          Agencies
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/apps")}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src="/icon-apps.svg"
                            alt="Apps"
                            width={28}
                            height={28}
                          />
                          Apps
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* By Platform */}
                  <div>
                    <h4 className="text-md font-semibold mb-2">By Platform</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <button
                          onClick={() => handleLinkClick("/tiktok-ads")}
                          className="flex items-center gap-2"
                        >
                          <RiTiktokFill className="w-6 h-6 text-pink-500" />
                          TikTok
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/facebook-ads")}
                          className="flex items-center gap-2"
                        >
                          <RiFacebookFill className="w-6 h-6 text-pink-500" />
                          Facebook
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/instagram-ads")}
                          className="flex items-center gap-2"
                        >
                          <RiInstagramFill className="w-6 h-6 text-pink-500" />
                          Instagram
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/snapchat-ads")}
                          className="flex items-center gap-2"
                        >
                          <RiSnapchatFill className="w-6 h-6 text-pink-500" />
                          Snapchat
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/shopify-ads")}
                          className="flex items-center gap-2"
                        >
                          <RiShoppingBag4Fill className="w-6 h-6 text-pink-500" />
                          Shopify
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLinkClick("/youtube-ads")}
                          className="flex items-center gap-2"
                        >
                          <RiYoutubeFill className="w-6 h-6 text-pink-500" />
                          YouTube
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {[
              { href: "/prices", label: "Prices" },
              // { href: "/blogs", label: "Blogs" },
              { href: "/creators", label: "Creators" },
              { href: "https://calendly.com/", label: "Book A Call" },
              { href: "/contactus", label: "Contact Us" },
            ].map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleLinkClick(href)}
                className="text-left text-lg font-medium hover:underline"
              >
                {label}
              </button>
            ))}
          </nav>
           
            {/* ✅ Sign Up / Login Buttons */}
          <div className="flex flex-col gap-3 items-center mt-8 px-6">
            <div className="rounded-full p-[1.2px] gradient-main w-full">
              <Button
                className="w-full rounded-full px-3 py-2 bg-white text-black gradient-main-hover hover:text-white transition-all text-sm"
                asChild
              >
                <Link href="/account-type">Sign Up For Free</Link>
              </Button>
            </div>

            <Button
              className="w-full px-5 py-2 rounded-full text-white gradient-main hover:opacity-90 transition-opacity text-sm"
              asChild
            >
              <Link href="/account-type">Login</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
