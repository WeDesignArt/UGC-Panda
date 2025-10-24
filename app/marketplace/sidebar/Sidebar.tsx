import { RiSearchLine } from "@remixicon/react";

export default function Sidebar() {
  const categories = [
    "Beauty",
    "Fashion",
    "Games",
    "Lifestyle",
    "Parenting",
    "Pet Care",
    "Photoshoot",
    "Sport Fitness",
    "Travel",
    "Vloggers",
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-xl p-5 space-y-6 h-fit">
      {/* background blur effect */}

      {/* content wrapper with higher z-index */}
      <div className="relative z-10 space-y-6">
        {/* Search */}
        <div>
          <h3 className="font-bold text-xl mb-2">Search</h3>
          <div className="border-b my-5"></div>

          {/* Wrapper banaya relative ke liye */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-full px-4 py-3 pr-12 focus:ring-2 border-none focus:ring-pink-500 bg-pink-100"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 cursor-pointer">
              <RiSearchLine className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-xl mb-2">Select Category</h3>
          <div className="border-b my-5"></div>
          <div className="space-y-2">
            {categories.map((cat, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="radio" className="accent-pink-500" />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-bold text-xl mb-2">Price Range</h3>
          <div className="border-b my-5"></div>

          {/* Inputs with $ */}
          <div className="flex gap-2 mb-4">
            <div className="relative w-1/2">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                placeholder="Min"
                className="w-full border rounded-md pl-6 pr-2 py-1"
              />
            </div>

            <div className="relative w-1/2">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                placeholder="Max"
                className="w-full border rounded-md pl-6 pr-2 py-1"
              />
            </div>
          </div>

          {/* Range Slider */}
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="w-full accent-pink-500"
          />
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-semibold text-xl mb-2">Rating</h3>
          <div className="border-b my-5"></div>
          <div className="space-y-2 text-yellow-500 text-xl">
            {[5, 4, 3, 2, 1].map((stars) => (
              <label
                key={stars}
                className="flex items-center justify-between cursor-pointer"
              >
                {/* Radio button (dot circle) */}
                <input
                  type="radio"
                  name="rating"
                  value={stars}
                  className="accent-pink-500"
                />

                {/* Stars aligned right */}
                <span>
                  {"★".repeat(stars)}
                  {"☆".repeat(5 - stars)}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
