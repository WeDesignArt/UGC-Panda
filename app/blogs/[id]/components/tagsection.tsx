import Link from "next/link";
import Image from "next/image";

export default function TagsSection() {
 const tags = [
  { name: "Reseller", slug: "reseller" },
  { name: "Hosting", slug: "hosting" },
  { name: "WP Hosting", slug: "wp-hosting" },
 ];

 return (
  <div className="border-y border-gray-300 py-4">
   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* Tags */}
    <div className="flex flex-wrap items-center gap-3">
     <p className="font-bold">Tags:</p>
     {tags.map((tag) => (
      <Link
       key={tag.slug}
       href={`/tags/${tag.slug}`}
       className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition"
      >
       {tag.name}
      </Link>
     ))}
    </div>

    {/* Share */}
    <div className="flex items-center gap-3">
     <p className="font-bold">Share:</p>
     <Link href="https://facebook.com" target="_blank">
      <Image src="/logo-fb.png" alt="Icon" width={18} height={18} />
     </Link>
     <Link href="https://twitter.com" target="_blank">
      <Image src="/logo-X.png" alt="Icon" width={18} height={18} />
     </Link>
     <Link href="https://instagram.com" target="_blank">
      <Image src="/logo-insta.png" alt="Icon" width={18} height={18} />
     </Link>
     <Link href="https://youtube.com" target="_blank">
      <Image src="/logo-yt.png" alt="Icon" width={18} height={18} />
     </Link>
    </div>
   </div>
  </div>
 );
}
