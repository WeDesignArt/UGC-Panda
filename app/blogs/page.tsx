import { Suspense } from "react";
import BlogsPageClient from "./BlogsPageClient";

export default function BlogsPage() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogsPageClient />
    </Suspense>
  );
}
