import { Star, ShieldCheck, Users } from "@medusajs/icons";

const MarqueeContent = () => (
  <>
    {/* Removed mx-8. Spacing is now handled by the parent's gap property */}
    <span className="flex items-center gap-2 text-gray-600 shrink-0">
      <Star className="w-4 h-4 text-yellow-500" />
      99.9% 5-STAR RATINGS
    </span>
    <span className="flex items-center gap-2 text-gray-600 shrink-0">
      <ShieldCheck className="w-4 h-4 text-green-600" />
      25,000+ VERIFIED REVIEWS
    </span>
    <span className="flex items-center gap-2 text-gray-600 shrink-0">
      <Users className="w-4 h-4 text-blue-500" />
      100,000+ HAPPY CUSTOMERS
    </span>
  </>
);

export default function MovingNav() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 text-sm overflow-hidden flex relative w-full">
      
      {/* 
        1. gap-16 sets perfect equal spacing between items 
        2. pr-16 sets the exact same gap at the end so it connects perfectly to the next block
        3. Repeating <MarqueeContent /> guarantees the block is wide enough for large screens 
      */}
      <div className="animate-marquee flex gap-16 pr-16 items-center py-2 shrink-0">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <div className="animate-marquee flex gap-16 pr-16 items-center py-2 shrink-0" aria-hidden="true">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          /* Removed min-width: 100% so the div strictly hugs the width of its content */
        }
      `}</style>
    </div>
  );
}