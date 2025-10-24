"use client";

import { useSearchParams } from "next/navigation";
import Sidebar from "./components/Sidebar";
import BlogCard from "./components/Blogcard";
import Pagination from "@/components/Pagination";
import Divider from "@/components/Divider";
import Link from "next/link";

const POSTS = [
  {
    id: 1,
    title: "Life won't one Beast air Over above all",
    author: "Marry Biden",
    date: "14/03/2024",
    excerpt:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image: "/post1.jpg",
  },
  {
    id: 2,
    title: "How to grow your creative channel fast",
    author: "Ilyana Bee",
    date: "08/03/2024",
    excerpt:
      "Practical steps and tips for consistent growth on social platforms...",
    image: "/post2.jpg",
  },
  {
    id: 3,
    title: "Style your product presentation right",
    author: "Julia Jade",
    date: "01/03/2024",
    excerpt: "Visual tips for creating product content that converts...",
    image: "/post3.jpg",
  },
  {
    id: 4,
    title: "Boost your content strategy with design",
    author: "John Carter",
    date: "20/02/2024",
    excerpt: "Learn how design can make your blog posts more engaging...",
    image: "/post4.jpg",
  },
  {
    id: 5,
    title: "Maximizing productivity with smart tools",
    author: "Sana Malik",
    date: "15/02/2024",
    excerpt: "Discover the top tools professionals use to save time...",
    image: "/post5.jpg",
  },
  {
    id: 6,
    title: "The future of AI in everyday life",
    author: "David Chen",
    date: "10/02/2024",
    excerpt: "How artificial intelligence is shaping our routines...",
    image: "/post2.jpg",
  },
  {
    id: 7,
    title: "Healthy lifestyle tips for remote workers",
    author: "Amna Noor",
    date: "05/02/2024",
    excerpt: "Stay active and focused while working from home...",
    image: "/post1.jpg",
  },
  {
    id: 8,
    title: "Top 10 travel destinations for 2024",
    author: "Alex Brown",
    date: "01/02/2024",
    excerpt: "Explore the must-visit places around the world this year...",
    image: "/post3.jpg",
  },
  {
    id: 9,
    title: "Effective ways to manage stress",
    author: "Sara Lee",
    date: "28/01/2024",
    excerpt: "Simple techniques for maintaining mental well-being...",
    image: "/post5.jpg",
  },
  {
    id: 10,
    title: "Building a strong online brand presence",
    author: "Michael Ross",
    date: "20/01/2024",
    excerpt: "Strategies to grow your brand visibility digitally...",
    image: "/post4.jpg",
  },
];

export default function BlogsPageClient() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const perPage = 4;
  const totalPages = Math.ceil(POSTS.length / perPage);

  const visible = POSTS.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <Divider
        title="Blogs &amp; Resources"
        breadcrumb={
          <>
            <Link href="/">Home</Link> / <Link href="/contact">Blogs</Link>
          </>
        }
      />

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          {visible.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </section>

        <aside className="lg:col-span-1">
          <Sidebar popular={POSTS.slice(0, 3)} />
        </aside>
      </main>
    </>
  );
}
