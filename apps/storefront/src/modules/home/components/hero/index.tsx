import React from "react";

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-500 fill-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-zinc-50 overflow-hidden font-sans">
      
      {/* Soft CSS Gradient Background (replaces the image) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-zinc-50 to-zinc-100"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6 mx-auto mt-12">
        
        {/* Trust Badge: Reviews */}
        <div className="flex items-center gap-3 px-5 py-2 mb-8 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-md shadow-sm animate-fade-in-up">
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span className="text-xs font-semibold tracking-widest text-zinc-800 uppercase mt-0.5">
            25,000+ Verified Reviews
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 leading-[1.1] mb-6 tracking-tight">
          The Art of <br className="md:hidden" /> 
          <span className="italic text-amber-700/90 font-light">Exquisite</span> Fragrance
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed mb-10">
          Discover a world-class curation of luxury, designer, and authentic Arabic perfumes. Featuring exclusive collections from <span className="text-zinc-900 font-medium">Sospiro</span>, <span className="text-zinc-900 font-medium">Moudon</span>, and <span className="text-zinc-900 font-medium">Ritaj</span>.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href='/store'
            className="px-10 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-bold shadow-lg shadow-zinc-900/20 text-center"
          >
            Shop Collections
          </a>
        </div>

        {/* Trust Badge: Customer Base */}
        <div className="mt-16 flex items-center justify-center gap-2 text-zinc-600">
          <ShieldCheckIcon />
          <p className="text-sm font-medium tracking-wide">
            Trusted by <span className="text-zinc-900 font-semibold">100,000+</span> Happy Customers Worldwide
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;