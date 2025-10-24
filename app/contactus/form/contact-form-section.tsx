"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {RiArrowDownSFill} from "@remixicon/react"

export default function ContactFormSection() {
  return (
    <section className="w-full  pt-20 pb-10">
      <div className="max-w-2xl mx-auto text-start mb-8">
        <h2 className="text-5xl font-bold text-black">Get in Touch</h2>
      </div>

      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-2xl mb-16">
          <form className="space-y-4">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF0080] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF0080] outline-none"
              />
            </div>

            {/* Phone + Inquiry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF0080] outline-none"
              />

              {/* Inquiry Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between border border-black text-gray-700"
                  >
                    Inquiry
                    <RiArrowDownSFill className="text-xl ml-2" /> 
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-sm">
                  <DropdownMenuLabel>Select Inquiry Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Order</DropdownMenuItem>
                  <DropdownMenuItem>Agency Request</DropdownMenuItem>
                  <DropdownMenuItem>Creator Inquiries</DropdownMenuItem>
                  <DropdownMenuItem>Partnerships</DropdownMenuItem>
                  <DropdownMenuItem>Other</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* I am + I am looking for */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* I am Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between border border-black text-gray-700"
                  >
                    I am
                    <RiArrowDownSFill className="text-xl ml-2" /> 
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-sm">
                  <DropdownMenuLabel>Select Who You Are</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>An Agency</DropdownMenuItem>
                  <DropdownMenuItem>A Brand</DropdownMenuItem>
                  <DropdownMenuItem>A Creator</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* I am looking for Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between border border-black text-gray-700"
                  >
                    I am looking for
                    <RiArrowDownSFill className="text-xl ml-2" /> 
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-sm">
                  <DropdownMenuLabel>Select Service</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>UGC Content</DropdownMenuItem>
                  <DropdownMenuItem>
                    TikTok Shop Setup & Operations
                  </DropdownMenuItem>
                  <DropdownMenuItem>Paid Media</DropdownMenuItem>
                  <DropdownMenuItem>Affiliate Management</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-3 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF0080] outline-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full gradient-main text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
