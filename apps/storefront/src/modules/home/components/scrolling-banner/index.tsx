"use client" // Required if you are using Next.js App Router (Next 13+)

import React, { useState, useEffect } from "react"
import Image from "next/image"

const BANNER_IMAGES = [
  "https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/banner-images/giftset-banner-desktop.webp",
  "https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/banner-images/moudon-banner-desktop.webp",
  "https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/banner-images/ritaj-banner-desktop.webp",
  "https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/banner-images/sospiro-banner-desktop.webp",
]

const AutoScrollingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNER_IMAGES.length)
    }, 5000)

    // Cleanup the interval on component unmount
    return () => clearInterval(timer)
  }, [])

  return (
    // Removed the gray background and border for a clean, floating look
    <div className="relative w-full overflow-hidden bg-white py-6 md:py-10">
      
      {/* 
        The Track: Added a gap to separate the banners.
        The transform calculation centers the active slide while showing the edges of the next/previous slides.
      */}
      <div 
        className="flex gap-4 md:gap-6 transition-transform duration-700 ease-in-out"
        style={{ 
          // 85vw is the width of each slide.
          // To center it, we offset by 7.5vw (which is half of the remaining 15vw viewport space).
          // We also subtract the 1rem (16px) gap multiplied by the index.
          transform: `translateX(calc(-${currentIndex * 85}vw - ${currentIndex * 1}rem + 7.5vw))`
        }}
      >
        {BANNER_IMAGES.map((src, index) => (
          <div 
            key={index} 
            // Changed from w-full to 85vw to allow adjacent banners to peek in from the sides.
            // Added heavily rounded corners (rounded-[24px] to rounded-[40px]) to match DCUK's aesthetic.
            className="relative w-[85vw] flex-shrink-0 h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] rounded-[24px] md:rounded-[40px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Promotional banner ${index + 1}`}
              fill
              className="object-cover pointer-events-none"
              priority={index === 0}
              sizes="85vw"
            />
          </div>
        ))}
      </div>

      {/* 
        Navigation Dots: Updated to float over the bottom whitespace 
        and added an expanding pill-effect for the active dot.
      */}
      <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
        {BANNER_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? "bg-[#332252] w-8" // Expanding pill shape using DCUK's dark purple brand color
                : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default AutoScrollingBanner