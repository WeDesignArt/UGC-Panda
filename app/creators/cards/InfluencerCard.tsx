"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Volume2, VolumeX, PauseCircle } from "lucide-react";

interface InfluencerCardProps {
  id: number;
  name: string;
  role: string;
  profileImg: string;
  authorImage: string;
  rating: number;
  author: string;
  videoSrc?: string;
  index: number;
  isActive?: boolean;
  onPlay?: (index: number) => void;
}

export default function InfluencerCard({
  id,
  name,
  profileImg,
  authorImage,
  rating,
  author,
  videoSrc,
  isActive,
  onPlay,
}: InfluencerCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Jab card inactive ho jaye to video band ho jaye
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setIsPaused(false);
    }
  }, [isActive]);

  // Toggle play/pause
  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <Card className="relative z-10 overflow-hidden rounded-2xl shadow-md border border-pink-400 p-0">
      <CardContent className="p-1 relative z-[2]">
        <div className="w-full h-[500px] relative overflow-hidden rounded-t-2xl">
          {isActive ? (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl cursor-pointer"
              />

              {/* Pause/Play Button Overlay */}
              <div
                onClick={handleTogglePlay}
                className="cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]   p-5 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                {isPaused ? (
                  <Image
                    src="/icon-play.svg"
                    alt="Play"
                    width={50}
                    height={50}
                  />
                ) : (
                  <PauseCircle className="text-white w-12 h-12" />
                )}
              </div>

              {/* Volume Toggle Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                  }
                }}
                className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                {videoRef.current?.muted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </>
          ) : (
            <>
              <Image
                src={profileImg}
                alt={name}
                fill
                className="object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
              />
              <div
                 onClick={() => onPlay?.(id)} // click se ye active ho jaye
                className="cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]  backdrop-blur-md p-5 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <Image src="/icon-play.svg" alt="Play" width={50} height={50} />
              </div>
            </>
          )}
        </div>

        {/* Author + Rating */}
        <div className="flex justify-between items-center my-5 px-5">
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
      </CardContent>

      {/* Decorative Panda Logo
      <div className="absolute bottom-0 right-0 w-200 h-200 z-0">
        <Image
          src="/logo-panda-borderless.svg"
          alt="bg-panda"
          width={300}
          height={300}
          className="absolute -right-9 -bottom-10 rotate-12 opacity-5 pointer-events-none z-0"
        />
      </div> */}
    </Card>
  );
}
