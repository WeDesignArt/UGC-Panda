"use client";

import { useState } from "react";
import Divider from "@/components/Divider";
import InfluencerCard from "./cards/InfluencerCard";
import Sidebar from "./sidebar/Sidebar";
import PaginationWrapper from "@/components/pagination-wrapper";
import ReusableSection from "@/components/ReusableSection";
import Link from "next/link";

const influencers = [
  {
    id: 1,
    index: 0,
    name: "James Williams",
    role: "Fashion Influencer",
    profileImg: "/creators/creator-1.jpg",
    category: "Apparel & Fashion",
    author: "James Williams",
    authorImage: "/creators/creator-1.jpg",
    rating: 4,
    videoSrc: "/hero-video.mp4",
  },
  {
    id: 2,
    index: 0,
    name: "Carol Wolfe",
    role: "Travel Influencer",
    profileImg: "/creators/creator-2.jpg",
    category: "Home & Lifestyle",
    author: "Carol Wolfe",
    authorImage: "/creators/creator-2.jpg",
    rating: 3,
  },
  {
    id: 3,
    index: 0,
    name: "Anthony Gardner",
    role: "Food Influencer",
    profileImg: "/creators/creator-3.jpg",
    category: "Food & Beverages",
    author: "Anthony Gardner",
    authorImage: "/creators/creator-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    index: 0,
    name: "Doris Buckner",
    role: "Tech Influencer",
    profileImg: "/creators/creator-4.jpg",
    category: "Technology & Gadgets",
    author: "Doris Buckner",
    authorImage: "/creators/creator-4.jpg",
    rating: 4,
  },
  {
    id: 5,
    index: 0,
    name: "Jose Smith",
    role: "Music Influencer",
    profileImg: "/creators/creator-5.jpg",
    category: "Apps & Digital Services",
    author: "Jose Smith",
    authorImage: "/creators/creator-5.jpg",
    rating: 3,
  },
  {
    id: 6,
    index: 0,
    name: "Christina Guzman",
    role: "Beauty Influencer",
    profileImg: "/creators/creator-6.jpg",
    category: "Cosmetic & Beauty",
    author: "Christina Guzman",
    authorImage: "/creators/creator-6.jpg",
    rating: 5,
  },
  {
    id: 7,
    index: 0,
    name: "Kevin Brown",
    role: "Fitness Coach",
    profileImg: "/creators/creator-7.jpg",
    category: "Health & Wellness",
    author: "Kevin Brown",
    authorImage: "/creators/creator-7.jpg",
    rating: 4,
  },
  {
    id: 8,
    index: 0,
    name: "Emily Davis",
    role: "Lifestyle Influencer",
    profileImg: "/creators/creator-8.jpg",
    category: "Home & Lifestyle",
    author: "Emily Davis",
    authorImage: "/creators/creator-8.jpg",
    rating: 2,
  },
];

export default function CreatorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const perPage = 6;

  const filteredInfluencers =
    selectedCategory === "All"
      ? influencers
      : influencers.filter((inf) => inf.category === selectedCategory);

  const totalPages = Math.ceil(filteredInfluencers.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedInfluencers = filteredInfluencers.slice(start, start + perPage);

  return (
    <>
      <Divider
        title="The Creators"
        breadcrumb={
          <>
            <Link href="/">Home</Link> /{" "}
            <Link href="/creators">The Creators</Link>
          </>
        }
      />

      <section className="relative">
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>

        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={(cat) => {
              setSelectedCategory(cat);
              setCurrentPage(1);
              setActiveVideoId(null); // category change par video stop
            }}
          />

          {/* Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
              {paginatedInfluencers.map((inf) => (
                <InfluencerCard
                  key={inf.id}
                  {...inf}
                  isActive={activeVideoId === inf.id}
                  onPlay={(id) =>
                    setActiveVideoId(activeVideoId === id ? null : id)
                  }
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10">
                <PaginationWrapper
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    setActiveVideoId(null); // page change par video stop
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <ReusableSection
        title="Why"
        highlight="Creators"
        title2="Choose"
        highlight2="UGC Panda"
        description=""
        listItems={[
          "Collaborate with top brands on exciting campaigns across every niche.",
          "Get paid fairly and on time for every project you deliver.",
          "Stay true to your style with full creative control.",
          "Grow your reputation and become part of the thriving MENA creator economy.",
        ]}
        extraText="At UGC Panda, your creativity is your currency — and we help you turn it into income."
        buttonText="Turn Creativity Into Cash"
        buttonLink="/about"
        imageSrc="/us.png"
        imageAlt="UGC Panda"
        reverse={true}
        blurTopRight
        blurBottomLeft
      />
    </>
  );
}
