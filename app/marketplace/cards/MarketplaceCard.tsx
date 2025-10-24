"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiPriceTag3Fill } from "@remixicon/react";

export default function MarketplaceCard({
  title,
  category,
  price,
  image,
  author,
  authorImage,
  rating,
}: {
  title: string;
  category: string;
  price: string;
  image: string;
  author: string;
  authorImage: string;
  rating: number;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="flex flex-col h-120 w-full overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-900 py-0">
      {/* Image Section */}
      <CardHeader className="relative h-50 w-full mt-0 p-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover rounded-md"
        />

        {/* Preview Button */}
        <Button className="absolute top-20 left-30 bg-pink-600 text-white font-lato px-10 py-5 rounded-full text-md">
          Preview
        </Button>

        {/* Heart Icon */}
        <Button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-transparent hover:bg-blue-100 hover:text-blue-500"
        >
          <Heart
            className={`w-6 h-6 ${liked ? "fill-pink-500 text-pink-500" : ""}`}
          />
        </Button>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="flex flex-col flex-grow justify-between p-5">
        <div>
          {/* Category + Price */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-pink-600 flex items-center gap-1">
              {/* Flip & resize */}
              <RiPriceTag3Fill className="text-primary size-4" />
              {category}
            </span>
            <span className="text-xl font-bold text-purple-500">{price}</span>
          </div>

          {/* Title */}
          <CardTitle className="text-2xl line-clamp-2 overflow-hidden text-ellipsis min-h-17 text-start font-roboto-condensed font-semibold text-gray-900 dark:text-white">
            {title}
          </CardTitle>
          <div className="border-b mt-auto"></div>

          {/* Author + Rating */}
          <div className="flex justify-between items-center my-5">
            <div className="flex items-center gap-1">
              <Image
                src={authorImage}
                alt={author}
                width={28}
                height={28}
                className="rounded-full"
              />
              <p className="text-sm">{author}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 text-2xl">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center px-4 py-2 rounded-full gradient-main text-white font-medium hover:opacity-90"
        >
          Book Now
        </Link>
      </CardContent>
    </Card>
  );
}
