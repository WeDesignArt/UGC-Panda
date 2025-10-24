"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Divider from "@/components/Divider";
import Link from "next/link";
import Pagination from "./pagination/Pagination";
import Sidebar from "./sidebar/Sidebar";
import MarketplaceCard from "./cards/MarketplaceCard"; // ab isme sirf card hi export hoga

const cards = [
  {
    id: 1,
    title: "Fashion Summer Collection",
    category: "Fashion",
    price: "$120",
    image: "/marketplace/product-1.jpg",
    author: "Sophia",
    authorImage: "/creators/creator-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Travel Vlog Experience",
    category: "Travel",
    price: "$80",
    image: "/marketplace/product-2.jpg",
    author: "Michael",
    authorImage: "/creators/creator-2.jpg",
    rating: 4,
  },
  {
    id: 3,
    title: "Pet Care Essentials",
    category: "Pet Care",
    price: "$60",
    image: "/marketplace/product-3.jpg",
    author: "Emma",
    authorImage: "/creators/creator-3.jpg",
    rating: 3,
  },
  {
    id: 4,
    title: "Gaming Stream Setup",
    category: "Games",
    price: "$200",
    image: "/marketplace/product-4.jpg",
    author: "David",
    authorImage: "/creators/creator-4.jpg",
    rating: 5,
  },
  {
    id: 5,
    title: "Travel Vlog Experience",
    category: "Travel",
    price: "$80",
    image: "/marketplace/product-5.jpg",
    author: "Michael",
    authorImage: "/creators/creator-2.jpg",
    rating: 4,
  },
  {
    id: 6,
    title: "Pet Care Essentials",
    category: "Pet Care",
    price: "$60",
    image: "/marketplace/product-6.jpg",
    author: "Emma",
    authorImage: "/creators/creator-3.jpg",
    rating: 3,
  },
  {
    id: 7,
    title: "Gaming Stream Setup",
    category: "Games",
    price: "$200",
    image: "/marketplace/product-7.jpg",
    author: "David",
    authorImage: "/creators/creator-4.jpg",
    rating: 5,
  },
  {
    id: 8,
    title: "Travel Vlog Experience",
    category: "Travel",
    price: "$80",
    image: "/marketplace/product-8.jpg",
    author: "Michael",
    authorImage: "/creators/creator-2.jpg",
    rating: 4,
  },
  {
    id: 9,
    title: "Pet Care Essentials",
    category: "Pet Care",
    price: "$60",
    image: "/marketplace/product-9.jpg",
    author: "Emma",
    authorImage: "/creators/creator-3.jpg",
    rating: 3,
  },
  {
    id: 10,
    title: "Gaming Stream Setup",
    category: "Games",
    price: "$200",
    image: "/marketplace/product-4.jpg",
    author: "David",
    authorImage: "/creators/creator-4.jpg",
    rating: 5,
  },
  {
    id: 11,
    title: "Fashion Summer Collection",
    category: "Fashion",
    price: "$120",
    image: "/marketplace/product-1.jpg",
    author: "Sophia",
    authorImage: "/creators/creator-1.jpg",
    rating: 5,
  },
  {
    id: 12,
    title: "Travel Vlog Experience",
    category: "Travel",
    price: "$80",
    image: "/marketplace/product-2.jpg",
    author: "Michael",
    authorImage: "/creators/creator-2.jpg",
    rating: 4,
  },
  {
    id: 13,
    title: "Pet Care Essentials",
    category: "Pet Care",
    price: "$60",
    image: "/marketplace/product-3.jpg",
    author: "Emma",
    authorImage: "/creators/creator-3.jpg",
    rating: 3,
  },
  {
    id: 14,
    title: "Gaming Stream Setup",
    category: "Games",
    price: "$200",
    image: "/marketplace/product-4.jpg",
    author: "David",
    authorImage: "/creators/creator-4.jpg",
    rating: 5,
  },
  {
    id: 15,
    title: "Travel Vlog Experience",
    category: "Travel",
    price: "$80",
    image: "/marketplace/product-5.jpg",
    author: "Michael",
    authorImage: "/creators/creator-2.jpg",
    rating: 4,
  },
  {
    id: 16,
    title: "Pet Care Essentials",
    category: "Pet Care",
    price: "$60",
    image: "/marketplace/product-6.jpg",
    author: "Emma",
    authorImage: "/creators/creator-3.jpg",
    rating: 3,
  },
  {
    id: 17,
    title: "Gaming Stream Setup",
    category: "Games",
    price: "$200",
    image: "/marketplace/product-7.jpg",
    author: "David",
    authorImage: "/creators/creator-4.jpg",
    rating: 5,
  },
];

export default function MarketPlaceContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const perPage = 9;
  const totalPages = Math.ceil(cards.length / perPage);

  const visible = cards.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <Divider
        title="UGC Marketplace"
        breadcrumb={
          <>
            <Link href="/">Home</Link> /{" "}
            <Link href="/contact">UGC Marketplace</Link>
          </>
        }
      />

      <section className="relative">
        <div className="absolute right-0 bottom-0 inline-flex radial-blur lg:size-80 z-0"></div>
        <div className="absolute left-0 top-0 inline-flex radial-blur lg:size-80 z-0"></div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Sidebar />

          <div className="lg:col-span-3">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((card) => (
                <MarketplaceCard key={card.id} {...card} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <Pagination
                total={totalPages}
                page={currentPage}
                setPage={(p: number) => router.push(`?page=${p}`)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
