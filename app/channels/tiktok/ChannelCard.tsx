"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChannelCardProps {
  title: string;
  author: string;
  image: string;
  profileImage: string;
  rating: number;
  link: string;
}

export default function ChannelCard({
  title,
  author,
  image,
  profileImage,
  rating,
  link,
}: ChannelCardProps) {
  return (
    <Card className="flex flex-col h-110 overflow-hidden p-0 gap-0 rounded-xl shadow-md bg-white dark:bg-gray-900">
      {/* Image Section */}
      <CardHeader className="relative h-50 mt-0 w-auto md:w-100 p-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
      </CardHeader>

      {/* Content Section */}
      <CardContent className="flex flex-col flex-grow p-5  ">
        <CardTitle className="text-2xl line-clamp-2 overflow-hidden text-ellipsis min-h-17 gap-0 text-start font-roboto-condensed font-semibold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
        <div className="border border-b mt-auto"></div>

        {/* Profile + Rating Row */}
        <div className="flex items-center justify-between my-5">
          {/* Profile Image + Author */}
          <div className="flex items-center gap-1">
            <Image
              src={profileImage}
              alt={author}
              width={32}
              height={32}
              className="rounded-full object-contain"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">{author}</p>
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-2xl">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </span>
            <span className="text-sm text-gray-500 ml-1">({rating})</span>
          </div>
        </div>

        {/* Watch Now Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center px-4 py-2 rounded-full gradient-main text-white font-medium hover:opacity-90"
        >
          Watch Now
        </a>
      </CardContent>
    </Card>
  );
}
