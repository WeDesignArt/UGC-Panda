"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React from "react";

type Props = {
  total: number;
  page?: number;
  setPage?: (p: number) => void;
};

export default function Pagination({ total, page, setPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // agar parent ne page diya ho use karo, warna URL se lo
  const pageParam = searchParams?.get("page");
  const currentPage = page ?? (pageParam ? parseInt(pageParam, 10) : 1);

  const pages = Array.from({ length: Math.max(1, total) }, (_, i) => i + 1);

  function goTo(p: number) {
    if (setPage) {
      // parent ko notify karo (parent apna router.push kar sakta hai)
      setPage(p);
      return;
    }

    // warna khud URL update karo
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (p === 1) params.delete("page");
    else params.set("page", String(p));

    const q = params.toString();
    const url = q ? `${pathname}?${q}` : pathname;
    router.push(url);
  }

  return (
    <div className="flex items-center gap-3 mt-6 justify-center">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goTo(p)}
          className={`w-8 h-8 rounded-full text-sm transition ${
            p === currentPage
              ? "gradient-main-reverse text-white"
              : "bg-white border border-gray-200 hover:bg-pink-50"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
