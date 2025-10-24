"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  { name: "💰 Business & Startups", link: "/" },
  { name: "💼 Careers & Office", link: "/" },
  { name: "📊 Marketing & Sales", link: "/" },
  { name: "🏦 Finance & Web 3", link: "/" },
  { name: "💡 IT & Tech", link: "/" },
  { name: "🕊️ Global Affairs & Diplomacy", link: "/" },
  { name: "🎭 Arts & Culture", link: "/" },
  { name: "🍔 Food & Nutrition", link: "/" },
  { name: "✈️ Travel", link: "/" },
  { name: "🏎️ Motorsports & Biking", link: "/" },
  { name: "🧠 Health & Medical", link: "/" },
  { name: "💪 Fitness & Personal Growth", link: "/" },
  { name: "🎓 Education", link: "/" },
  { name: "⚽ Sports", link: "/" },
  { name: "🎮 Gaming & Streaming", link: "/" },
  { name: "👨‍👩‍👧 Relationships & Family", link: "/" },
  { name: "🐾 Animals", link: "/" },
  { name: "👗 Fashion", link: "/" },
  { name: "💄 Beauty", link: "/" },
  { name: "🤝 Inclusion & Social Impact", link: "/" },
];

export default function ProfileCategory() {
  return (
    <>
      <section className="relative w-full lg:pt-28 pt-14">
        <div className="container mx-auto">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center px-4 text-center max-w-6xl mx-auto">
            <Link href="/" className="btn-pill mb-4">
              Industry
            </Link>

            <h2 className="section-title mb-6">
              Projects <span className="text-secondary">industry</span> category
            </h2>

            <p className="text-gray-600 max-w-6xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <section>
        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring" }}
            >
              <Link href={cat.link} className="cursor-pointer">
                <div className="rounded-full p-[2px] gradient-main">
                  <Button className="rounded-full cursor-pointer font-bold font-lato px-3 py-1 md:px-10 md:py-7 bg-white text-black gradient-main-hover hover:text-white focus:text-white transition-all text-xs md:text-sm">
                    {cat.name}
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
