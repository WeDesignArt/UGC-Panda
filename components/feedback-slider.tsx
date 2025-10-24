"use client";

import React, { useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function FeedbackSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null); // ✅ Correct type

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params.navigation) {
      const navigation = swiperRef.current.params.navigation;

      if (typeof navigation !== "boolean" && navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;

        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  const feedbacks = [
    {
      name: "Sarah Johnson",
      location: "Lahore, Pakistan",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      message:
        "Working with this team was an absolute pleasure. They understood our goals perfectly and delivered a beautiful, responsive website on time. Highly recommended for anyone seeking professional quality work.",
    },
    {
      name: "Ahmed Raza",
      location: "Karachi, Pakistan",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      message:
        "Their attention to detail and creativity really stood out. The final product exceeded our expectations, and communication throughout the process was smooth and efficient.",
    },
    {
      name: "Lisa Parker",
      location: "Dubai, UAE",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      message:
        "From start to finish, everything was handled with professionalism and care. They turned our ideas into a modern, user-friendly design that perfectly represents our brand.",
    },
    {
      name: "Ayan Khan",
      location: "Islamabad, Pakistan",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      message:
        "Excellent experience! The team was responsive, skilled, and dedicated to producing quality results. Our website now loads faster and looks amazing on all devices.",
    },
  ];

  return (
    <section className="relative md:px-0 px-4 w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="feedback-swiper"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1.2, spaceBetween: 12 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 2.8, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {feedbacks.map((person, i) => (
          <SwiperSlide key={i}>
            <Card className="relative p-[1px] gradient-main border-0 overflow-hidden transition-all shadow-none lg:h-[380px] h-auto">
              <div className="rounded-xl bg-white flex w-full h-full text-center">
                <CardContent className="relative z-[2] min-h-52 flex-col items-center flex gap-6 w-full p-6">
                  <Avatar className="size-22 border-[6px] border-slate-200">
                    <AvatarImage src={person.img} />
                    <AvatarFallback>
                      {person.name.split(" ")[0][0]}
                      {person.name.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>

                  <CardContent>
                    <p className="text-gray-700 leading-relaxed italic">
                      “{person.message}”
                    </p>
                  </CardContent>

                  <CardHeader className="p-0 gap-2 w-full text-center">
                    <CardTitle className="text-xl font-bold italic">
                      {person.name}
                    </CardTitle>
                    <CardDescription className="text-black italic">
                      {person.location}
                    </CardDescription>
                  </CardHeader>
                </CardContent>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 feedback-arrow-left"
      >
        <Image
          src="/icon-arrow-left.png"
          alt="prev"
          width={40}
          height={40}
          className="size-10"
        />
      </button>

      <button
        ref={nextRef}
        type="button"
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 feedback-arrow-right"
      >
        <Image
          src="/icon-arrow-right.png"
          alt="next"
          width={40}
          height={40}
          className="size-10"
        />
      </button>
    </section>
  );
}

export default FeedbackSlider;
