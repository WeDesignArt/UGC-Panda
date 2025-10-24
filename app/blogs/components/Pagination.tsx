"use client";

export default function Pagination({
  page,
  setPage,
  total,
}: {
  page: number;
  setPage: (p: number) => void;
  total: number;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-3 mt-6">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)} // ← yahan se state update hoga
          className={`w-8 h-8 rounded-full text-sm transition ${
            p === page
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
