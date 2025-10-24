"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

function PaginationContentWrapper({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className="gradient-main text-white rounded-full"
              href="#"
              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}

export default function PaginationWrapper(props: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <Suspense fallback={<div>Loading pagination...</div>}>
      <PaginationContentWrapper {...props} />
    </Suspense>
  );
}
