"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string | number;
  title: string;
  image: string;
  author?: string;
  date?: string;
  excerpt?: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-1 border-[#FF0080] rounded-2xl bg-white transition w-full">
      {/* IMAGE WITH GAP */}
      <div className="p-4">
        <div className="relative w-full h-72 md:h-110 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6">
        <div className="text-sm flex items-center mb-2">
          <span className="gradient-main-text">Written by:</span>
          <span className="ml-1 font-medium text-gray-500">{post.author}</span>
          <div className="w-2 h-2 rounded-full gradient-main mx-8"></div>
          <span>{post.date}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          {post.title}
        </h3>

        <p className="text-base text-gray-600 mb-5">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          {/* Right arrow link */}
          <Link href={`/blogs/${post.id}`}>
            <button className="text-pink-600 px-4 py-2 rounded-xl text-sm cursor-pointer">
              <Image
                src="/icon-rightarrow.png"
                alt="Icon"
                width={35}
                height={35}
              />
            </button>
          </Link>

          <div className="flex items-center gap-3 text-sm font-lato">
            <button className="px-5 py-3 rounded-xl border border-pink-200 flex items-center gap-2">
              Share
              <Image src="/icon-share.png" alt="Icon" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
