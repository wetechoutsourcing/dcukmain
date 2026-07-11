"use client"

import React, { useState, useRef, useEffect } from "react"
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
  // UI States
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visibleCount, setVisibleCount] = useState(CATEGORIES.length)

  // Scroll Reveal States
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 1. Handle Click Outside for Dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 2. Handle Screen Resize for Category Slicing
  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(3) // Mobile: 3 options
      } else if (window.innerWidth < 1024) {
        setVisibleCount(5) // Tablet: 5 options
      } else {
        setVisibleCount(CATEGORIES.length) // Desktop: All options
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 3. Handle Smart Scroll (Hide on down, Show on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // If scrolling down and past the top 50px, hide the navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false)
        setIsMoreOpen(false) // Auto-close dropdown when scrolling down
      } else {
        // If scrolling up, show the navbar
        setShowNav(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent hydration mismatch by rendering a placeholder before the client mounts
  if (!mounted) {
    return <div className="h-[49px] w-full bg-[#151025] border-b border-white/10 relative z-40" />
  }

  // Split categories based on current screen size
  const visibleCategories = CATEGORIES.slice(0, visibleCount)
  const hiddenCategories = CATEGORIES.slice(visibleCount)

  return (
    <nav
      className={`bg-[#151025] border-b border-white/10 text-white z-40 shadow-md transition-transform duration-300 ease-in-out sticky top-0
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="content-container max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between py-3">

        {/* Dynamic Visible Categories */}
        <div className="flex items-center justify-between w-full gap-2 sm:gap-4 lg:gap-4">
          {visibleCategories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="text-[11px] sm:text-xs font-bold lg:font-semibold uppercase tracking-wider lg:tracking-[0.15em] text-white/80 lg:text-white/70 hover:text-white lg:hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap"
            >
              {cat.name}
            </Link>
          ))}

          {/* "More" Button & Dropdown Container (Only renders if there are hidden items) */}
          {hiddenCategories.length > 0 && (
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full transition-all duration-200 border border-white/15 shadow-sm"
                aria-expanded={isMoreOpen}
              >
                <span>More</span>
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Dropdown Menu Box */}
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#1a142c] border border-white/20 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                    {hiddenCategories.map((cat, index) => (
                      <Link
                        key={index}
                        href={cat.href}
                        onClick={() => setIsMoreOpen(false)}
                        className="block px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-none"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}