"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SnapChannelCard from "./SnapChannelCard";

import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title: "Trending Challenges with Your Brand",
    author: "Mitchell",
    image: "/channel-card/card-1.png",
    profileImage: "/creators/creator-1.jpg",
    rating: 4,
    link: "https://www.Snapchat.com",
  },
  {
    title: "Co-create Engaging Video Content",
    author: "Michael",
    image: "/channel-card/card-2.png",
    profileImage: "/creators/creator-2.jpg",
    rating: 5,
    link: "https://www.Snapchat.com",
  },
  {
    title: "Feature Your Product in My Videos",
    author: "Michael",
    image: "/channel-card/card-3.png",
    profileImage: "/creators/creator-3.jpg",
    rating: 3,
    link: "https://www.Snapchat.com",
  },
  {
    title: "Boost Engagement with Fun Contests",
    author: "William",
    image: "/channel-card/card-4.png",
    profileImage: "/creators/creator-4.jpg",
    rating: 4,
    link: "https://www.Snapchat.com",
  },
  {
    title: "Snapchat Hacks for Growth",
    author: "Alex",
    image: "/channel-card/card-1.png",
    profileImage: "/creators/creator-5.jpg",
    rating: 5,
    link: "https://www.Snapchat.com",
  },
  {
    title: "Behind the Scenes Content",
    author: "Sophia",
    image: "/channel-card/card-2.png",
    profileImage: "/creators/creator-6.jpg",
    rating: 4,
    link: "https://www.Snapchat.com",
  },

  // { title: "Trending Challenges with Your Brand", author: "Mitchell", image: "/channel-card/card-1.png",  profileImage: "/creators/creator-1.jpg",  rating: 4, link: "https://www.Snapchat.com" },
  // { title: "Co-create Engaging Video Content", author: "Michael", image: "/channel-card/card-2.png",  profileImage: "/creators/creator-2.jpg", rating: 5, link: "https://www.Snapchat.com" },
  // { title: "Feature Your Product in My Videos", author: "Michael", image: "/channel-card/card-3.png",  profileImage: "/creators/creator-3.jpg", rating: 3, link: "https://www.Snapchat.com" },
  // { title: "Boost Engagement with Fun Contests", author: "William", image: "/channel-card/card-4.png",  profileImage: "/creators/creator-4.jpg", rating: 4, link: "https://www.Snapchat.com" },
  // { title: "Snapchat Hacks for Growth", author: "Alex", image: "/channel-card/card-1.png",  profileImage: "/creators/creator-5.jpg", rating: 5, link: "https://www.Snapchat.com" },
  // { title: "Behind the Scenes Content", author: "Sophia", image: "/channel-card/card-2.png",  profileImage: "/creators/creator-6.jpg", rating: 4, link: "https://www.Snapchat.com" },
];

export default function SnapChannelCarousel() {
  return (
    <section className="relative px-4 lg:px-0">
      <div className="absolute right-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
      <div className="container text-center mx-auto py-12">
        {/* Heading */}
        <div className="uppercase">
          <h2 className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Snapchat Channel
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mt-7">
          <p className="text-sm my-10 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Stand out with authentic Reels and Stories that blend seamlessly
            into the feed and connect with your community.{" "}
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
              <SnapChannelCard {...card} />
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
