"use client";
import { X } from "lucide-react";
import {  RiErrorWarningLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const data = [
  { feature: "Human creator ads", tooltip: "Authentic ads made by real human creators, not AI.", ugc: true, ai: "AI-generated", manual: true },
  { feature: "Real ad performance data", tooltip: "Uses real ad metrics to optimize your campaigns.", ugc: true, ai: false, manual: false },
  { feature: "Smart creator matching", tooltip: "Automatically finds the best creators for your brand.", ugc: true, ai: false, manual: false },
  { feature: "Data-powered creative tools", tooltip: "AI-assisted tools to enhance ad creativity and efficiency.", ugc: "UGC Brands IQ", ai: false, manual: false },
  { feature: "Pre-vetted creators", tooltip: "Access to 5,000+ trusted, high-performing creators.", ugc: "5,000+ creators", ai: false, manual: false },
  { feature: "Scalable", tooltip: "Easily manage hundreds of ad campaigns with consistent quality.", ugc: true, ai: "Limited (quality risk)", manual: "Manual/slow" },
  { feature: "Ready-to-launch ads", tooltip: "Professionally edited ads, ready for immediate publishing.", ugc: "Expert editing", ai: "Limited (quality risk)", manual: false },
];

export default function PricingComparator() {
  return (
    <>
      <section className="relative w-full lg:pt-28 pt-14">
        <div className="container mx-auto">
          <div className="section-wrapper md:flex-row flex flex-col md:px-0 px-4 items-center justify-center">
            <div className="lg:max-w-8/12 w-full text-center">
              <h2 className="section-title mb-8">
                Why <span className="text-gradient">smart brands</span> choose{" "}
                <span className="text-gradient">UGC Panda</span>
              </h2>
              <p className="mb-4">
               See why UGC Panda is the smarter choice for high-performing creator ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto">
            <TooltipProvider>
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="w-1/3 py-4"></th>

                    {/* ✅ Top rounded with border */}
                    <th className="text-center bg-pink-50 p-6 border-t border-x border-pink-600 rounded-t-2xl">
                      <Image
                        src="/logo-ugc-sm.png"
                        alt="logo"
                        width={150}
                        height={60}
                        className="inline-block"
                      />
                    </th>

                    <th className="text-center p-6 font-semibold">
                      AI avatars
                    </th>
                    <th className="text-center p-6 font-semibold">
                      Manual creator sourcing
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {data.map((item, i) => (
                    <tr
                      key={i}
                      className="odd:bg-gray-100 even:bg-white text-sm md:text-base"
                    >
                      <td className="py-3 px-3 md:py-4 font-medium font-lato flex items-center gap-2 min-w-[160px]">
                        <span>{item.feature}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <RiErrorWarningLine
                              className="text-gray-400 hover:text-pink-600 cursor-pointer"
                              size={18}
                            />
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p className="max-w-xs text-sm">{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </td>

                      {/* ✅ UGC Panda Column */}
                      <td className="text-center bg-pink-50 py-3 md:py-4 border-x border-pink-600 min-w-[140px]">
                        {item.ugc === true ? (
                          <Image
                            src="/icon-checkbox.svg"
                            alt="checkbox"
                            width={25}
                            height={25}
                            className="inline-block"
                          />
                        ) : typeof item.ugc === "string" ? (
                          <span className="font-semibold">{item.ugc}</span>
                        ) : (
                          <X className="text-gray-400 inline-block" />
                        )}
                      </td>

                      <td className="text-center py-3 md:py-4 min-w-[140px]">
                        {item.ai === true ? (
                          <Image
                            src="/icon-checkbox.svg"
                            alt="checkbox"
                            width={25}
                            height={25}
                            className="inline-block"
                          />
                        ) : item.ai === false ? (
                          <X className="text-gray-400 inline-block" />
                        ) : (
                          <span className="text-md font-lato">{item.ai}</span>
                        )}
                      </td>

                      <td className="text-center py-3 md:py-4 min-w-[140px]">
                        {item.manual === true ? (
                          <Image
                            src="/icon-checkbox.svg"
                            alt="checkbox"
                            width={25}
                            height={25}
                            className="inline-block"
                          />
                        ) : item.manual === false ? (
                          <X className="text-gray-400 inline-block" />
                        ) : (
                          <span className="text-md font-lato">{item.manual}</span>
                        )}
                      </td>
                    </tr>
                  ))}

                  {/* ✅ Bottom CTA Row */}
                  <tr>
                    <td></td>
                    <td className="text-center bg-pink-50 py-6 border-x border-b border-pink-600 rounded-b-lg">
                      <Button className="gradient-main rounded-full px-8 py-5 text-sm md:text-md">
                        Try UGC Panda Now
                      </Button>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

              </table>
            </TooltipProvider>
          </div>
        </div>
      </section>
    </>
  );
}
