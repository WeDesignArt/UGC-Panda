interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Sidebar({ selectedCategory, setSelectedCategory }: SidebarProps) {
  const categories = [
    "All",
    "💪 Health & Wellness",
    "💄 Cosmetic & Beauty",
    "👗 Apparel & Fashion",
    "📱 Apps & Digital Services",
    "🍔 Food & Beverages",
    "🐶 Pets",
    "👨‍👩‍👧 Children & Family",
    "💻 Technology & Gadgets",
    "🏠 Home & Lifestyle",
  ];

  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-5 h-fit w-full md:w-64">
      <h3 className="font-bold text-xl mb-3">Select Category</h3>
      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat.replace(/^[^\w]+ /, ""))} // remove emoji for filtering
            className={`px-4 py-2 text-left rounded-full transition-all duration-200 ${
              selectedCategory === cat.replace(/^[^\w]+ /, "")
                ? "bg-pink-600 text-white"
                : "text-gray-500 hover:text-black hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
