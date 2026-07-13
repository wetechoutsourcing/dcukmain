import { Text, clx } from "@modules/common/components/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { Suspense, lazy } from "react";

const LazyFooterContent = lazy(() => Promise.resolve({ default: FooterContent }));

export default function Footer() {
  return (
    <Suspense fallback={<div className="h-96 bg-black" />}>
      <LazyFooterContent />
    </Suspense>
  );
}

function FooterContent() {
  return (
    <footer className="relative border-t border-white/10 w-full overflow-hidden">
      {/* Visually Rich Background */}
      <div className="absolute inset-0 bg-[#0a0508] z-0" />
      
      {/* Elegant Multi-layer Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f14] via-[#2a1a22] to-[#0f1729] z-10" />
      
      {/* Luxurious Pattern */}
      <div 
        className="absolute inset-0 z-20 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(245, 158, 211, 0.25) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)
          `,
          backgroundSize: '120px 120px, 150px 150px, 200px 200px'
        }}
      />

      {/* Subtle Gold Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent z-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent z-30" />

      <div className="content-container relative z-40 flex flex-col w-full text-white">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 md:py-28 items-start">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col gap-y-6">
            <LocalizedClientLink
              href="/"
              className="txt-compact-2xl text-white tracking-[4px] font-bold hover:text-amber-200 transition-colors"
            >
              DCUK PERFUMES
            </LocalizedClientLink>
            
            <p className="max-w-md text-white/80 leading-relaxed text-[15px]">
              Where timeless elegance meets modern sophistication. 
              Curated fragrances for those who appreciate the art of scent.
            </p>

            {/* Newsletter - More Premium */}
            <div className="mt-6">
              <p className="uppercase tracking-widest text-amber-200 text-sm mb-3">Join the Inner Circle</p>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border border-white/20 focus:border-amber-300 px-5 py-3.5 flex-1 rounded-l-2xl text-sm placeholder:text-white/40"
                />
                <button className="bg-gradient-to-r from-amber-200 to-yellow-300 text-black font-medium px-8 rounded-r-2xl hover:brightness-110 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
            {[
              { title: "Discover", links: ["New Arrivals", "Signature Scents", "Gift Sets", "Collections"] },
              { title: "Company", links: ["Our Story", "The Atelier", "Sustainability", "Journal"] },
              { title: "Support", links: ["Contact Us", "Shipping", "Returns", "Track Order"] },
              { title: "Legal", links: ["Privacy", "Terms", "Delivery", "Accessibility"] }
            ].map((section) => (
              <div key={section.title} className="flex flex-col gap-y-4">
                <span className="uppercase tracking-[2px] text-amber-200 text-sm font-medium">
                  {section.title}
                </span>
                <ul className="space-y-3 text-white/70 text-[15px]">
                  {section.links.map((item) => (
                    <li key={item}>
                      <LocalizedClientLink href="#" className="hover:text-white transition-colors">
                        {item}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-white/60">
            © {new Date().getFullYear()} Designers Collection Ltd • All Rights Reserved
          </div>

          <div className="flex items-center gap-8 text-white/60">
            <SocialIcon href="#" label="Instagram" svg={instagramSvg} />
            <SocialIcon href="#" label="TikTok" svg={tiktokSvg} />
            <SocialIcon href="#" label="Facebook" svg={facebookSvg} />
            <SocialIcon href="#" label="X" svg={xSvg} />
          </div>

          <div className="text-white/50 text-xs flex gap-6">
            <span>UK VAT GB425783182</span>
            <span>DE459632985</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component (same as before)
function SocialIcon({ href, label, svg }: { href: string; label: string; svg: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-amber-200 transition-colors">
      {svg}
    </a>
  );
}

// SVG Icons (same)
const instagramSvg = <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>;

const tiktokSvg = <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51V9.19a6.329 6.329 0 0 0-5.394 6.242 6.33 6.33 0 0 0 10.08 5.078L19.59 6.686z"/></svg>;

const facebookSvg = <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;

const xSvg = <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.806l5.385 7.12L18.901 1.153z"/></svg>;