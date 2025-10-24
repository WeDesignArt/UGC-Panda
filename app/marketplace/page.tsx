"use client";

import { Suspense } from "react";
import MarketPlaceContent from "./MarketPlaceContent";

export default function MarketPlacePage() {
  return (
    <Suspense fallback={<div>Loading marketplace...</div>}>
      <MarketPlaceContent />
    </Suspense>
  );
}
