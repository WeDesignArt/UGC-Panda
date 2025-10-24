"use client";
import { useState } from "react";
import Image from "next/image";

export default function Content() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto text-center px-4 mt-10">
      <div className="uppercase">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          <span className="text-gradient  text-transparent">
            {" "}
            Lifestyle &nbsp;
          </span>
          &amp; storytelling content
        </h1>
      </div>

      <div className="mt-7">
        <p className="text-sm mb-2 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Creators integrate your product naturally into their daily lives —
          turning everyday moments into relatable brand stories.
        </p>
      </div>

      {/* Image with Play Button */}
      <div className="relative mt-8 w-full h-72 md:h-120 rounded-xl overflow-hidden cursor-pointer">
        <Image src="/creator.jpg" alt="Creator" fill className="object-cover" />

        {/* Play button center */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 gradient-main rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Lightbox (YouTube Video) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-6 right-0 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
