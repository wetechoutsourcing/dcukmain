'use client';

import React, { useState } from 'react';

// Define the content for each tab
const tabContent = {
  promise: {
    id: 'promise',
    label: 'Our Promise',
    text: 'We deliver genuine fragrances with fast next-day shipping, 24/7 customer support, and a 30-day returns policy—ensuring quality, authenticity, and service you can trust every time.',
  },
  designers: {
    id: 'designers',
    label: 'Designers Collection (DCUK)',
    text: 'Explore our exclusive Designers Collection, featuring the finest niche and designer fragrances meticulously curated from the UK and around the globe.',
  },
  about: {
    id: 'about',
    label: 'About us',
    text: 'We are passionate about connecting fragrance lovers with their perfect signature scent. Our mission is to provide an unparalleled shopping experience with guaranteed authenticity.',
  },
};

// Placeholder data for the 4 videos
const videos = [
  { 
    id: 1, 
    title: 'Super', 
    src: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/Ad-1.mp4', poster: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/ad-1-picture.png' 
  },
  { 
    id: 2, 
    title: 'Review 1', 
    src: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/Ad-2.mp4', poster: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/ad-2-picture.png' 
  },
  { 
    id: 3, 
    title: 'Review 2', 
    src: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/Ad-3.mp4', poster: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/ad-3-picture.png' 
  },
  { 
    id: 4, 
    title: 'Dolce Melodia', 
    src: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/Ad-4.mp4', poster: 'https://ecrrnofmzdemqrwndshf.supabase.co/storage/v1/object/public/dcukperfumes-media/Promotional%20videos/ad-4-picture.png' 
  },
];

export default function PromotionalSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>('promise');

  return (
    <section className="pt-12 pb-0 px-4 max-w-7xl mx-auto w-full font-sans">

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
        {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === key
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            {tabContent[key].label}
          </button>
        ))}
      </div>

      {/* Dynamic Text Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50 inline-block p-2 rounded-md">
          {tabContent[activeTab].text}
        </p>
      </div>

      {/* Videos Section */}
      <div className="relative w-full flex items-center group">

        {/* Left Arrow Button */}
        <button
          className="absolute -left-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg border border-gray-100 text-black hover:bg-white hover:scale-105 transition-all hidden md:flex"
          aria-label="Previous videos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* 4-Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-[9/16] bg-gray-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow"
            >
              {/* Autoplaying Video */}
              <video
                src={video.src}
                poster={video.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Overlay Content (Simulating the text on the videos in the image) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute -right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg border border-gray-100 text-black hover:bg-white hover:scale-105 transition-all hidden md:flex"
          aria-label="Next videos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

    </section>
  );
}