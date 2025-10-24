"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage?: number; // optional
  setPage?: (page: number) => void; // optional
}

export default function Pagination({
  totalPages,
  currentPage,
  setPage,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // agar state wala setPage mila hai to usko use karo
  // warna router + query params ka use karo
  const handlePageChange = (page: number) => {
    if (setPage) {
      setPage(page);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`?${params.toString()}`, { scroll: false }); // 👈 scroll disable
    }
  };

  // agar currentPage prop mila hai use wo, warna query param se le lo
  const pageParam = searchParams.get("page");
  const activePage = currentPage ?? (pageParam ? parseInt(pageParam) : 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Prev */}
      {/* <button
        disabled={activePage === 1}
        onClick={() => handlePageChange(activePage - 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button> */}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded-full ${
            activePage === page ? "gradient-main-reverse text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      {/* <button
        disabled={activePage === totalPages}
        onClick={() => handlePageChange(activePage + 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button> */}
    </div>
  );
}
