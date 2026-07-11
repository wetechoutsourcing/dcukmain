import Link from "next/link"

export default function SecondaryNav() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 text-sm">
      <div className="content-container flex items-center justify-between py-2">
          <Link href="/categories/exclusive-products" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Exclusive
          </Link>
          <Link href="/contact" className="hover:text-ui-fg-base text-ui-fg-subtle">
            SALE
          </Link>
          <Link href="/about" className="hover:text-ui-fg-base text-ui-fg-subtle">
            New Arrivals
          </Link>
          <Link href="/contact" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Sospiro
          </Link>
          <Link href="/about" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Moudon
          </Link>
          <Link href="/contact" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Cosmetics
          </Link>
          <Link href="/about" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Male Fragrances
          </Link>
          <Link href="/contact" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Female Fragrances
          </Link>
          <Link href="/about" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Deodorants
          </Link>
          <Link href="/contact" className="hover:text-ui-fg-base text-ui-fg-subtle">
            Gift Sets
          </Link>
          <Link href="/contact" className="hover:text-ui-fg-base text-ui-fg-subtle">
            All Products
          </Link>

      </div>
    </div>
  )
}