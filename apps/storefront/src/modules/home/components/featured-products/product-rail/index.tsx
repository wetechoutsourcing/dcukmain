import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

// 1. Pre-compile Regex outside the component to save memory
const COLLECTION_REGEX = /collection/i;

// 2. Use a Dictionary (Hash Map) based on collection handles for O(1) lookup
const SUBTITLES: Record<string, string> = {
  "sospiro": "Sophisticated scents, unforgettable impressions",
  "moudon": "Modest luxury by Moudon Collection",
  "ritaj": "Refined and Timeless",
  "trending": "Discover what’s trending now",
  "gift-sets": "Celebrate every moment with our gift sets", 
  "gift-set": "Celebrate every moment with our gift sets", // Catch-all for singular
  "arabic": "Elegant Arabic styles for every occasion",
};

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  // 3. Prevent rendering empty containers if the array is empty
  if (!pricedProducts?.length) {
    return null
  }

  // 4. Clean, direct variable assignments
  const watermarkText = collection.title?.replace(COLLECTION_REGEX, '').trim() || "";
  const subtitle = SUBTITLES[collection.handle] || "Discover our exclusive collection";

  return (
    <div className="content-container py-12 small:py-24">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center text-center mb-12">
        
        {/* Responsive Watermark Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden w-full">
          <span className="text-[clamp(4rem,14vw,12rem)] leading-none font-black text-gray-200/40 uppercase tracking-wider whitespace-nowrap select-none">
            {watermarkText}
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Gold Collection Label */}
          <span className="text-sm font-semibold tracking-widest text-[#B5945B] uppercase mb-3">
            Collection
          </span>
          
          {/* Main Heading */}
          <h2 className="text-4xl small:text-5xl font-serif text-[#2A1B54] mb-4">
            {collection.title}
          </h2>
          
          {/* Dynamic Subtitle Content */}
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            {subtitle}
          </p>

          {/* Quick Links / Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <button className="px-6 py-2.5 bg-[#2A1B54] text-white rounded-full text-sm font-medium shadow-md transition-transform hover:scale-105">
              Best Seller
            </button>
            <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
              New Arrivals
            </button>
            <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
              Sale
            </button>
          </div>
          {/* View All Link */}
          <div className="mt-2">
            <InteractiveLink href={`/collections/${collection.handle}`}>
              View all {collection.title}
            </InteractiveLink>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-24 small:gap-y-36">
        {pricedProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>

      {/* Centered View All Button Below Products */}
      <div className="mt-16 flex justify-center">
        <a 
          href={`/collections/${collection.handle}`}
          className="px-8 py-3 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors rounded-sm shadow-sm"
        >
          View All Products
        </a>
      </div>
    </div>
  )
}