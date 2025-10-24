"use client";

import { useState } from "react";
import { ChevronRight, CircleQuestionMark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --- Card Component (same design but larger) ---
interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
}

export function PricingCard({ plan, price, features }: PricingCardProps) {
  return (
    <Card
  className={`relative w-full max-w-md rounded-xl shadow-2xl p-0 transition-all duration-300 flex flex-col overflow-hidden
    ${plan === "Advanced Plan"
      ? "border-4 border-pink-500 scale-[1.05] shadow-pink-200"
      : "hover:scale-[1.02]"
    }`}
>
  {plan === "Advanced Plan" && (
    <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
      Most Popular
    </div>
  )}

      <CardHeader className="items-center gap-4 mt-5 px-6">
        <div className="grid grid-cols-3">

          <div className="flex justify-center">
            <Image src="/icon-diamond.png" alt="diamond" width={60} height={60} />
          </div>

          <div className="col-span-2 flex flex-col mt-5">
            <CardTitle className="text-xl font-semibold text-gray-800">
              {plan}
            </CardTitle>
            <p className="text-sm text-gray-500">Collaboratively formulate</p>
          </div>
        </div>

        <div className="flex mx-auto">
          <p className="text-3xl font-bold text-gray-900">{price}</p>
        </div>
      </CardHeader>

      <div className="mx-6 border-b border-gray-200" />

      <CardContent className="relative p-6 pt-4 flex flex-col flex-1">
  <div className="absolute inset-0">
    <Image
      src="/bg-card-design.png"
      alt="background"
      fill
      className="object-contain opacity-100 rounded-xl translate-x-7"
    />
  </div>

  <ul className="relative space-y-3 z-10 mb-6">
    {features.map((feature, i) => (
      <li key={i} className="grid grid-cols-[auto_20px] items-center text-sm gap-2">
  <div className="flex items-center">
    <Image
      src="/icon-checkmark.png"
      alt="checkmark"
      width={15}
      height={15}
      className="mx-2"
    />
    {feature}
  </div>

  <div className="flex justify-end">
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <CircleQuestionMark className="h-4 w-4 text-gray-700 hover:text-gray-600 cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent side="top" className="!p-0">
          <div className="w-44 text-center px-3 py-2 text-xs text-white bg-gray-900 rounded-md">
            More details about {feature}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</li>

    ))}
  </ul>

  {/* Fixed button position */}
  <div className="relative z-10 mt-auto">
    <Link
      href="/"
      className="btn-pill w-full py-3 px-5 text-base text-white rounded-full gradient-main flex items-center justify-center gap-2"
    >
      Get Started Now
      <ChevronRight className="h-4 w-4" />
    </Link>
  </div>
</CardContent>

    </Card>
  );
}

// --- Data for each country (example) ---
const pricingData = {
  UAE: [
    {
      plan: "Basic Plan",
      price: "1500 AED",
      features: ["1 custom UGC video",
         "Scriptwriting & creative concept included",
          "Perfect for testing a single ad concept"],
    },
    {
      plan: "Standard Plan",
      price: "5,000 AED",
      features: ["4 unique UGC videos for campaign variety",
         "Professionally edited with captions & branding",
          "Access to multiple creators for diverse styles",
        "Ideal for small-scale performance testing"],
    },
    {
      plan: "Advanced Plan",
      price: "11,000 AED",
      features: ["10 premium UGC videos for scaling campaigns",
         "Data-backed creative direction & strategy",
          "High-converting ad hooks & CTAs",
        "Perfect for brands looking to grow consistently"],
    },
    {
      plan: "Enterprise Plan",
      price: "20,000 AED",
      features: ["20 UGC videos tailored for multiple platforms", 
        "Full campaign management support", "Access to top-performing creators",
      "Designed for high-volume advertising & brand awareness"],
    },
  ],
  KSA: [
    {
      plan: "Basic Plan",
      price: "1,000 SAR",
      features: ["1 custom UGC video", "Local streaming apps", "Limited content"],
    },
    {
      plan: "Standard Plan",
      price: "2,000 SAR",
      features: ["4 unique UGC videos for campaign variety", "Ad-free", "Dual screen support"],
    },
    {
      plan: "Advanced Plan",
      price: "4,000 SAR",
      features: ["10 premium UGC videos for scaling campaigns", "Exclusive channels", "Family sharing"],
    },
    {
      plan: "Enterprise Plan",
      price: "8,000 SAR",
      features: ["20 UGC videos tailored for multiple platforms", 
        "Dedicated manager", "SLA"],
    },
  ],
  EG: [
    {
      plan: "Basic Plan",
      price: "350 EGP",
      features: ["1 custom UGC video",
         "720p quality", "1 Screen access"],
    },
    {
      plan: "Standard Plan",
      price: "600 EGP",
      features: ["4 unique UGC videos for campaign variety",
         "2 Screens", "Ad-free"],
    },
    {
      plan: "Advanced Plan",
      price: "1,200 EGP",
      features: ["10 premium UGC videos for scaling campaigns", "All-access", "Offline downloads"],
    },
    {
      plan: "Enterprise Plan",
      price: "2,500 EGP",
      features: ["20 UGC videos tailored for multiple platforms",
         "Dedicated manager", "SLA"],
    },
  ],
};

// --- Main Component ---
export default function PricingSection() {
  const [active, setActive] = useState<"UAE" | "KSA" | "EG">("UAE");
  const countries = ["UAE", "KSA", "EG"];

  return (
    <div className="flex flex-col items-center p-6 sm:p-10 w-full">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:gap-8 md:gap-3 gap-2 py-10 max-w-5xl">
        {countries.map((country) => (
          <div key={country} className="rounded-full p-[1px] gradient-main">
            <Button
              onClick={() => setActive(country as "UAE" | "KSA" | "EG")}
              className={`rounded-full cursor-pointer px-5 py-1 md:px-8 md:py-2 transition-all text-xs md:text-sm ${active === country
                ? "gradient-main text-white"
                : "bg-white text-black gradient-main-hover hover:text-white"
                }`}
            >
              {country}
            </Button>
          </div>
        ))}
      </div>

      {/* Cards grid: responsive 1 / 2 / 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {pricingData[active].map((card, i) => (
          <div key={i} className="flex justify-center">
            {/* center each card inside column */}
            <PricingCard plan={card.plan} price={card.price} features={card.features} />
          </div>
        ))}
      </div>
    </div>
  );
}
