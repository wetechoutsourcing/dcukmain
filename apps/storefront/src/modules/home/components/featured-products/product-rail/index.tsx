import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

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

  if (!pricedProducts) {
    return null
  }

  // Safely remove the word "collection" from the watermark title
  const watermarkText = collection.title ? collection.title.replace(/collection/i, '').trim() : ""

  return (
    <div className="content-container py-12 small:py-24">
      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center text-center mb-12">
        
        {/* Responsive Watermark Background Text (Word 'Collection' Removed) */}
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
          
          {/* Subtitle Content */}
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Sophisticated scents, unforgettable impressions
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
        </div>
      </div>

      {/* Product Grid */}
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-24 small:gap-y-36">
        {pricedProducts &&
          pricedProducts.map((product) => (
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