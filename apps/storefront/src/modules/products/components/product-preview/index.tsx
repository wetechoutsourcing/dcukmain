// import { Text } from "@modules/common/components/ui"
// import { getProductPrice } from "@lib/util/get-product-price"
// import { HttpTypes } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Thumbnail from "../thumbnail"
// import PreviewPrice from "./price"

// export default async function ProductPreview({
//   product,
//   isFeatured,
//   region: _region,
// }: {
//   product: HttpTypes.StoreProduct
//   isFeatured?: boolean
//   region: HttpTypes.StoreRegion
// }) {
//   // const pricedProduct = await listProducts({
//   //   regionId: region.id,
//   //   queryParams: { id: [product.id!] },
//   // }).then(({ response }) => response.products[0])

//   // if (!pricedProduct) {
//   //   return null
//   // }

//   const { cheapestPrice } = getProductPrice({
//     product,
//   })

//   return (
//     <LocalizedClientLink href={`/products/${product.handle}`} className="group">
//       <div data-testid="product-wrapper">
//         <Thumbnail
//           thumbnail={product.thumbnail}
//           images={product.images}
//           size="full"
//           isFeatured={isFeatured}
//         />
//         <div className="flex txt-compact-medium mt-4 justify-between">
//           <Text className="text-ui-fg-subtle" data-testid="product-title">
//             {product.title}
//           </Text>
//           <div className="flex items-center gap-x-2">
//             {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
//           </div>
//         </div>
//       </div>
//     </LocalizedClientLink>
//   )
// }

import { Text } from "@modules/common/components/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  // In Medusa, calculated discounts are typically exposed as percentage_diff.
  // Adjust this variable if your getProductPrice utility returns it under a different name.
  const discountPercentage = cheapestPrice?.percentage_diff

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block h-full">
      <div 
        data-testid="product-wrapper" 
        className="relative flex h-full flex-col rounded-2xl bg-ui-bg-subtle p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:bg-ui-bg-base"
      >
        {/* Modern floating discount badge */}
        {discountPercentage && parseFloat(discountPercentage) > 0 && (
          <div className="absolute left-5 top-5 z-10 flex items-center justify-center rounded-full border border-green-200 bg-green-100/80 px-2.5 py-1 text-xs font-bold text-green-700 shadow-sm backdrop-blur-md">
            -{discountPercentage}% off
          </div>
        )}

        {/* Thumbnail with smooth image scaling on hover */}
        <div className="overflow-hidden rounded-xl">
          <div className="transition-transform duration-500 ease-out group-hover:scale-105">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col justify-between px-1">
          <Text className="text-ui-fg-base text-base font-medium" data-testid="product-title">
            {product.title}
          </Text>
          <div className="mt-2 flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}