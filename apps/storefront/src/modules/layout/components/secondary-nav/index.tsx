"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"

const CATEGORIES = [
  { name: "Exclusive", href: "/categories/exclusive-products" },
  { name: "SALE", href: "/contact" },
  { name: "New Arrivals", href: "/about" },
  { name: "Sospiro", href: "/contact" },
  { name: "Moudon", href: "/about" },
  { name: "Cosmetics", href: "/contact" },
  { name: "Male Fragrances", href: "/about" },
  { name: "Female Fragrances", href: "/contact" },
  { name: "Deodorants", href: "/about" },
  { name: "Gift Sets", href: "/contact" },
  { name: "All Products", href: "/contact" },
]

export default function SecondaryNav() {
  const [mounted, setMounted] = useState(false)
  const [showNav, setShowNav] = useState(true)

  // Carousel Scroll States
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const lastScrollY = useRef(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 1. Check if we need scroll arrows (runs on mount and resize)
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      // Use Math.ceil to prevent 1px rounding errors on scaled displays
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }
  }

  useEffect(() => {
    setMounted(true)
    checkScroll() // Initial check
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  // 2. Handle Smart Scroll (Hide on down, Show on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 3. Scroll Button Logic
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250 // Distance to scroll per click
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="h-[49px] w-full bg-[#504180] border-b border-white/10 relative z-40" />
  }

  return (
    <nav
      className={`bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] border-b border-white/10 text-white z-40 shadow-md transition-transform duration-300 ease-in-out sticky top-0
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Relative container allows the absolute buttons to position correctly */}
      <div className="max-w-[1600px] mx-auto px-2 md:px-6 relative flex items-center h-[49px]">
        
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-16 flex items-center justify-center bg-gradient-to-r from-[#151025] via-[#151025]/90 to-transparent text-white/60 hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Scrollable Container */}
        {/* Hidden scrollbar classes included at the end of the className string */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto w-full px-4 sm:px-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="text-[11px] sm:text-xs font-bold lg:font-semibold uppercase tracking-wider lg:tracking-[0.1em] text-white/80 hover:text-white lg:hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap py-2"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-16 flex items-center justify-center bg-gradient-to-l from-[#151025] via-[#151025]/90 to-transparent text-white/60 hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

      </div>
    </nav>
  )
}