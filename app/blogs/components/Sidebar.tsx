"use client";
import Image from "next/image";
import Link from "next/link";

interface PopularPost {
  id: string | number;
  image: string;
  title: string;
  date: string;
}

export default function Sidebar({ popular }: { popular: PopularPost[] }) {
  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-[#FFE5F2] rounded-xl p-4 shadow-sm">
        <label className="font-bold text-xl link-underline-gradient-main font-roboto-condensed mb-5">
          Search
        </label>
        <div className="relative">
          <input
            placeholder="Search Here"
            className="w-full border bg-white rounded-xl px-4 py-3 text-sm outline-none"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-600">
            <Image src="/icon-search.png" alt="Icon" width={15} height={15} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#FFE5F2] rounded-xl p-4 shadow-sm">
        <h4 className="font-bold text-xl link-underline-gradient-main font-roboto-condensed mb-5">
          Categories
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            ["Product Presentation", "08"],
            ["Video Call", "11"],
            ["Trending Challenge", "16"],
            ["Photography", "07"],
          ].map(([name, count]) => (
            <li
              key={name}
              className="flex justify-between w-full border bg-white rounded-xl px-4 py-3 text-sm outline-none"
            >
              <span>{name}</span>
              <span className="text-gray-400">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-[#FFE5F2] rounded-xl p-4 shadow-sm">
        <h4 className="font-bold text-xl link-underline-gradient-main font-roboto-condensed mb-3">
          Popular Posts
        </h4>
        <div className="space-y-3">
          {popular.map((p) => (
            <div
              key={p.id}
              className="flex gap-3 items-start border-b border-gray-300 pb-3"
            >
              <div className="relative w-16 h-12 rounded overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs gradient-main-text">{p.date}</p>
                <p className="text-sm font-medium">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-[#FFE5F2] rounded-xl p-4 shadow-sm">
        <h4 className="text-xl font-bold link-underline-gradient-main font-roboto-condensed mb-3">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Marketing",
            "Agency",
            "Search Engine",
            "Tech",
            "Influencer",
            "Advertising",
            "Branding",
          ].map((t) => (
            <Link
              key={t}
              href={`/tags/${t.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs px-3 py-1 bg-white border border-pink-100 hover:bg-pink-50 transition"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
