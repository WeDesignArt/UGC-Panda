"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ChannelCard from "./ChannelCard";

import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title: "Trending Challenges with Your Brand",
    author: "Mitchell",
    image: "/channel-card/card-1.png",
    profileImage: "/creators/creator-1.jpg",
    rating: 4,
    link: "https://www.tiktok.com",
  },
  {
    title: "Co-create Engaging Video Content",
    author: "Michael",
    image: "/channel-card/card-2.png",
    profileImage: "/creators/creator-2.jpg",
    rating: 5,
    link: "https://www.tiktok.com",
  },
  {
    title: "Feature Your Product in My Videos",
    author: "Michael",
    image: "/channel-card/card-3.png",
    profileImage: "/creators/creator-3.jpg",
    rating: 3,
    link: "https://www.tiktok.com",
  },
  {
    title: "Boost Engagement with Fun Contests",
    author: "William",
    image: "/channel-card/card-4.png",
    profileImage: "/creators/creator-4.jpg",
    rating: 4,
    link: "https://www.tiktok.com",
  },
  {
    title: "TikTok Product Hacks for Growth",
    author: "Alex",
    image: "/channel-card/card-1.png",
    profileImage: "/creators/creator-5.jpg",
    rating: 5,
    link: "https://www.tiktok.com",
  },
  {
    title: "Boost Engagement with Fun Contests",
    author: "Sophia",
    image: "/channel-card/card-2.png",
    profileImage: "/creators/creator-6.jpg",
    rating: 4,
    link: "https://www.tiktok.com",
  },

  // { title: "Viral Video Formats", author: "David", image: "/creators/creator-1.jpg", rating: 5, link: "https://www.tiktok.com" },
  // { title: "Creative Editing Tricks", author: "Emma", image: "/creators/creator-2.jpg", rating: 3, link: "https://www.tiktok.com" },
  // { title: "Music Trends Showcase", author: "Noah", image: "/creators/creator-3.jpg", rating: 4, link: "https://www.tiktok.com" },
  // { title: "Collaborations that Work", author: "Olivia", image: "/creators/creator-4.jpg", rating: 5, link: "https://www.tiktok.com" },
  // { title: "TikTok Ads Done Right", author: "Ethan", image: "/creators/creator-5.jpg", rating: 4, link: "https://www.tiktok.com" },
  // { title: "Authentic Storytelling", author: "Ava", image: "/creators/creator-6.jpg", rating: 5, link: "https://www.tiktok.com" },
];

export default function ChannelCarousel() {
  return (
    <section className="relative px-4 lg:px-0">
      <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
      <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>
      <div className="container text-center mx-auto py-12">
        {/* Heading */}
        <div className="uppercase">
          <h2 className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            TikTok Channel
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mt-7">
          <p className="text-sm my-10 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Reach audiences with scroll-stopping TikTok videos created by real
            people, designed to spark engagement and drive results.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <ChannelCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom styles for active bullet */}
        <style jsx global>{`
          .swiper-pagination-bullet-active {
            background: linear-gradient(
              180deg,
              #ff0080,
              #7928ca
            ) !important; /* your gradient-main */
          }
          .swiper-pagination {
            position: relative !important; /* fixed/absolute se nikal do */
            margin-top: 50px; /* cards ke neeche gap */
            text-align: center; /* center align */
          }

          .swiper-pagination-bullet {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            text-align: center;
            font-size: 15px;
            color: #000;
            opacity: 1;
            background: rgba(0, 0, 0, 0.2);
          }

          .swiper-pagination-bullet-active {
            color: #fff;
            background: #9e9e9e;
          }
        `}</style>
      </div>
    </section>
  );
}
